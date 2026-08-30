import Image from "next/image";
import { Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { type Frontman } from "@/lib/data";

type FrontmenSectionProps = {
  frontmen: Frontman[];
};

export function FrontmenSection({ frontmen }: FrontmenSectionProps) {
  return (
    <div className="mt-12">
      <h3 className="flex items-center justify-center gap-2 text-center text-2xl font-bold tracking-tight">
        <Users className="h-5 w-5 text-primary" />
        Фронтмены
      </h3>
      <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        Огонь и лёд на одной сцене: два разных характера, которые вместе создают
        шоу, проживаемое от первой до последней песни.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {frontmen.map((member) => (
          <Card key={member.name} className="card-hover overflow-hidden p-0">
            <div className="relative aspect-[4/5] w-full bg-card">
              <div className="portrait-zoom absolute inset-0 overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-1 text-xs font-medium uppercase tracking-[0.25em] text-primary">
                  {member.role}
                </div>
                <div className="text-2xl font-black tracking-tight">
                  {member.name}
                </div>
              </div>
            </div>
            <div className="p-6 pt-4 text-muted-foreground">{member.text}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
