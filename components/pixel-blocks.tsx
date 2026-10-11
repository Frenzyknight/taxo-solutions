import { cn } from "@/lib/utils";

const CELL_COLORS: Record<string, string> = {
  m: "bg-mint",
  s: "bg-sky",
  k: "bg-ink",
  w: "bg-white",
};

type PixelBlocksProps = {
  /** One string per row; `m` mint, `s` sky, `k` ink, `w` white, `.` empty. */
  pattern: string[];
  className?: string;
};

export function PixelBlocks({ pattern, className }: PixelBlocksProps) {
  const cols = Math.max(...pattern.map((row) => row.length));

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none grid", className)}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {pattern.flatMap((row, y) =>
        Array.from({ length: cols }, (_, x) => {
          const color = CELL_COLORS[row[x] ?? "."];
          return (
            <span
              key={`${x}-${y}`}
              className={cn("aspect-square", color)}
            />
          );
        }),
      )}
    </div>
  );
}
