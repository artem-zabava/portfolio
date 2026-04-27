import { Container } from "@/components/container";
import { Divider } from "@/components/divider";
import { Label } from "@/components/label";
import { Reveal } from "@/components/reveal";
import { Title } from "@/components/title";
import { SECTIONS } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { Fragment } from "react/jsx-runtime";

type Row = {
  category: string;
  items: string[];
  icon: string;
  color: string;
};

const rows: Row[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "SQL", "GraphQL"],
    icon: "💬",
    color: "#FFE8E8",
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "REST APIs", "Microservices", "Event-driven"],
    icon: "⚙️",
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
      "Storybook",
    ],
    icon: "🎨",
    color: "#FFF8D0",
  },
  {
    category: "Cloud & Infra",
    items: [
      "AWS",
      "Lambda",
      "API Gateway",
      "SQS / S3",
      "Docker",
      "Pulumi",
      "SST",
    ],
    icon: "☁️",
    color: "#E0F5EA",
  },
  {
    category: "Data & Observability",
    items: [
      "MongoDB",
      "DynamoDB",
      "Elasticsearch",
      "Kafka",
      "Tinybird",
      "OpenTelemetry",
      "Datadog",
    ],
    icon: "📊",
    color: "#F0E0FF",
  },
];

const SkillRow = ({ category, items, icon, color }: Row) => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center justify-center w-28 gap-2">
        <div
          className="h-11 w-11 rounded-full border-4 border-ink flex items-center justify-center text-xl shadow-sm"
          style={{ background: color }}
        >
          {icon}
        </div>
        <div className="font-secondary text-xs tracking-wider leading-none text-center">
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
    <section
      id={SECTIONS.skills}
      className="min-h-[calc(100vh-3rem)] py-12 px-6 bg-[#E8DFC8] scroll-mt-12"
    >
      <Container>
        <Label text="What I Know" className="bg-red text-cream mb-3" />
        <Title className="mb-7">Skills & Stack</Title>
        <div className="flex flex-col gap-4.5">
          {rows.map((row, index) => {
            const isNotLast = index !== rows.length - 1;
            return (
              <Fragment key={row.category}>
                <Reveal delay={index * 0.06}>
                  <SkillRow {...row} />
                </Reveal>
                {isNotLast ? <Divider /> : null}
              </Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
