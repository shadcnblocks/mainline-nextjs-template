import { Award, Building2, Heart, Shield, Users } from "lucide-react";

const values = [
  {
    name: "Kvalitet",
    description: "Vi kompromissar aldrig med materialen eller utförandet",
    icon: Award,
  },
  {
    name: "Helhetstänk",
    description: "Från markförvärv till inflyttning i egen regi",
    icon: Building2,
  },
  {
    name: "Långsiktighet",
    description: "Familjeägt företag med fokus på varaktiga relationer",
    icon: Heart,
  },
  {
    name: "Trygghet",
    description: "Personlig kontakt och garanti genom hela processen",
    icon: Shield,
  },
  {
    name: "Kundnöjdhet",
    description: "Vi lämnar inte över förrän du är helt nöjd",
    icon: Users,
  },
];

export function Investors() {
  return (
    <section className="container max-w-5xl py-12">
      <h2 className="text-foreground text-4xl font-medium tracking-wide">
        Våra värderingar
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div key={value.name} className="space-y-3">
              <div className="bg-muted inline-flex rounded-xl p-3">
                <Icon className="size-8 text-foreground" />
              </div>
              <h3 className="font-semibold">{value.name}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
