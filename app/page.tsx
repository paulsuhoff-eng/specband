import { ChevronDown, Mic2, Music4, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { RepertoireSection } from "@/components/repertoire-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { FrontmenSection } from "@/components/frontmen-section";
import {
  advantages,
  contactMessengers,
  contactPhones,
  contactSocials,
  eventTypes,
  frontmen,
  galleryPhotos,
  galleryVideos,
  groupFacts,
  repertoireLinks,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <div className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden flex flex-col">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,#2b1d11_0%,#140d08_55%,#0b0705_100%)]" />
        <Image
          src="/assets/spec-stage-bg.jpg"
          alt=""
          width={2560}
          height={1707}
          priority
          sizes="100vw"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-auto w-full object-cover blur-[0.15px] saturate-[0.98]"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,13,8,0.58)_0%,rgba(43,29,17,0.26)_38%,rgba(26,17,11,0.55)_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_50%_at_50%_36%,rgba(241,195,95,0.22)_0%,transparent_62%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(11,7,5,0.5)_100%)]" />
        <div className="pattern-grid-dark pointer-events-none absolute inset-0 opacity-25" />

        <section className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-14 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Music4 className="h-3.5 w-3.5" />
            Кавер-группа
          </div>

          <h1 className="flex w-full max-w-3xl justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            <Image
              src="/assets/spec-logo.png"
              alt="СПЕЦИИ"
              width={4167}
              height={1667}
              priority
              className="h-auto w-full drop-shadow-[0_0_40px_rgba(241,195,95,0.35)]"
            />
          </h1>

          <p className="mt-4 max-w-2xl text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Специи - музыка, которую можно попробовать на вкус
          </p>

          <p className="mt-4 text-sm uppercase tracking-[0.35em] text-muted-foreground/70 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            Свадьбы · Корпоративы · Вечеринки
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Link
              href="#contacts"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_-4px_var(--primary)] transition-transform hover:scale-105"
            >
              Заказать выступление
            </Link>
            <Link
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background/60 px-8 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              О группе
            </Link>
          </div>
        </section>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/45 to-transparent" />

        <div className="relative mx-auto pb-3 text-center text-muted-foreground/60">
          <ChevronDown className="mx-auto h-6 w-6 animate-bounce" />
        </div>
      </div>

      <section
        id="about"
        className="relative mx-auto w-full max-w-6xl px-6 py-10"
      >
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            <Mic2 className="h-3.5 w-3.5" />О группе
          </div>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Добавьте Специй вашему празднику!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Не просто музыканты, а феерия звука, драйва и эмоций. Узнайте, кто
            такие «Специи» и почему нас стоит пригласить.
          </p>
        </div>

        <div className="mt-8 mx-auto grid max-w-3xl gap-6">
          {groupFacts.map((fact) => (
            <Card key={fact.label} className="card-hover p-6">
              <CardTitle className="text-lg font-bold">{fact.label}</CardTitle>
              <CardContent className="mt-2 p-0 text-muted-foreground">
                {fact.text}
              </CardContent>
            </Card>
          ))}
        </div>

        <FrontmenSection frontmen={frontmen} />

        <div className="mt-12">
          <h3 className="flex items-center justify-center gap-2 text-center text-2xl font-bold tracking-tight">
            <Sparkles className="h-5 w-5 text-primary" />
            Почему «СПЕЦИИ»
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage) => {
              const Icon = advantage.icon;
              return (
                <Card key={advantage.title} className="card-hover p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 shadow-[0_0_18px_-4px_var(--primary)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{advantage.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {advantage.text}
                  </CardDescription>
                </Card>
              );
            })}
          </div>
        </div>

        <GallerySection photos={galleryPhotos} videos={galleryVideos} />

        <div className="mt-12">
          <h3 className="flex items-center justify-center gap-2 text-center text-2xl font-bold tracking-tight">
            <Sparkles className="h-5 w-5 text-primary" />
            Где играем
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {eventTypes.map((event) => {
              const Icon = event.icon;
              return (
                <Card
                  key={event.title}
                  className="card-hover group overflow-hidden p-0"
                >
                  <div className="event-photo relative aspect-[3/2]">
                    <Image
                      src={event.image.src}
                      alt={event.image.alt}
                      width={event.image.width}
                      height={event.image.height}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 shadow-[0_0_18px_-4px_var(--primary)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {event.text}
                    </CardDescription>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <RepertoireSection links={repertoireLinks} />

      <div className="relative isolate flex min-h-[36rem] flex-col overflow-hidden bg-background">
        <Image
          src="/assets/spec-stage-bg-2.jpg"
          alt=""
          width={7517}
          height={5011}
          sizes="100vw"
          priority
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,17,11,0.55)_82%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/45 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_30%,color-mix(in_oklch,var(--primary)_26%,transparent)_0%,transparent_70%)]" />
        <div className="pattern-grid-dark pointer-events-none absolute inset-0 opacity-25" />

        <section className="pointer-events-none relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Живая энергия сцены
          </div>
          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Каждый концерт —{" "}
            <span className="text-glow-soft text-primary">
              праздник, который запоминают
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Мощный живой звук, драйв и эмоции — «СПЕЦИИ» превращают любое
            событие в шоу, о котором говорят ещё долго.
          </p>
        </section>
      </div>

      <ContactSection
        phones={contactPhones}
        messengers={contactMessengers}
        socials={contactSocials}
      />
    </>
  );
}
