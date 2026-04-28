import { Button } from "@/components/button";
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
            <form
              className="bg-cream border-4 rounded-xl gap-3.5 flex flex-col shadow p-7"
              autoComplete="off"
            >
              <div className="font-secondary tracking-normal text-xl">
                Send a Message
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-extrabold" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Who are you?"
                  className="border-3 py-2.5 px-3.5 text-sm font-semibold shadow-sm focus:border-blue focus:shadow-blue outline-none rounded-lg bg-cream-dark"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-extrabold" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="border-3 py-2.5 px-3.5 text-sm font-semibold shadow-sm focus:border-blue focus:shadow-blue outline-none rounded-lg bg-cream-dark"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-extrabold" htmlFor="msg">
                  Message
                </label>
                <textarea
                  id="msg"
                  placeholder="What's on your mind?"
                  className="border-3 py-2.5 px-3.5 text-sm font-semibold shadow-sm focus:border-blue focus:shadow-blue outline-none rounded-lg bg-cream-dark resize-y min-h-25"
                  required
                  autoComplete="off"
                />
              </div>
              <Button className="bg-yellow" type="submit">
                Send It!
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};
