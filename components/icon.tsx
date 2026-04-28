import { cn } from "@/lib/utils";
import { BrainCircuit, Star, Router, Receipt } from "lucide-react";

const iconMap = {
  brainCircuit: BrainCircuit,
  star: Star,
  router: Router,
  receipt: Receipt,
} as const;

export type IconName = keyof typeof iconMap;

type Props = {
  name: IconName;
  className?: string;
  size?: number;
};

export const Icon = ({ name, className, size }: Props) => {
  const Comp = iconMap[name];
  return <Comp className={cn(className)} size={size} />;
};
