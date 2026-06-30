import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { Section } from "@/components/section";
import { Stars } from "@/components/stars";
import { Terminal } from "@/components/terminal";
import { SECTIONS } from "@/lib/consts";

export const Summary = () => {
  return (
    <Section id={SECTIONS.home} className="pt-20 pb-10 sm:pt-25 sm:pb-15 min-h-dvh">
      <Stars />
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 justify-center items-center h-full self-stretch">
        <div className="flex flex-col items-center md:items-baseline gap-5 h-full">
          <div className="flex w-fit px-5 py-1.5 font-extrabold rounded-full shadow-ink shadow-sm bg-yellow border-ink border-4 animate-pop animate-delay-100">
            <div className="flex justify-center items-center">
              <Icon name="hand" size={16} className="stroke-ink" /> &nbsp;
            </div>
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
            Over 5 years building fintech, logistics, HRM, and infrastructure
            products.
            <br />
            TypeScript · Node.js · React · Go · AWS - from backend APIs to
            user-facing features.
          </p>
          <div className="flex flex-1 self-stretch flex-col md:flex-row gap-3 md:gap-4 animate-slide animate-delay-650">
            <a
              href="/Artem_Zabava_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-red text-cream">Check out my CV</Button>
            </a>
            <a href={`/#${SECTIONS.contact}`}>
              <Button className="w-full bg-yellow">Get In Touch</Button>
            </a>
          </div>
        </div>
        <Terminal />
      </div>
    </Section>
  );
};
