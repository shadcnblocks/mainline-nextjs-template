"use client";

import { useState } from "react";

import Link from "next/link";

import { Check, ChevronsUpDown, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface FeatureSection {
  category: string;
  features: {
    name: string;
    slakthus: true | false | null | string;
    ormbacka: true | false | null | string;
    bromma: true | false | null | string;
  }[];
}

const projects = [
  {
    name: "Slakthus Ett",
    button: {
      text: "Anmäl intresse",
      variant: "default" as const,
    },
  },
  {
    name: "Ormbacka",
    button: {
      text: "Anmäl intresse",
      variant: "outline" as const,
    },
  },
  {
    name: "Bromma",
    button: {
      text: "Anmäl intresse",
      variant: "outline" as const,
    },
  },
];

const comparisonFeatures: FeatureSection[] = [
  {
    category: "Projektinfo",
    features: [
      {
        name: "Läge",
        slakthus: "Johanneshov",
        ormbacka: "Järfälla",
        bromma: "Bromma",
      },
      {
        name: "Antal bostäder",
        slakthus: "120+",
        ormbacka: "44",
        bromma: "Planeras",
      },
      {
        name: "Status",
        slakthus: "Pågående",
        ormbacka: "Kommande",
        bromma: "Planering",
      },
    ],
  },
  {
    category: "Bostadstyper",
    features: [
      {
        name: "Studiolägenheter",
        slakthus: true,
        ormbacka: true,
        bromma: true,
      },
      {
        name: "2-rummare",
        slakthus: true,
        ormbacka: true,
        bromma: true,
      },
      {
        name: "3-rummare",
        slakthus: true,
        ormbacka: true,
        bromma: true,
      },
      {
        name: "4-rummare",
        slakthus: true,
        ormbacka: true,
        bromma: null,
      },
      {
        name: "Paradvåningar",
        slakthus: true,
        ormbacka: null,
        bromma: null,
      },
    ],
  },
  {
    category: "Bekvämligheter",
    features: [
      {
        name: "Balkong/Terrass",
        slakthus: true,
        ormbacka: true,
        bromma: true,
      },
      {
        name: "Gemensam takterrass",
        slakthus: true,
        ormbacka: null,
        bromma: null,
      },
      {
        name: "Cykelrum",
        slakthus: true,
        ormbacka: true,
        bromma: true,
      },
      {
        name: "Tvättstuga",
        slakthus: true,
        ormbacka: true,
        bromma: true,
      },
    ],
  },
  {
    category: "Kommunikationer",
    features: [
      {
        name: "Tunnelbana",
        slakthus: "5 min",
        ormbacka: "10 min",
        bromma: "8 min",
      },
      {
        name: "Buss",
        slakthus: true,
        ormbacka: true,
        bromma: true,
      },
      {
        name: "Pendeltåg",
        slakthus: null,
        ormbacka: "15 min",
        bromma: null,
      },
    ],
  },
];

const renderFeatureValue = (value: true | false | null | string) => {
  if (value === true) {
    return <Check className="size-5" />;
  }
  if (value === false) {
    return <X className="size-5" />;
  }
  if (value === null) {
    return <span className="text-muted-foreground">-</span>;
  }
  return (
    <div className="flex items-center gap-2">
      <Check className="size-4" />
      <span className="text-muted-foreground">{value}</span>
    </div>
  );
};

export const PricingTable = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section className="pb-28 lg:py-32">
      <div className="container">
        <ProjectHeaders
          selectedProject={selectedProject}
          onProjectChange={setSelectedProject}
        />
        <FeatureSections selectedProject={selectedProject} />
      </div>
    </section>
  );
};

const ProjectHeaders = ({
  selectedProject,
  onProjectChange,
}: {
  selectedProject: number;
  onProjectChange: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Mobile View */}
      <div className="md:hidden">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="">
          <div className="flex items-center justify-between border-b py-4">
            <CollapsibleTrigger className="flex items-center gap-2">
              <h3 className="text-2xl font-semibold">
                {projects[selectedProject].name}
              </h3>
              <ChevronsUpDown
                className={`size-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </CollapsibleTrigger>
            <Button
              variant={projects[selectedProject].button.variant}
              className="w-fit"
              asChild
            >
              <Link href="/contact">
                {projects[selectedProject].button.text}
              </Link>
            </Button>
          </div>
          <CollapsibleContent className="flex flex-col space-y-2 p-2">
            {projects.map(
              (project, index) =>
                index !== selectedProject && (
                  <Button
                    size="lg"
                    variant="secondary"
                    key={index}
                    onClick={() => {
                      onProjectChange(index);
                      setIsOpen(false);
                    }}
                  >
                    {project.name}
                  </Button>
                ),
            )}
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Desktop View */}
      <div className="grid grid-cols-4 gap-4 max-md:hidden">
        <div className="col-span-1 max-md:hidden"></div>

        {projects.map((project, index) => (
          <div key={index} className="">
            <h3 className="mb-3 text-2xl font-semibold">{project.name}</h3>
            <Button variant={project.button.variant} className="" asChild>
              <Link href="/contact">
                {project.button.text}
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureSections = ({ selectedProject }: { selectedProject: number }) => (
  <>
    {comparisonFeatures.map((section, sectionIndex) => (
      <div key={sectionIndex} className="">
        <div className="border-primary/40 border-b py-4">
          <h3 className="text-lg font-semibold">{section.category}</h3>
        </div>
        {section.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="text-foreground grid grid-cols-2 font-medium max-md:border-b md:grid-cols-4"
          >
            <span className="inline-flex items-center py-4">
              {feature.name}
            </span>
            {/* Mobile View - Only Selected Project */}
            <div className="md:hidden">
              <div className="flex items-center gap-1 py-4 md:border-b">
                {renderFeatureValue(
                  [feature.slakthus, feature.ormbacka, feature.bromma][
                    selectedProject
                  ],
                )}
              </div>
            </div>
            {/* Desktop View - All Projects */}
            <div className="hidden md:col-span-3 md:grid md:grid-cols-3 md:gap-4">
              {[feature.slakthus, feature.ormbacka, feature.bromma].map(
                (value, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 border-b py-4"
                  >
                    {renderFeatureValue(value)}
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    ))}
  </>
);
