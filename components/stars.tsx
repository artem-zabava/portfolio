import { cn } from "@/lib/utils";
import { Icon, IconName } from "./icon";

type StarProps = {
  className: string;
  icon: IconName;
  size: number;
};

export const Star = ({ className, icon, size }: StarProps) => {
  return (
    <div className={cn("absolute animate-star-float opacity-60", className)}>
      <Icon name={icon} size={size} />
    </div>
  );
};

export const Stars = () => {
  return (
    <div className="absolute h-full w-full">
      <Star size={32} className="top-1/20 left-2/24" icon="sparkles" />
      <Star
        size={26}
        className="top-1/3 left-1/30 animate-delay-1800"
        icon="sparkles"
      />
      <Star
        size={20}
        className="top-8/12 left-1/20 animate-delay-1200"
        icon="sparkles"
      />
      <Star
        size={20}
        className="top-1/10 right-1/10 animate-delay-700"
        icon="star"
      />
      <Star
        size={16}
        className="top-1/3 right-1/20 animate-delay-2100"
        icon="star"
      />
      <Star
        size={44}
        className="top-3/4 right-1/16 animate-delay-400"
        icon="star"
      />
    </div>
  );
};
