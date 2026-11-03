import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Flame } from "lucide-react";
import { BridgeProvider } from "@/components/bridge-provider";
import { MobileMenu } from "@/components/mobile-menu";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const appName = "СПЕЦИИ";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "#about", label: "О группе" },
  { href: "#repertoire", label: "Репертуар" },
  { href: "#riders", label: "Райдеры" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contacts", label: "Контакты" },
];

export const metadata: Metadata = {
  title: `${appName} — кавер-группа`,
  description: `Лучшие каверы на Урале: феерия звука, драйва и эмоций для вашего праздника.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn("dark font-sans", geist.variable)}>
      <body className="antialiased min-h-screen bg-background flex flex-col">
        <BridgeProvider />
        <header className="sticky top-0 z-50 w-full border-b border-primary/15 bg-background/10 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold tracking-[0.25em]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/40 shadow-[0_0_18px_-2px_var(--primary)]">
                <Flame className="h-5 w-5" />
              </div>
              <span>{appName}</span>
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <MobileMenu navLinks={navLinks} />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border/60">
          <div className="container mx-auto px-4 py-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {appName} · Кавер-группа · В числе
            лидеров сцены Урала
          </div>
        </footer>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
