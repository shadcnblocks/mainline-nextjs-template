import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

type Company = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href: string;
};

export const Logos = () => {
  const topRowCompanies = [
    {
      name: "AS 1905.1",
      logo: "/logos/mercury.svg",
      width: 143,
      height: 26,
      href: "#",
    },
    {
      name: "BS 476",
      logo: "/logos/watershed.svg",
      width: 154,
      height: 31,
      href: "#",
    },
    {
      name: "UL Certified",
      logo: "/logos/retool.svg",
      width: 113,
      height: 22,
      href: "#",
    },
    {
      name: "ISO 9001",
      logo: "/logos/descript.svg",
      width: 112,
      height: 27,
      href: "#",
    },
  ];

  const bottomRowCompanies = [
    {
      name: "NFPA",
      logo: "/logos/perplexity.svg",
      width: 141,
      height: 32,
      href: "#",
    },
    {
      name: "BCA Compliant",
      logo: "/logos/monzo.svg",
      width: 104,
      height: 18,
      href: "#",
    },
    {
      name: "Green Building Council",
      logo: "/logos/ramp.svg",
      width: 105,
      height: 28,
      href: "#",
    },
    {
      name: "Intertek",
      logo: "/logos/raycast.svg",
      width: 128,
      height: 33,
      href: "#",
    },
    {
      name: "SAI Global",
      logo: "/logos/arc.svg",
      width: 90,
      height: 28,
      href: "#",
    },
  ];

  return (
    <section className="pb-28 lg:pb-32 overflow-hidden">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Tested. Certified. Trusted by the industry.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              Compliant with international fire safety standards.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Top row - 4 logos */}
          <LogoRow companies={topRowCompanies} gridClassName="grid-cols-4" />

          {/* Bottom row - 5 logos */}
          <LogoRow
            companies={bottomRowCompanies}
            gridClassName="grid-cols-5"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  gridClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop static version */}
      <div className="hidden md:block">
        <div
          className={cn(
            "grid items-center justify-items-center gap-x-20 lg:gap-x-28",
            gridClassName,
          )}
        >
          {companies.map((company, index) => (
            <Link href={company.href} target="_blank" key={index}>
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="dark:opacity/100 object-contain opacity-50 transition-opacity hover:opacity-70 dark:invert"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile marquee version */}
      <div className="md:hidden">
        <Marquee direction={direction} pauseOnHover>
          {companies.map((company, index) => (
            <Link
              href={company.href}
              target="_blank"
              key={index}
              className="mx-8 inline-block transition-opacity hover:opacity-70"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain"
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </>
  );
};
