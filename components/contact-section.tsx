import {
  AtSign,
  Contact,
  MessageCircle,
  Phone,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";
import type { ContactItem } from "@/lib/data";

type ContactSectionProps = {
  phones: ContactItem[];
  messengers: ContactItem[];
  socials: ContactItem[];
};

function ContactCard({
  item,
  title,
  icon: Icon,
}: {
  item: ContactItem;
  title: string;
  icon: LucideIcon;
}) {
  return (
    <a
      href={item.href}
      target={item.href?.startsWith("http") ? "_blank" : undefined}
      rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="card-hover flex min-w-0 items-center gap-4 rounded-xl border border-border bg-card p-5"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 shadow-[0_0_18px_-4px_var(--primary)]">
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-muted-foreground">{title}</p>
        {item.compact ? (
          <span className="mt-2 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_18px_-4px_var(--primary)] ring-1 ring-primary/30 transition-colors hover:bg-primary/90">
            <MessageCircle className="h-4 w-4" />
            {item.value}
          </span>
        ) : (
          <p className="break-words font-semibold leading-tight">
            {item.value}
          </p>
        )}
      </div>
    </a>
  );
}

export function ContactSection({
  phones,
  messengers,
  socials,
}: ContactSectionProps) {
  const channels = [
    ...phones.map((item) => ({ item, icon: Phone })),
    ...messengers.map((item) => ({ item, icon: MessageCircle })),
    ...socials.map((item) => ({ item, icon: AtSign })),
  ];

  return (
    <section
      id="contacts"
      className="relative mx-auto w-full max-w-6xl px-6 py-20"
    >
      <div className="text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          <Contact className="h-3.5 w-3.5" />
          Контакты
        </div>
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          Свяжитесь с нами удобным способом
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Позвоните, напишите в мессенджер или найдите нас в соцсетях — ответим
          быстро и подберём программу под ваш праздник.
        </p>
      </div>

      <div className="mt-12 grid gap-8">
        <div className="min-w-0">
          <h3 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <PhoneCall className="h-5 w-5 text-primary" />
            Контакты
          </h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map(({ item, icon }) => (
              <ContactCard
                key={item.value}
                item={item}
                title={item.label}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
