import type { CSSProperties } from "react";

import { PixelLogo } from "@/components/brand-mark";
import { ImagePlaceholder } from "@/components/image-placeholder";
import type { Scale } from "@/lib/frame";

export function Line({ style }: { style: CSSProperties }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bg-[#efefef]"
      style={style}
    />
  );
}

export function MiniPhoto({ style, s }: { style: CSSProperties; s: Scale }) {
  const unit = (value: number) => `${(value / 72) * 100}%`;
  return (
    <div
      className="absolute overflow-hidden bg-[#a5f3b9]"
      style={{ ...style, borderRadius: s(2) }}
    >
      <span className="absolute bg-[#1b1b1b]" style={{ left: 0, top: unit(8), width: unit(18), height: unit(18) }} />
      <span className="absolute bg-[#1b1b1b]" style={{ left: unit(54), top: unit(20), width: unit(18), height: unit(20) }} />
      <span className="absolute bg-[#1b1b1b]" style={{ left: 0, top: unit(46), width: unit(14), height: unit(14) }} />
      <span className="absolute bg-[#1b1b1b]" style={{ left: unit(58), top: unit(54), width: unit(14), height: unit(19) }} />
      <ImagePlaceholder
        label="Client photo"
        showLabel={false}
        className="absolute"
        style={{
          left: unit(16),
          top: unit(12),
          width: unit(40),
          height: unit(61),
          borderRadius: `${s(20)} ${s(20)} 0 0`,
        }}
      />
    </div>
  );
}

export function AvatarStack({
  style,
  size,
  overlap,
  className = "absolute",
}: {
  style?: CSSProperties;
  size: string;
  overlap: string;
  className?: string;
}) {
  const ring = "ring-[1.5px] ring-white";
  return (
    <div className={`flex ${className}`} style={style} aria-hidden="true">
      {["Client one", "Client two", "Client three"].map((label, index) => (
        <ImagePlaceholder
          key={label}
          label={label}
          showLabel={false}
          className={`rounded-full ${ring}`}
          style={{ width: size, height: size, marginLeft: index ? `-${overlap}` : 0 }}
        />
      ))}
      <span
        className={`relative flex items-center justify-center rounded-full bg-[#111] text-white ${ring}`}
        style={{ width: size, height: size, marginLeft: `-${overlap}` }}
      >
        <PixelLogo style={{ height: "38%" }} />
      </span>
    </div>
  );
}
