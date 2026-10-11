import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  accent?: "mint" | "sky";
  className?: string;
  iconClassName?: string;
  style?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
};

export function SectionEyebrow({
  children,
  tone = "light",
  accent = "mint",
  className,
  iconClassName,
  style,
  iconStyle,
}: SectionEyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.16em] uppercase",
        tone === "light" ? "text-foreground/70" : "text-white/85",
        className,
      )}
      style={style}
    >
      <svg
        viewBox="0 0 24 10"
        className={cn(
          "h-2.5 w-6",
          accent === "mint" ? "fill-mint" : "fill-sky",
          iconClassName,
        )}
        style={iconStyle}
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        <rect x="0" y="0" width="13" height="5" />
        <rect x="11" y="5" width="13" height="5" />
      </svg>
      {children}
    </div>
  );
}
