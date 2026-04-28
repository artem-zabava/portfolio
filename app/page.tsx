import { SECTIONS } from "@/lib/consts";
import { Skills } from "@/views/skills";
import { Summary } from "@/views/summary";
import { Experience } from "@/views/experience";
import { Contact } from "@/views/contact";
import { Icon } from "@/components/icon";

const links = [
  {
    label: SECTIONS.home,
    to: `/#${SECTIONS.home}`,
  },
  {
    label: SECTIONS.skills,
    to: `/#${SECTIONS.skills}`,
  },
  {
    label: SECTIONS.experience,
    to: `/#${SECTIONS.experience}`,
  },
  {
    label: SECTIONS.contact,
    to: `/#${SECTIONS.contact}`,
  },
];

export default function Home() {
  return (
    <main>
      <header className="fixed top-0 left-0 z-100 w-full bg-red flex justify-center border-ink border-b-4 shadow-ink shadow-[0_4px_0]">
        <nav className="flex">
          {links.map(({ label, to }) => (
            <a
              key={label}
              href={to}
            >
              <button className="font-secondary inline-block text-cream cursor-pointer select-none px-6 py-3 border-[rgba(255,255,255,0.2)] first:border-l-2 border-r-2 text-base tracking-wider hover:text-yellow hover:bg-ink">
                {label}
              </button>
            </a>
          ))}
        </nav>
      </header>
      <Summary />
      <Skills />
      <Experience />
      <Contact />
      <footer className="bg-ink text-cream text-center p-6 font-bold">
        Made with&nbsp;
        <Icon
          className="inline fill-yellow stroke-yellow"
          name="star"
          size={24}
        />
        &nbsp;by Artem Zabava · 2026
      </footer>
    </main>
  );
}
