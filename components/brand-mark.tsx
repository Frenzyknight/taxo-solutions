import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
  iconOnly?: boolean;
  tone?: "dark" | "light";
};

export function BrandMark({
  className,
  iconClassName,
  wordmarkClassName,
  iconOnly = false,
  tone = "dark",
}: BrandMarkProps) {
  const color = tone === "dark" ? "text-foreground" : "text-white";

  return (
    <div className={cn("inline-flex items-center gap-2.5", color, className)}>
      <PixelLogo className={iconClassName} />
      {!iconOnly ? (
        <span
          className={cn(
            "text-lg font-semibold tracking-tight",
            wordmarkClassName,
          )}
        >
          Taxosolution
        </span>
      ) : null}
    </div>
  );
}

const PIXEL_LOGO_RECTS = [
  [47, 0, 240, 48],
  [287, 48, 47, 48],
  [0, 48, 47, 117],
  [94, 97, 146, 48],
  [144, 145, 47, 129],
  [47, 166, 76, 47],
  [212, 166, 75, 47],
  [287, 214, 47, 109],
  [0, 275, 47, 48],
  [47, 324, 240, 48],
] as const;

export function PixelLogo({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 334 372"
      className={cn("h-7 w-auto", className)}
      style={style}
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {PIXEL_LOGO_RECTS.map(([x, y, width, height]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={width} height={height} />
      ))}
    </svg>
  );
}
