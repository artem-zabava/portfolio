import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = {
  className: string;
};

export const Title = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <h2
      className={cn(
        "font-secondary text-[clamp(1.8rem,4vw,2.8rem)] tracking-wide leading-none",
        className,
      )}
    >
      {children}
    </h2>
  );
};
