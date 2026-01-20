import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Lediga lägenheter", href: "/lagenheter" },
    { name: "Våra projekt", href: "/projekt" },
    { name: "Om oss", href: "/about" },
    { name: "Vanliga frågor", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ];

  const social = [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
  ];

  const legal = [{ name: "Integritetspolicy", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Hitta ditt nästa hem
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Upptäck våra lediga lägenheter och pågående projekt i
          Stockholmsområdet.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="/lagenheter">
              Se lediga lägenheter
            </a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-primary mt-10 w-full md:mt-14 lg:mt-20">
        <svg
          viewBox="0 0 800 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <defs>
            <linearGradient
              id="paint0_linear_footer"
              x1="400"
              y1="0"
              x2="400"
              y2="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="url(#paint0_linear_footer)"
            fontFamily="var(--font-display)"
            fontWeight="600"
            fontSize="90"
            letterSpacing="-0.02em"
          >
            Svenska Hem
          </text>
        </svg>
      </div>
    </footer>
  );
}
