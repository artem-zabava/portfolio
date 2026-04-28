import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { Stars } from "@/components/stars";
import { Terminal } from "@/components/terminal";
import { SECTIONS } from "@/lib/consts";

export const Summary = () => {
  return (
    <Section id={SECTIONS.home} className="pt-25 pb-15 min-h-dvh">
      <Stars />
      <div className="flex gap-14 justify-center items-center h-full self-stretch">
        <div className="flex flex-col gap-5 h-full">
          <div className="flex w-fit px-5 py-1.5 font-extrabold rounded-full shadow-ink shadow-sm bg-yellow border-ink border-4 animate-pop animate-delay-100">
            <span>👋 &nbsp;</span>
            <h2>{"console.log('Hello world!');"}</h2>
          </div>
          <h1 className="font-secondary font-bold text-[clamp(3.5rem,10vw,8rem)] leading-none text-ink [-webkit-text-stroke:2px_var(--ink)] animate-slide animate-delay-200">
            Artem
            <br />
            <span className="text-red">Zabava</span>
          </h1>
          <div className="font-secondary text-blue text-[clamp(1.2rem,4vw,2.2rem)] animate-slide animate-delay-350">
            Software Development Engineer
          </div>
          <p className="font-semibold max-w-2xl animate-slide animate-delay-500">
            5 years building fintech products, integration systems, and internal
            tools.
            <br />
            TypeScript · Node.js · React · AWS — from backend APIs to
            user-facing features.
          </p>
          <div className="flex gap-4 animate-slide animate-delay-650">
            <Button className="bg-red text-cream">View Experience</Button>
            <Button className="bg-yellow">Get In Touch</Button>
            <Button className="bg-blue text-cream">LinkedIn ↗</Button>
          </div>
        </div>
        <Terminal />
      </div>
    </Section>
  );
};
