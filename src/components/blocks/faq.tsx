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
    title: "Köpprocessen",
    questions: [
      {
        question: "Hur går det till att köpa en bostad från Svenska Hem?",
        answer:
          "Processen börjar med att du anmäler intresse för ett projekt. Du får sedan en personlig kontaktperson som guidar dig genom hela köpet, från visning till kontraktsskrivning och tillträde.",
      },
      {
        question: "Kan jag anpassa min lägenhet?",
        answer:
          "Ja, i tidiga skeden av bygget erbjuder vi ofta möjlighet att välja tillval för kök, badrum och ytskikt. Kontakta oss för att höra vilka alternativ som finns för det projekt du är intresserad av.",
      },
      {
        question: "När kan jag flytta in?",
        answer:
          "Inflyttningstid varierar beroende på projekt och byggskede. För pågående projekt anges beräknad inflyttning på respektive projektsida. Vi håller dig informerad under hela byggprocessen.",
      },
    ],
  },
  {
    title: "Finansiering",
    questions: [
      {
        question: "Vilka finansieringsalternativ finns?",
        answer:
          "Vi samarbetar med flera ledande banker som SBAB, Skandia och Nordea. De kan hjälpa dig med bolånefinansiering. Vi kan även rekommendera kontakt med våra samarbetspartners.",
      },
      {
        question: "Behöver jag betala en handpenning?",
        answer:
          "Ja, vid kontraktsskrivning betalas normalt en handpenning på 10% av köpesumman. Resterande belopp betalas vid tillträde när bostaden är färdigställd.",
      },
    ],
  },
  {
    title: "Om bostäderna",
    questions: [
      {
        question: "Vad menas med kvadratsmarta planlösningar?",
        answer:
          "Det innebär att vi designar våra bostäder för att maximera varje kvadratmeter. Genom smarta lösningar för förvaring, flexibla rum och genomtänkt möblering får du mer nytta av ytan.",
      },
      {
        question: "Vilken kvalitetsstandard har era bostäder?",
        answer:
          "Vi bygger i egen regi med hög kvalitetsstandard. Det innebär moderna kök och badrum, energieffektiva lösningar och material av hög kvalitet. Vi lämnar 10 års garanti på våra nyproduktioner.",
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
              </Link>{" "}
              så hjälper vi dig.
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
