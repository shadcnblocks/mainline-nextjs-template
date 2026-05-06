import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "25+",
    label: "Years of manufacturing",
  },
  {
    value: "12,000+",
    label: "Projects delivered",
  },
  {
    value: "240 min",
    label: "Maximum fire rating",
  },
  {
    value: "100%",
    label: "Tested and certified",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Protection starts at the opening.
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            We engineer fire-rated door systems that give buildings, and the
            people inside them, time when it matters most.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            Founded in 2001, CoreShield manufactures fire-rated door systems for
            commercial, residential, and industrial buildings across Australia
            and the Asia-Pacific region. Every door we produce is designed to
            meet or exceed the fire resistance levels specified by the project —
            and tested to prove it.
            <br />
            <br />
            We are a privately held, Australian-owned manufacturer. Our facility
            handles everything from core construction to final quality inspection
            under one roof, so that every door that leaves our factory carries
            our full warranty and certification.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
