"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Essential",
    monthlyPrice: "FRL 30/30",
    yearlyPrice: "FRL 60/60",
    description: "Residential & light commercial",
    features: [
      "30 or 60 minute fire rating",
      "Standard dimensions up to 2340 × 920mm",
      "Solid core construction",
      "Intumescent seal included",
    ],
  },
  {
    name: "Professional",
    monthlyPrice: "FRL 60/60",
    yearlyPrice: "FRL 120/120",
    features: [
      "All Essential series features and...",
      "60 or 120 minute fire rating",
      "Custom dimensions available",
      "Acoustic rating up to Rw 35",
      "Smoke seal integration",
      "Project documentation pack",
    ],
  },
  {
    name: "Sovereign",
    monthlyPrice: "FRL 120/120",
    yearlyPrice: "FRL 240/240",
    features: [
      "All Professional series features and...",
      "Up to 240 minute fire rating",
      "Oversized and double-leaf configurations",
      "Full acoustic + smoke + fire package",
      "Dedicated project engineer",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Door Systems by Series
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Every series is manufactured to meet specific fire rating, acoustic,
            and dimensional requirements. Select a starting point — every door is
            customised to your project specification.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === "Professional"
                  ? "outline-primary origin-top outline-4"
                  : ""
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                      {plan.name !== "Essential" && (
                        <span className="text-muted-foreground text-sm font-normal">
                          Max Rating
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {plan.name !== "Essential" ? (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={() => setIsAnnual(!isAnnual)}
                      aria-label="Toggle maximum rating"
                    />
                    <span className="text-sm font-medium">View maximum rating</span>
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                )}

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
                  variant={plan.name === "Professional" ? "default" : "outline"}
                >
                  Request Specification
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
