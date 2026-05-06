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
    title: "Fire ratings & certification",
    questions: [
      {
        question: "What fire rating levels do you offer?",
        answer:
          "We manufacture doors rated from FRL 30/30 through to FRL 240/240, tested and certified to AS 1905.1, BS 476 Part 22, and UL 10C standards. Each door ships with a certificate of compliance referencing the specific test report.",
      },
      {
        question: "How are your doors tested?",
        answer:
          "Every door design is tested in an accredited furnace facility under full fire conditions for its rated duration. We test to failure — meaning we verify performance beyond the rated time — so that our certifications reflect real-world reliability, not minimum thresholds.",
      },
      {
        question: "Can I get a door certified for both fire and acoustic ratings?",
        answer:
          "Yes. Our Professional and Sovereign series doors can be manufactured with combined fire and acoustic ratings. Acoustic performance up to Rw 45 is available depending on the door configuration and seal package.",
      },
    ],
  },
  {
    title: "Ordering & customisation",
    questions: [
      {
        question: "Can doors be manufactured to custom dimensions?",
        answer:
          "Yes. All series support custom height and width within the certified dimensional range. Our Professional and Sovereign series support oversized and double-leaf configurations. We manufacture to your project specification — no site trimming required.",
      },
      {
        question: "What is the typical lead time?",
        answer:
          "Standard series doors ship within 3–4 weeks from order confirmation. Custom configurations and large project orders are scheduled on a per-project basis — typically 4–8 weeks depending on specification complexity.",
      },
    ],
  },
  {
    title: "Installation & compliance",
    questions: [
      {
        question: "Do you provide installation documentation?",
        answer:
          "Every order includes a compliance certificate, a detailed installation guide, and a maintenance schedule. For project orders, we also provide a handover documentation pack formatted for building certifier review.",
      },
      {
        question: "Who installs the doors?",
        answer:
          "Installation should be carried out by a licensed contractor or certified installer. We can recommend approved installers in your region, or provide technical support to your nominated installer.",
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
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
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
