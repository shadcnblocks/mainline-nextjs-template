import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Hyra lägenhet",
    questions: [
      {
        question: "Hur ansöker jag om en hyresrätt?",
        answer:
          "Du kan ansöka om våra lediga lägenheter direkt via vår hemsida eller genom att kontakta oss. Vi går igenom alla ansökningar och återkommer med besked inom en vecka.",
      },
      {
        question: "Vad ingår i hyran?",
        answer:
          "I hyran ingår värme, vatten och sophämtning. El och internet tecknas separat av hyresgästen.",
      },
      {
        question: "Får jag ha husdjur?",
        answer:
          "Ja, vi välkomnar husdjur i de flesta av våra fastigheter. Kontakta oss för att diskutera specifika förutsättningar för din lägenhet.",
      },
    ],
  },
  {
    title: "Köpa bostad",
    questions: [
      {
        question: "Hur fungerar köpprocessen?",
        answer:
          "Vi guidar dig genom hela processen – från visning till tillträde. Kontakta vår försäljningsavdelning för att boka en personlig visning av våra nyproducerade bostadsrätter.",
      },
      {
        question: "Erbjuder ni nyproduktion?",
        answer:
          "Ja, vi har regelbundet nya projekt med bostadsrätter. Anmäl dig till vårt nyhetsbrev för att få information om kommande projekt innan de släpps till allmänheten.",
      },
    ],
  },
  {
    title: "Om Svenska Hem",
    questions: [
      {
        question: "Hur länge har Svenska Hem funnits?",
        answer:
          "Svenska Hem grundades för över 30 år sedan och har sedan dess byggt och förvaltat tusentals bostäder i Stockholmsområdet. Vi är ett familjeägt företag med fokus på kvalitet och långsiktighet.",
      },
      {
        question: "Vad betyder 'kvadratsmarta planlösningar'?",
        answer:
          "Det innebär att vi noggrant designar varje lägenhet så att ytan utnyttjas maximalt. Smarta förvaringslösningar, genomtänkta rumssamband och ljusa miljöer gör att även mindre lägenheter känns rymliga och funktionella.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Vanliga frågor
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Vanliga frågor
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              Hittar du inte svaret du söker?{" "}
              <Link href="/contact" className="underline underline-offset-4">
                Kontakta oss
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
