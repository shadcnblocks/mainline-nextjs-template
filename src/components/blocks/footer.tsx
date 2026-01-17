import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Våra bostäder", href: "/pricing" },
    { name: "Om oss", href: "/about" },
    { name: "Vanliga frågor", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ];

  const social = [
    { name: "Instagram", href: "https://instagram.com/svenskahem" },
    { name: "LinkedIn", href: "https://linkedin.com/company/svenska-hem" },
  ];

  const legal = [{ name: "Integritetspolicy", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Hitta ditt drömboende
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Svenska Hem skapar unika bostäder med kvadratsmarta planlösningar på
          attraktiva platser i Stockholm.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <Link href="/contact">
              Anmäl intresse
            </Link>
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
        <div className="container flex flex-col items-center justify-center pb-8">
          <div className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-gradient-to-b from-current to-muted/40 bg-clip-text text-transparent">
            Svenska Hem
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            &copy; {new Date().getFullYear()} Svenska Hem i Bromma. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
