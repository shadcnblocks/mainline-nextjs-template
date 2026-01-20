import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "30+",
    label: "År i branschen",
  },
  {
    value: "2000+",
    label: "Lägenheter",
  },
  {
    value: "15",
    label: "Bostadsprojekt",
  },
  {
    value: "98%",
    label: "Nöjda hyresgäster",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Kvalitetsboende sedan 1990
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            Svenska Hem skapar moderna, inkluderande bostäder med omsorg om varje detalj.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            På Svenska Hem tror vi att ett hem är mer än tak över huvudet. Det
            handlar om att skapa livskvalitet genom genomtänkta planlösningar,
            naturliga material och hållbara lösningar. Vi är ett familjeägt
            företag som värdesätter långsiktiga relationer – med våra boende,
            våra partners och de områden där vi verkar.
            <br />
            <br />
            Vår erfarenhet sträcker sig över tre decennier av bostadsbyggande i
            Stockholm. Vi följer alltid våra projekt från första spadtaget till
            den dagen de nya hyresgästerna flyttar in, vilket ger oss kontroll
            över hela kedjan och säkerställer högsta kvalitet.
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
