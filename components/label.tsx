import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className: string;
};

export const Label = ({ text, className }: Props) => {
  return (
    <div
      className={cn(
        "font-secondary text-sm border-2 py-1 px-3.5 tracking-widest rounded-sm shadow-sm inline-block border-ink -rotate-1 leading-none",
        className,
      )}
    >
      {text}
    </div>
  );
};
