"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  X,
} from "lucide-react";
import { type GalleryPhoto, type GalleryVideo } from "@/lib/data";
import { VideoCard } from "@/components/video-card";

type GallerySectionProps = {
  photos: GalleryPhoto[];
  videos: GalleryVideo[];
};

export function GallerySection({ photos, videos }: GallerySectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback(
    (direction: 1 | -1) => {
      setActiveIndex((current) => {
        if (current === null) return current;
        return (current + direction + photos.length) % photos.length;
      });
    },
    [photos.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, step]);

  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  return (
    <>
      <section
        id="gallery"
        className="relative mx-auto w-full max-w-6xl px-6 py-20"
      >
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            <Camera className="h-3.5 w-3.5" />
            Фото и видео
          </div>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Живые моменты
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Атмосфера, драйв и живое звучание наших выступлений — на фото и в
            видеоотрывках.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="flex items-center justify-center gap-2 text-center text-2xl font-bold tracking-tight">
            <Clapperboard className="h-5 w-5 text-primary" />
            Видео
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Промо и лайвы
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <figure
                key={video.title}
                className="card-hover overflow-hidden rounded-2xl border border-border bg-card"
              >
                <VideoCard video={video} />
                <figcaption className="p-4">
                  <p className="font-semibold leading-tight">{video.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {video.event}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-card text-left"
              aria-label={`Открыть фото: ${photo.event}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </section>

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.event}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Закрыть фото"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Следующее фото"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="max-h-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="max-h-[80vh] w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
