import { cn } from "@/lib/utils";
import { BrainCircuit, Star, Router, Receipt, Mail, GitBranch, MapPin } from "lucide-react";

const LinkedIn = () => {
  return <span className="text-cream font-extrabold">in</span>
}

const iconMap = {
  brainCircuit: BrainCircuit,
  star: Star,
  router: Router,
  receipt: Receipt,
  mail: Mail,
  linkedIn: LinkedIn,
  gitBranch: GitBranch,
  mapPin: MapPin,
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
