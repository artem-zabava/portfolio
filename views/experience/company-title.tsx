import { Reveal } from "@/components/reveal";
import { Company, PropsWithDelay } from "./types";
import { Icon } from "@/components/icon";

export const CompanyTitle = ({
  name,
  delay,
  position,
  startDate,
  endDate,
  location,
}: PropsWithDelay<Omit<Company, "description" | "projects">>) => {
  return (
    <Reveal delay={delay}>
      <div className="bg-red border-4 rounded-xl shadow relative flex items-center gap-2 py-4 px-4 sm:py-5 sm:px-6">
        <div className="rounded-full bg-yellow p-2 border-4">
          <Icon name="star" className="fill-ink" />
        </div>
        <div>
          <div className="text-cream font-secondary text-xl sm:text-2xl tracking-wide">
            {name}
          </div>
          <div className="text-cream text-xs sm:text-sm font-extrabold opacity-80">{`${position} · ${startDate} - ${endDate} · ${location}`}</div>
        </div>
      </div>
    </Reveal>
  );
};
