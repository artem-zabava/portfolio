import { cn } from "@/lib/utils";
import {
  BrainCircuit,
  Star,
  Router,
  Receipt,
  Mail,
  GitBranch,
  MapPin,
  Sparkles,
  Hand,
  FileCode,
  Server,
  Palette,
  Cloud,
  DatabaseSearch,
} from "lucide-react";

const LinkedIn = () => {
  return <span className="text-cream font-extrabold">in</span>;
};

const iconMap = {
  brainCircuit: BrainCircuit,
  star: Star,
  router: Router,
  receipt: Receipt,
  mail: Mail,
  linkedIn: LinkedIn,
  gitBranch: GitBranch,
  mapPin: MapPin,
  sparkles: Sparkles,
  hand: Hand,
  fileCode: FileCode,
  server: Server,
  palette: Palette,
  cloud: Cloud,
  databaseSearch: DatabaseSearch,
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
