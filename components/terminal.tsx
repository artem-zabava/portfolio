"use client";
import { cn } from "@/lib/utils";
import { Fragment, useEffect, useRef, useState } from "react";

type LineData = {
  location: string;
  command: string;
  dir?: boolean;
  result: string[];
};

type LineProps = {
  line: LineData;
  isLast: boolean;
  isVisible: boolean;
  onDone: () => void;
};

const TAG_COLORS = ["#E0ECFF", "#FFF8D0", "#E0F5EA", "#FFE8E8", "#F0E0FF"];

const LINES: LineData[] = [
  {
    location: "~/skills",
    command: "ls",
    result: [
      "typescript",
      "javascript",
      "react",
      "node.js",
      "go",
      "aws",
      "nest.js",
      "docker",
    ],
  },
  { location: "~/skills", command: "cd ..", result: [] },
  { location: "~/", command: "ls", dir: true, result: ["my_work/", "skills/"] },
  { location: "~/", command: "ls my_work", result: ["akvelon"] },
  { location: "~/", command: "", result: [] },
];

const tagColor = (name: string) => {
  const hash = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return TAG_COLORS[hash % TAG_COLORS.length];
};

const Dot = ({ className }: { className: string }) => (
  <div className={cn("size-3.5 rounded-full border-2 border-ink", className)} />
);

const TerminalLine = ({ line, isLast, isVisible, onDone }: LineProps) => {
  const { location, result, command, dir } = line;
  const [cmd, setCmd] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [typingDone, setTypingDone] = useState(!command);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  });

  useEffect(() => {
    if (!isVisible || !command) return;

    let iv: ReturnType<typeof setInterval> | undefined;
    const startTimer = setTimeout(() => {
      let i = 0;
      iv = setInterval(() => {
        i++;
        setCmd(command.slice(0, i));
        if (i >= command.length) {
          clearInterval(iv);
          setTimeout(() => {
            setShowResult(true);
            setTypingDone(true);
          }, 250);
          setTimeout(() => {
            onDoneRef.current();
          }, 500);
        }
      }, 80);
    }, 700);

    return () => {
      clearTimeout(startTimer);
      if (iv) clearInterval(iv);
    };
  }, [isVisible, command]);

  return (
    <Fragment>
      <div className={cn(!isVisible && "invisible")}>
        <span className="text-blue">
          artem<span className="text-ink">@</span>portfolio
          <span className="text-ink">:</span>
        </span>
        <span className="text-green">{location}</span>
        {" $ "}
        <span className="text-ink">{cmd}</span>
        {(!typingDone || isLast) && (
          <span
            className={cn(
              "text-red font-semibold",
              isLast && typingDone && "animate-cursor-blink",
            )}
          >
            █
          </span>
        )}
      </div>
      {result.length > 0 && (
        <div
          className={cn(
            "flex flex-wrap gap-x-3 gap-y-2",
            (!isVisible || !showResult) && "invisible",
          )}
        >
          {result.map((item) => (
            <span
              key={item}
              className="px-2 py-0.5 rounded-md border-2 border-ink shadow-xs"
              style={{ background: dir ? "#F2C12E" : tagColor(item) }}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export const Terminal = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisibleCount(1), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="max-w-96 w-full flex flex-col border-4 border-ink bg-white rounded-xl shadow font-code overflow-hidden animate-terminal animate-delay-100">
      <div className="bg-cream-dark py-2.5 px-3.5 flex items-center gap-2 border-b-4 border-ink">
        <Dot className="bg-red" />
        <Dot className="bg-yellow" />
        <Dot className="bg-green" />
        <span className="flex-1 font-secondary text-center">
          artem@portfolio: ~
        </span>
      </div>
      <div className="flex flex-col gap-1.5 text-ink p-4 text-sm">
        {LINES.map((line, index) => (
          <TerminalLine
            key={index}
            line={line}
            isLast={index === LINES.length - 1}
            isVisible={index < visibleCount}
            onDone={() => setVisibleCount((c) => Math.max(c, index + 2))}
          />
        ))}
      </div>
    </div>
  );
};
