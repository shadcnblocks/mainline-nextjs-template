import Image from "next/image";

import {
  ArrowRight,
  ClipboardCheck,
  Flame,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Fire-rated up to 240 minutes",
    description: "Tested and certified to AS 1905.1, BS 476, and UL standards.",
    icon: Flame,
  },
  {
    title: "Custom-sized to project spec",
    description: "Manufactured to exact dimensions — no site trimming, no warranty voids.",
    icon: Ruler,
  },
  {
    title: "Specification-ready dispatch",
    description: "Every door ships with compliance documentation and install guides.",
    icon: ClipboardCheck,
  },
  {
    title: "Acoustic & smoke performance",
    description: "Integrated seals for sound reduction and smoke containment.",
    icon: ShieldCheck,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Make Every Opening Ready.
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Fire-rated door systems for safer passages, cleaner approvals, and
            confident project handovers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="/contact">
                Request a Project Quote
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="/#feature-modern-teams"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Explore Door Systems
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <Image
            src="/hero.webp"
            alt="Fire rated door installed in a modern building corridor"
            fill
            className="rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};

