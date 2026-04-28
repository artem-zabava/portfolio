import { Container } from "@/components/container";
import { Label } from "@/components/label";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { REVEAL_DELAY, SECTIONS } from "@/lib/consts";
import { companies } from "./companies";
import { ProjectRow } from "./project-row";
import { CompanyTitle } from "./company-title";

export const Experience = () => {
  return (
    <Section id={SECTIONS.experience}>
      <Container>
        <Label className="bg-yellow text-ink mb-3">
          Where I&apos;ve Worked
        </Label>
        <Title className="mb-7">Experience</Title>
        {companies.map(
          ({
            name,
            startDate,
            position,
            location,
            endDate,
            description,
            projects,
          }) => {
            return (
              <div
                key={`${name}${startDate}`}
                className="relative before:left-5 before:top-0 before:bottom-0 before:w-1 before:bg-ink before:rounded-xs before:absolute"
              >
                <CompanyTitle
                  name={name}
                  position={position}
                  location={location}
                  startDate={startDate}
                  endDate={endDate}
                  delay={0}
                />
                <Reveal delay={REVEAL_DELAY}>
                  <p className="py-5 pr-6 pl-16 font-semibold max-w-4xl">
                    {description}
                  </p>
                </Reveal>
                <div className="ml-11 flex flex-col gap-5">
                  {projects.map((project) => {
                    return (
                      <ProjectRow
                        delay={REVEAL_DELAY}
                        key={`${project.name}${project.startDate}`}
                        {...project}
                      />
                    );
                  })}
                </div>
              </div>
            );
          },
        )}
      </Container>
    </Section>
  );
};
