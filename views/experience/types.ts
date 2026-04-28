import type { IconName } from "@/components/icon";

export type Company = {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  projects: Project[];
};

export type Project = {
  name: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  icon: IconName;
};

export type PropsWithDelay<T extends Record<string, unknown>> = {
  delay?: number;
} & T;