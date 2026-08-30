import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", ".vibecraft", "assets", "gallery");

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

function encodePng(width, height, rgb) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type RGB
  const scanlineLength = width * 3 + 1;
  const raw = Buffer.alloc(scanlineLength * height);
  for (let y = 0; y < height; y++) {
    raw[y * scanlineLength] = 0;
    rgb.copy(raw, y * scanlineLength + 1, y * width * 3, (y + 1) * width * 3);
  }
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function hex(h) {
  return [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
}

const SPOTS = [
  { c: "#ff5c8a", p: [0.25, 0.32], r: 0.42 },
  { c: "#7c3aed", p: [0.72, 0.26], r: 0.46 },
  { c: "#22d3ee", p: [0.5, 0.55], r: 0.34 },
];

function makePhoto(variant, seedColor, hueShift) {
  const W = 960;
  const H = 640;
  const out = Buffer.alloc(W * H * 3);

  // ambient horizon glow (warm wash from bottom)
  const base = hex("#0a0a12");

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      let r = base[0];
      let g = base[1];
      let b = base[2];

      const nx = x / W;
      const ny = y / H;

      // floor reflection: brighter toward bottom center
      const floor = Math.max(0, 1 - Math.abs(ny - 0.95) / 0.3);
      r += (seedColor[0] * floor) / 18;
      g += (seedColor[1] * floor) / 18;
      b += (seedColor[2] * floor) / 18;

      // spotlights
      SPOTS.forEach((s, i) => {
        const cx = s.p[0];
        const cy = s.p[1];
        const dx = (nx - cx) / s.r;
        const dy = (ny - cy) / s.r;
        const d2 = dx * dx + dy * dy;
        const glow = Math.exp(-d2 * 2.2) * (0.75 + variant * 0.08);
        if (glow > 0.004) {
          const col = hex(s.c);
          const shift =
            Math.sin((variant + i * 0.7 + nx * 1.6) * 1.3) * hueShift;
          const mix = glow * (1.15 + shift * 0.08);
          r += col[0] * mix;
          g += col[1] * mix;
          b += col[2] * mix;
        }
      });

      // vignette
      const vx = (nx - 0.5) * 2;
      const vy = (ny - 0.5) * 2;
      const vig = 1 - 0.18 * Math.min(1, (vx * vx + vy * vy) * 0.9);

      out[(y * W + x) * 3] = Math.min(255, Math.round(r * vig));
      out[(y * W + x) * 3 + 1] = Math.min(255, Math.round(g * vig));
      out[(y * W + x) * 3 + 2] = Math.min(255, Math.round(b * vig));
    }
  }
  return encodePng(W, H, out);
}

const VARIANTS = [
  { name: "stage-neon", hex: "#ff5c8a", shift: 1.1 },
  { name: "stage-violet", hex: "#8b5cf6", shift: 0.9 },
  { name: "stage-cyan", hex: "#22d3ee", shift: 1.0 },
  { name: "stage-blue", hex: "#3b82f6", shift: 0.85 },
  { name: "stage-amber", hex: "#f59e0b", shift: 1.2 },
  { name: "stage-deep", hex: "#a855f7", shift: 0.7 },
];

mkdirSync(OUT, { recursive: true });
for (let i = 0; i < VARIANTS.length; i++) {
  const v = VARIANTS[i];
  const png = makePhoto(i, hex(v.hex), v.shift);
  writeFileSync(join(OUT, `${v.name}.png`), png);
  console.log(`wrote ${v.name}.png (${png.length} bytes)`);
}
