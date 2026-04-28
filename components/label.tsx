import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Label = ({
  children,
  className,
}: PropsWithChildren<{
  className: string;
}>) => {
  return (
    <div
      className={cn(
        "font-secondary text-sm border-2 py-1 px-3.5 tracking-widest rounded-sm shadow-sm inline-block border-ink -rotate-1 leading-none",
        className,
      )}
    >
      {children}
    </div>
  );
};
