"use client";

import Link from "next/link";

import { Check, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "Slakthus Ett",
    location: "Johanneshov, Stockholm",
    status: "Pågående",
    description: "5 arkitektritade hus i bostadsrättsform",
    features: [
      "Studiolägenheter till paradvåningar",
      "Balkong eller terrass",
      "Gemensam takterrass",
      "Nära Avicii Arena",
    ],
    highlighted: true,
  },
  {
    name: "Ormbacka",
    location: "Järfälla",
    status: "Kommande",
    description: "44 bostäder med inflyttning 2026",
    features: [
      "Moderna planlösningar",
      "Naturnära läge",
      "Goda kommunikationer",
      "Familjevänligt område",
    ],
    highlighted: false,
  },
  {
    name: "Bromma Projekt",
    location: "Bromma, Stockholm",
    status: "Planering",
    description: "Nyproduktion i attraktivt läge",
    features: [
      "Smarta kvadratmeter",
      "Hög kvalitetsstandard",
      "Nära till service",
      "Egen entreprenad",
    ],
    highlighted: false,
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Våra bostadsprojekt
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Upptäck våra pågående och kommande bostadsprojekt i Stockholmsområdet.
            Alla med kvadratsmarta planlösningar och hög kvalitet.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {projects.map((project) => (
            <Card
              key={project.name}
              className={`${
                project.highlighted
                  ? "outline-primary origin-top outline-4"
                  : ""
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-foreground font-semibold">{project.name}</h3>
                    <span className={cn(
                      "text-xs font-medium px-2 py-1 rounded-full",
                      project.status === "Pågående" && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                      project.status === "Kommande" && "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                      project.status === "Planering" && "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                    )}>
                      {project.status}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
                      <MapPin className="size-4" />
                      {project.location}
                    </div>
                  </div>
                </div>

                <span className="text-muted-foreground text-sm">
                  {project.description}
                </span>

                <div className="space-y-3">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={project.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link href="/contact">
                    Anmäl intresse
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
