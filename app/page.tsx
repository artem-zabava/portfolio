import { Skills } from "@/views/skills";
import { Summary } from "@/views/summary";
import { Experience } from "@/views/experience";
import { Contact } from "@/views/contact";
import { Icon } from "@/components/icon";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <main>
      <header className="fixed top-0 left-0 z-100 w-full bg-red flex justify-center border-ink border-b-4 shadow-ink shadow-[0_4px_0]">
        <Nav />
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
