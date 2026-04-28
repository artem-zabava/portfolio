import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = ({
  id,
  className,
  children,
}: PropsWithChildren<{
  id: string;
  className?: string;
}>) => {
  return (
    <section
      id={id}
      className={cn(
        "min-h-[calc(100vh-3rem)] py-10 px-6 scroll-mt-12 relative overflow-hidden",
        className,
      )}
    >
      {children}
    </section>
  );
};
