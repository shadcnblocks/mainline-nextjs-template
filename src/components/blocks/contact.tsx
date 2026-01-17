import React from "react";

import Link from "next/link";

import { Instagram, Linkedin, Phone } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

const contactInfo = [
  {
    title: "Besöksadress",
    content: (
      <p className="text-muted-foreground mt-3">
        Svenska Hem i Bromma
        <br />
        Bromma, Stockholm
      </p>
    ),
  },
  {
    title: "Kontakta oss",
    content: (
      <div className="mt-3">
        <div>
          <p className="">Bostadsfrågor</p>
          <Link
            href="mailto:info@svh.se"
            className="text-muted-foreground hover:text-foreground"
          >
            info@svh.se
          </Link>
        </div>
        <div className="mt-1">
          <p className="">Telefon</p>
          <Link
            href="tel:+46812345678"
            className="text-muted-foreground hover:text-foreground"
          >
            08-123 456 78
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Följ oss",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <Link href="https://instagram.com/svenskahem" className="text-muted-foreground hover:text-foreground">
          <Instagram className="size-5" />
        </Link>
        <Link
          href="https://linkedin.com/company/svenska-hem"
          className="text-muted-foreground hover:text-foreground"
        >
          <Linkedin className="size-5" />
        </Link>
        <Link href="tel:+46812345678" className="text-muted-foreground hover:text-foreground">
          <Phone className="size-5" />
        </Link>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Kontakta oss
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Intresserad av en bostad? Fyll i formuläret så kontaktar vi dig.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-semibold">Intresseanmälan</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
