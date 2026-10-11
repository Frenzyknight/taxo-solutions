import { ImageIcon, UserRound } from "lucide-react";

import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
  variant?: "person" | "image";
  tone?: "light" | "dark";
  showLabel?: boolean;
  style?: React.CSSProperties;
};

export function ImagePlaceholder({
  label,
  className,
  variant = "person",
  tone = "light",
  showLabel = true,
  style,
}: ImagePlaceholderProps) {
  const Icon = variant === "person" ? UserRound : ImageIcon;

  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden",
        tone === "light"
          ? "bg-[#dfe2e7] text-[#9aa0a9]"
          : "bg-[#2a2a2a] text-white/35",
        className,
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, transparent 0 14px, rgb(255 255 255 / 0.06) 14px 28px)",
        ...style,
      }}
    >
      <Icon className="size-1/4 max-h-16 max-w-16 min-h-5 min-w-5" strokeWidth={1.25} />
      {showLabel ? (
        <span className="px-3 text-center text-[11px] font-medium tracking-wide uppercase">
          {label}
        </span>
      ) : null}
    </div>
  );
}
