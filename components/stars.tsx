import { cn } from "@/lib/utils";

type StarProps = {
  className: string;
  value: string;
};

export const Star = ({ className, value }: StarProps) => {
  return (
    <div
      className={cn(
        "absolute animate-star-float opacity-60",
        className,
      )}
    >
      {value}
    </div>
  );
};

export const Stars = () => {
  return (
    <div className="absolute h-full w-full">
      <Star className="top-1/20 left-2/24 text-4xl" value="✦" />
      <Star className="top-1/3 left-1/30 text-3xl animate-delay-1800" value="✦" />
      <Star className="top-8/12 left-1/20 text-2xl animate-delay-1200" value="✦" />
      <Star className="top-1/10 right-1/10 text-2xl animate-delay-700" value="★" />
      <Star className="top-1/3 right-1/20 text-xl animate-delay-2100" value="★" />
      <Star className="top-3/4 right-1/16 text-5xl animate-delay-400" value="★" />
    </div>
  );
};
