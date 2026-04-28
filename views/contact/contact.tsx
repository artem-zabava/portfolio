import { Container } from "@/components/container";
import { Icon } from "@/components/icon";
import { Label } from "@/components/label";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { REVEAL_DELAY, SECTIONS } from "@/lib/consts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { links } from "./links";
import { ContactForm } from "./form";

export const Contact = () => {
  return (
    <Section id={SECTIONS.contact} className="bg-blue min-h-auto">
      <Container>
        <Label className="bg-yellow text-ink mb-3">Say Hello</Label>
        <Title className="mb-4 text-cream">Get In Touch</Title>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            {links.map(({ to, title, description, icon }, index) => {
              return (
                <Reveal key={to} delay={index * REVEAL_DELAY}>
                  <Link
                    href={to}
                    className="flex gap-4 bg-cream items-center border-4 py-3.5 px-4 shadow rounded-xl hover:bg-yellow hover:shadow-cream"
                    target="_blank"
                  >
                    <div
                      className={cn(
                        "flex justify-center items-center size-10 rounded-md",
                        icon === "linkedIn" ? "bg-blue-600" : "bg-ink",
                      )}
                    >
                      <Icon name={icon} className="text-cream" size={16} />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-xs opacity-60 font-semibold">
                        {title}
                      </div>
                      <div className="font-extrabold">{description}</div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};
