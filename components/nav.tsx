"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/consts";
import { cn } from "@/lib/utils";

const links = [
  { label: SECTIONS.home, to: `/#${SECTIONS.home}` },
  { label: SECTIONS.skills, to: `/#${SECTIONS.skills}` },
  { label: SECTIONS.experience, to: `/#${SECTIONS.experience}` },
  { label: SECTIONS.contact, to: `/#${SECTIONS.contact}` },
];

const ids = Object.values(SECTIONS);

export const Nav = () => {
  const [active, setActive] = useState<string>(SECTIONS.home);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex">
      {links.map(({ label, to }) => (
        <a
          key={label}
          href={to}
          className={cn(
            "font-secondary inline-block text-cream cursor-pointer select-none px-6 py-3 border-[rgba(255,255,255,0.2)] first:border-l-2 border-r-2 text-base tracking-wider hover:text-yellow hover:bg-ink",
            active === label && "bg-[rgba(0,0,0,0.25)]",
          )}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};
