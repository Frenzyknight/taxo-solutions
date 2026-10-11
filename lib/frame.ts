import type { CSSProperties } from "react";

export type Scale = (value: number) => string;
export type Place = (
  x: number,
  y: number,
  w?: number,
  h?: number,
) => CSSProperties;

/**
 * Maps reference-design pixels onto a container-query frame of `width`
 * reference pixels, optionally cropped at (originX, originY).
 */
export function frame(width: number, originX = 0, originY = 0) {
  const s: Scale = (value) => `${((value / width) * 100).toFixed(3)}cqw`;
  const at: Place = (x, y, w, h) => ({
    left: s(x - originX),
    top: s(y - originY),
    ...(w !== undefined && { width: s(w) }),
    ...(h !== undefined && { height: s(h) }),
  });
  return { s, at };
}
