import { Reveal } from "@/components/reveal";
import { Project, PropsWithDelay } from "./types";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";

export const ProjectRow = ({
  delay,
  achievements,
  icon,
  name,
  startDate,
  endDate,
}: PropsWithDelay<Project>) => {
  return (
    <Reveal delay={delay}>
      <div
        className={cn(
          "flex flex-col bg-cream border-4 border-ink rounded-xl relative p-4 sm:p-6 shadow-sm hover:shadow gap-4",
          "before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 sm:before:w-4 before:h-1 before:bg-ink before:-left-5 sm:before:-left-7",
        )}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-2">
          <div className="flex sm:justify-center items-baseline gap-2">
            <div className="bg-yellow border-2 shadow-sm rounded-xl size-10 hidden sm:flex justify-center items-center">
              <Icon name={icon} className="text-blue" size={16} />
            </div>
            <div className="font-secondary text-blue tracking-wide leading-none">
              {name}
            </div>
          </div>
          <div className="bg-yellow font-extrabold border-2 rounded-2xl text-xs py-1 px-3 self-start sm:self-center shadow-sm">
            {`${startDate} - ${endDate}`}
          </div>
        </div>
        <ul className="flex flex-col gap-2 list-none">
          {achievements.map((item) => (
            <li
              key={item}
              className={cn(
                "before:content-['●'] before:text-red before:absolute before:left-0 before:text-xs before:top-1/2 before:-translate-y-1/2",
                "pl-6 relative leading-normal text-sm font-semibold",
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};
