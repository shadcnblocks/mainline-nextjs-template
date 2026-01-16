import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "10+",
    label: "Pågående projekt",
  },
  {
    value: "500+",
    label: "Levererade bostäder",
  },
  {
    value: "25+",
    label: "År i branschen",
  },
  {
    value: "100%",
    label: "Familjeägt",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            En familjeägd koncern i fastighetsbranschen
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            Svenska Hem skapar unika bostäder med kvalitet och omtanke.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            Svenska Hem i Bromma arbetar med fastighetsutveckling, produktutveckling
            och produktion av bostadsprojekt över hela Sverige. Vi arbetar med
            utveckling från så kallad råmark i tidiga skeden till en fullt färdig
            produkt som är inflyttningsklar, och allt detta sker i egen entreprenad.
            <br />
            <br />
            Vår verksamhet präglas av kvalitetsmedvetenhet, helhetstänk och
            långsiktigt ansvar. Vi lämnar aldrig över ansvaret utan följer alltid
            våra projekt från första spadtaget till den dagen de nya ägarna flyttar in.
            I våra ögon är bostaden en livsinvestering - därför kompromissar vi aldrig
            med kvaliteten.
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
