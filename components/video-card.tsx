"use client";

import { useCallback, useState } from "react";
import { Play } from "lucide-react";
import { type GalleryVideo } from "@/lib/data";

type VideoCardProps = {
  video: GalleryVideo;
};

export function VideoCard({ video }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const [src, setSrc] = useState(video.cover);

  const show = useCallback(() => setPlaying(true), []);
  const hide = useCallback(() => setPlaying(false), []);

  return (
    <div
      className={`group relative w-full overflow-hidden bg-black ${
        video.vertical ? "aspect-[9/16]" : "aspect-video"
      }`}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {playing ? (
        <iframe
          src={video.embedUrl}
          title={video.title}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={show}
          aria-label={`Воспроизвести: ${video.title}`}
          className="group absolute inset-0 flex cursor-pointer items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={video.title}
            onError={() => {
              if (video.coverFallback) setSrc(video.coverFallback);
            }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Play className="h-7 w-7 translate-x-0.5 fill-current" />
          </span>
          <span className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-center text-sm font-medium text-muted-foreground">
            Наведите, чтобы посмотреть
          </span>
        </button>
      )}
    </div>
  );
}
