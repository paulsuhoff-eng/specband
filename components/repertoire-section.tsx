import { ExternalLink, ListMusic } from "lucide-react";
import { CardContent, CardTitle } from "@/components/ui/card";
import type { RepertoireLink } from "@/lib/data";

type RepertoireSectionProps = {
  links: RepertoireLink[];
};

export function RepertoireSection({ links }: RepertoireSectionProps) {
  return (
    <section
      id="repertoire"
      className="relative mx-auto w-full max-w-6xl px-6 py-20"
    >
      <div className="text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          <ListMusic className="h-3.5 w-3.5" />
          Репертуар
        </div>
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          Что мы играем
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Полный актуальный список репертуара и райдеры доступны для скачивания.
        </p>
      </div>

      <div
        id="riders"
        className="mx-auto mt-12 scroll-mt-24 grid max-w-4xl gap-6 sm:grid-cols-2"
      >
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group flex items-start gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 shadow-[0_0_18px_-4px_var(--primary)]">
                <Icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <CardTitle className="flex items-center gap-2 text-lg font-bold">
                  {link.title}
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </CardTitle>
                <CardContent className="mt-1 p-0 text-sm text-muted-foreground">
                  {link.subtitle}
                </CardContent>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
