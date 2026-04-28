import Link from "next/link";
import { SECTIONS } from "@/lib/consts";
import { Skills } from "@/views/skills";
import { Summary } from "@/views/summary";
import { Experience } from "@/views/experience";

const links = [
  {
    label: SECTIONS.home,
    to: `#${SECTIONS.home}`,
  },
  {
    label: SECTIONS.skills,
    to: `#${SECTIONS.skills}`,
  },
  {
    label: SECTIONS.experience,
    to: `#${SECTIONS.experience}`,
  },
  {
    label: SECTIONS.contact,
    to: `#${SECTIONS.contact}`,
  },
];

export default function Home() {
  return (
    <main>
      <header className="fixed top-0 left-0 z-10 w-full bg-red flex justify-center border-ink border-b-4 shadow-ink shadow-[0_4px_0]">
        <nav className="flex cursor-pointer">
          {links.map(({ label, to }) => (
            <Link
              key={label}
              href={to}
              scroll
              // TODO: Add active state
              className="font-secondary inline-block text-cream cursor-pointer select-none px-6 py-3 border-[rgba(255,255,255,0.2)] first:border-l-2 border-r-2 text-base tracking-wider hover:text-yellow hover:bg-ink"
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <Summary />
      <Skills />
      <Experience />
      {/* 
      <section id={SECTIONS.contact}>contact</section>
      <footer>footer</footer> */}
    </main>
  );
}
