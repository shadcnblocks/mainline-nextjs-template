"use client";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Hyresrätter",
    monthlyPrice: "",
    yearlyPrice: "",
    description: "Moderna hyresrätter i Stockholm",
    features: [
      "Kvadratsmarta planlösningar",
      "Centrala lägen i Stockholm",
      "Personlig förvaltning",
      "Snabb och smidig service",
    ],
  },
  {
    name: "Bostadsrätter",
    monthlyPrice: "",
    yearlyPrice: "",
    description: "Nyproducerade bostadsrätter",
    features: [
      "Högkvalitativa material",
      "Energieffektiva byggnader",
      "Genomtänkta gemensamma ytor",
      "Välplanerade balkonger och uteplatser",
      "Attraktiva lägen",
      "Professionell säljprocess",
    ],
  },
  {
    name: "Lokaler",
    monthlyPrice: "",
    yearlyPrice: "",
    description: "Kommersiella lokaler",
    features: [
      "Flexibla planlösningar",
      "Centrala lägen",
      "Anpassning efter behov",
      "Långsiktiga samarbeten",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Våra boenden
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Svenska Hem erbjuder hyresrätter, bostadsrätter och kommersiella
            lokaler i attraktiva lägen runt om i Stockholmsområdet.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === "Bostadsrätter"
                  ? "outline-primary origin-top outline-4"
                  : ""
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground text-xl font-semibold">{plan.name}</h3>
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
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
                  variant={plan.name === "Bostadsrätter" ? "default" : "outline"}
                >
                  Läs mer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
