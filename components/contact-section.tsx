"use client";

import { useState } from "react";
import {
  AtSign,
  CheckCircle2,
  Contact,
  Loader2,
  MessageCircle,
  Phone,
  PhoneCall,
  Send,
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ContactItem } from "@/lib/data";

type ContactSectionProps = {
  phones: ContactItem[];
  messengers: ContactItem[];
  socials: ContactItem[];
};

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Укажите ваше имя (минимум 2 символа)"),
  phone: z
    .string()
    .trim()
    .regex(/^[+()\-\s\d]{10,18}$/, "Введите корректный номер телефона"),
  date: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Опишите ваше мероприятие подробнее (минимум 10 символов)"),
});

type BookingForm = z.infer<typeof bookingSchema>;

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
        <p className="break-words font-semibold leading-tight">{item.value}</p>
      </div>
    </a>
  );
}

export function ContactSection({
  phones,
  messengers,
  socials,
}: ContactSectionProps) {
  const [values, setValues] = useState<BookingForm>({
    name: "",
    phone: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingForm, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const setField = (field: keyof BookingForm, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = bookingSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof BookingForm, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof BookingForm;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Проверьте заполненные поля");
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Заявка отправлена — мы скоро свяжемся с вами");
    }, 900);
  };

  return (
    <section
      id="contacts"
      className="relative mx-auto w-full max-w-6xl px-6 py-20"
    >
      <div className="text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          <Contact className="h-3.5 w-3.5" />
          Заявка и контакты
        </div>
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          Свяжитесь с нами удобным способом
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Позвоните, напишите в мессенджер или оставьте заявку на выступление —
          ответим быстро и подберём программу под ваш праздник.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="min-w-0">
          <h3 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <PhoneCall className="h-5 w-5 text-primary" />
            Контакты
          </h3>

          <div className="mt-6 space-y-6">
            <div>
              <p className="mb-3 text-sm uppercase tracking-widest text-muted-foreground">
                Телефоны
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {phones.map((item) => (
                  <ContactCard
                    key={item.value}
                    item={item}
                    title={item.label}
                    icon={Phone}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm uppercase tracking-widest text-muted-foreground">
                Мессенджеры
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {messengers.map((item) => (
                  <ContactCard
                    key={item.value}
                    item={item}
                    title={item.label}
                    icon={MessageCircle}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm uppercase tracking-widest text-muted-foreground">
                Соцсети
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {socials.map((item) => (
                  <ContactCard
                    key={item.value}
                    item={item}
                    title={item.label}
                    icon={AtSign}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-[22rem] flex-col items-center justify-center gap-4 text-center animate-in fade-in duration-500">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30 shadow-[0_0_24px_-6px_var(--primary)]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Заявка отправлена!
                </h3>
                <p className="max-w-md text-muted-foreground">
                  Спасибо, {values.name}! Мы получили вашу заявку и свяжемся с
                  вами в ближайшее время, чтобы обсудить детали выступления.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSubmitted(false);
                    setValues({ name: "", phone: "", date: "", message: "" });
                  }}
                >
                  Отправить ещё одну заявку
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="booking-name" className="text-sm font-medium">
                    Ваше имя
                  </label>
                  <Input
                    id="booking-name"
                    value={values.name}
                    onChange={(event) => setField("name", event.target.value)}
                    placeholder="Иван"
                    className="mt-2"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-phone"
                    className="text-sm font-medium"
                  >
                    Телефон
                  </label>
                  <Input
                    id="booking-phone"
                    type="tel"
                    value={values.phone}
                    onChange={(event) => setField("phone", event.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className="mt-2"
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-sm text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="booking-date" className="text-sm font-medium">
                    Дата мероприятия (необязательно)
                  </label>
                  <Input
                    id="booking-date"
                    type="date"
                    value={values.date}
                    onChange={(event) => setField("date", event.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-message"
                    className="text-sm font-medium"
                  >
                    О мероприятии
                  </label>
                  <Textarea
                    id="booking-message"
                    value={values.message}
                    onChange={(event) =>
                      setField("message", event.target.value)
                    }
                    placeholder="Расскажите о формате праздника, дате и пожеланиях…"
                    className="mt-2"
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" disabled={submitting} className="w-full">
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Отправляем…
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
