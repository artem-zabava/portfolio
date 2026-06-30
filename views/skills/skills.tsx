import { Container } from "@/components/container";
import { Divider } from "@/components/divider";
import { Icon, IconName } from "@/components/icon";
import { Label } from "@/components/label";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { REVEAL_DELAY, SECTIONS } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { Fragment } from "react/jsx-runtime";

type Row = {
  category: string;
  items: string[];
  icon: IconName;
  color: string;
};

const rows: Row[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "SQL", "GraphQL"],
    icon: "fileCode",
    color: "#FFE8E8",
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "REST API", "GraphQL", "Microservices", "Event-driven"],
    icon: "server",
    color: "#E0ECFF",
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux",
      "React Query",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Styled Components",
      "Ant Design",
      "Storybook",
      "Playwright"
    ],
    icon: "palette",
    color: "#FFF8D0",
  },
  {
    category: "Cloud & Infra",
    items: [
      "AWS",
      "Lambda",
      "SQS / S3",
      "API Gateway",
      "Docker",
      "Pulumi",
      "SST",
      "Git"
    ],
    icon: "cloud",
    color: "#E0F5EA",
  },
  {
    category: "Data & Observability",
    items: [
      "MongoDB",
      "DynamoDB",
      "Elasticsearch",
      "Tinybird",
      "Kafka",
      "OpenTelemetry",
      "Datadog",
      "LogRocket",
      "Elastic Stack"
    ],
    icon: "databaseSearch",
    color: "#F0E0FF",
  },
];

const SkillRow = ({ category, items, icon, color }: Row) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
      <div className="flex sm:flex-col items-center sm:justify-center sm:w-28 gap-3 sm:gap-2 min-w-28">
        <div
          className="h-11 w-11 rounded-full border-4 border-ink items-center justify-center text-xl shadow-sm hidden sm:flex"
          style={{ background: color }}
        >
          <Icon name={icon} size={20} />
        </div>
        <div className="font-secondary text-sm sm:text-xs tracking-wider leading-none sm:text-center">
          {category}
        </div>
      </div>
      <div className="flex flex-wrap gap-2.5 content-start">
        {items.map((item) => {
          return (
            <div
              key={item}
              className={cn(
                "border-4 border-ink rounded-4xl py-1.5 px-3.5 text-sm font-extrabold shadow-sm cursor-default",
                "transition duration-150 ease-[cubic-bezier(.36,2,.6,.8)] hover:-translate-x-0.5 hover:-translate-y-0.75 hover:-rotate-2 hover:shadow",
              )}
              style={{ background: color }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <Section id={SECTIONS.skills} className="bg-[#E8DFC8]">
      <Container>
        <Label className="bg-red text-cream mb-3">What I Know</Label>
        <Title className="mb-7">Skills & Stack</Title>
        <div className="flex flex-col gap-4.5">
          {rows.map((row, index) => {
            const isNotLast = index !== rows.length - 1;
            return (
              <Fragment key={row.category}>
                <Reveal delay={index * REVEAL_DELAY}>
                  <SkillRow {...row} />
                </Reveal>
                {isNotLast ? <Divider /> : null}
              </Fragment>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
