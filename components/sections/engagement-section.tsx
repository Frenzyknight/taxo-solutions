import {
  Bookmark,
  ChevronRight,
  Ellipsis,
  Heart,
  MessageCircle,
  Send,
} from "lucide-react";
import type { CSSProperties } from "react";

import { PixelLogo } from "@/components/brand-mark";
import { AvatarStack, Line, MiniPhoto } from "@/components/frame-parts";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { frame, type Place, type Scale } from "@/lib/frame";

/*
 * Desktop: elements sit on the 1024 x 691 reference frame, converted to `cqw`.
 * Mobile stacks the same pieces and renders the phone on a crop of the frame.
 */

const desktop = frame(1024);
const phoneCrop = frame(331, 659, 150);

const stat = { value: "1:1", label: "Senior-Led Counsel" };
const blurb =
  "From founders to listed boards, we\u2019ve got your back. Our record is built in appellate forums, one precise submission at a time.";
const tagRows = [
  ["Tax Counsel", "GST"],
  ["Customs", "FEMA & PMLA", "+2"],
];

export function EngagementSection() {
  return (
    <section id="counsel" className="relative w-full">
      <DesktopProof />
      <MobileProof />
    </section>
  );
}

function DesktopProof() {
  const { s, at } = desktop;
  const radius = s(8);

  return (
    <div className="@container relative mx-auto hidden aspect-[1024/691] max-w-[1280px] lg:block">
      <Line style={{ left: "-50vw", right: "-50vw", top: s(21), height: 1 }} />
      <Line style={{ left: "-50vw", right: "-50vw", top: s(113), height: 1 }} />
      <Line style={{ left: "-50vw", right: "-50vw", top: s(680), height: 1 }} />
      <Line
        style={{ left: "-50vw", right: `calc(100% - ${s(637)})`, top: s(225), height: 1 }}
      />
      <Line style={{ left: s(25), top: 0, bottom: 0, width: 1 }} />
      <Line style={{ left: s(636), top: 0, bottom: 0, width: 1 }} />
      <Line style={{ left: s(1003), top: 0, bottom: 0, width: 1 }} />
      <Line style={{ ...at(281, 21), width: 1, height: s(204) }} />
      <Line style={{ left: s(570), top: 0, width: 1, height: s(21) }} />

      <SectionEyebrow
        accent="sky"
        className="absolute text-[#222]"
        style={{ ...at(826, 74), gap: s(11), fontSize: s(9.5), letterSpacing: "0.2em" }}
        iconStyle={{ width: s(22), height: s(9) }}
      >
        Our Social Proof
      </SectionEyebrow>

      <AvatarStack style={at(82, 144)} size={s(57)} overlap={s(29)} />
      <div
        className="absolute font-heading leading-none font-medium text-[#111]"
        style={{ ...at(350, 163.4), fontSize: s(17) }}
      >
        ©{new Date().getFullYear()} Taxosolution
      </div>

      <div
        className="absolute overflow-hidden bg-sky text-white"
        style={{ ...at(49, 250, 278, 193), borderRadius: radius }}
      >
        <PixelNoise width={278} height={193} seed={3} fade="to left" />
      </div>
      <div
        className="absolute overflow-hidden bg-sky"
        style={{ ...at(306, 432, 319, 157), borderRadius: radius }}
      >
        <PixelNoise width={319} height={157} seed={8} fade="to top" />
      </div>
      <ConcaveCorner style={at(327, 425, 7, 7)} radius={{ borderBottomLeftRadius: s(7) }} />
      <ConcaveCorner style={at(299, 443, 7, 7)} radius={{ borderTopRightRadius: s(7) }} />

      <div
        className="absolute font-heading leading-none font-normal tracking-[-0.02em] text-white"
        style={{ ...at(86, 286), fontSize: s(86) }}
      >
        {stat.value}
      </div>
      <div
        className="absolute font-heading leading-none whitespace-nowrap text-white"
        style={{ ...at(84, 380.7), fontSize: s(21.5) }}
      >
        {stat.label}
      </div>
      <p
        className="absolute font-heading font-normal whitespace-nowrap text-white"
        style={{ ...at(339, 466.3), fontSize: s(22.5), lineHeight: s(27) }}
      >
        Boards who decided to
        <br />
        stop reacting and start
        <br />
        preparing for scrutiny.
      </p>

      <MiniPhoto style={{ ...at(348, 248, 86, 86) }} s={s} />
      <p
        className="absolute text-[#222]"
        style={{ ...at(350, 357.7, 252), fontSize: s(11.5), lineHeight: s(15) }}
      >
        {blurb}
      </p>

      <div className="absolute flex flex-col" style={{ ...at(83, 467), gap: s(6) }}>
        {tagRows.map((row) => (
          <div key={row.join()} className="flex" style={{ gap: s(6) }}>
            {row.map((tag) => (
              <span
                key={tag}
                className="flex items-center rounded-full border border-[#222] whitespace-nowrap text-[#111]"
                style={{ height: s(22), paddingInline: s(7), fontSize: s(10.5) }}
              >
                {tag}
              </span>
            ))}
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className="absolute flex items-center bg-[#111] text-white transition-opacity hover:opacity-90"
        style={{
          ...at(82, 544),
          height: s(33),
          paddingLeft: s(11),
          paddingRight: s(4),
          gap: s(10),
          fontSize: s(11.5),
          borderRadius: s(2),
        }}
      >
        Book a Consultation
        <span
          className="flex items-center justify-center bg-sky"
          style={{ width: s(26), height: s(26), borderRadius: s(2) }}
        >
          <ChevronRight style={{ width: s(13), height: s(13) }} strokeWidth={1.75} />
        </span>
      </a>

      <Phone s={s} at={at} />
    </div>
  );
}

function MobileProof() {
  const pixel = () => "4px";

  return (
    <div className="px-5 py-14 md:px-8 lg:hidden">
      <SectionEyebrow accent="sky" className="text-[#222]">
        Our Social Proof
      </SectionEyebrow>

      <div className="mt-6 flex items-center gap-4">
        <AvatarStack className="relative" size="44px" overlap="22px" />
        <span className="font-heading text-base font-medium text-[#111]">
          ©{new Date().getFullYear()} Taxosolution
        </span>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-lg bg-sky p-6 text-white">
        <PixelNoise width={278} height={193} seed={3} fade="to left" />
        <div className="relative font-heading text-7xl leading-none tracking-[-0.02em]">
          {stat.value}
        </div>
        <div className="relative mt-4 font-heading text-xl leading-none">
          {stat.label}
        </div>
      </div>

      <div className="mt-6 flex items-start gap-4">
        <div className="relative size-20 shrink-0">
          <MiniPhoto style={{ inset: 0 }} s={pixel} />
        </div>
        <p className="text-sm leading-relaxed text-[#222]">{blurb}</p>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-lg bg-sky p-6">
        <PixelNoise width={319} height={157} seed={8} fade="to top" />
        <p className="relative font-heading text-xl leading-snug text-white">
          Boards who decided to stop reacting and start preparing for scrutiny.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {tagRows.flat().map((tag) => (
          <span
            key={tag}
            className="flex h-7 items-center rounded-full border border-[#222] px-2.5 text-xs text-[#111]"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href="#contact"
        className="mt-6 inline-flex h-11 items-center gap-3 rounded-[3px] bg-[#111] pr-1 pl-4 text-sm text-white transition-opacity hover:opacity-90"
      >
        Book a Consultation
        <span className="flex size-9 items-center justify-center rounded-[3px] bg-sky">
          <ChevronRight className="size-4" strokeWidth={1.75} />
        </span>
      </a>

      <div className="@container relative mx-auto mt-10 aspect-[331/473] w-full max-w-[360px]">
        <Phone s={phoneCrop.s} at={phoneCrop.at} />
      </div>
    </div>
  );
}

function Phone({ s, at }: { s: Scale; at: Place }) {
  const icon = { width: s(16), height: s(16) };
  const photo = (x: number, y: number, w: number, h: number): CSSProperties => ({
    left: s(x),
    top: s(y),
    width: s(w),
    height: s(h),
  });

  return (
    <>
      <div
        className="absolute bg-[#181818]"
        style={{ ...at(659, 150, 331, 473), borderRadius: s(12) }}
      />
      <div
        className="absolute bg-[#222]"
        style={{ ...at(684, 174, 283, 425), borderRadius: s(8) }}
      />

      <span
        className="absolute flex items-center justify-center rounded-full bg-mint text-[#111]"
        style={at(698, 183, 22, 22)}
      >
        <PixelLogo style={{ height: s(10) }} />
      </span>
      <span
        className="absolute leading-none font-medium text-white"
        style={{ ...at(729, 189), fontSize: s(11) }}
      >
        taxosolution
      </span>
      <Ellipsis
        className="absolute text-white/50"
        style={{ ...at(939, 187), width: s(13), height: s(13) }}
        aria-hidden="true"
      />

      <div
        className="absolute overflow-hidden bg-sky"
        style={at(687, 214, 277, 339)}
      >
        <span className="absolute bg-[#6b5c50]" style={photo(76, 0, 124, 38)} />
        <span className="absolute bg-[#6b5c50]" style={photo(0, 43, 73, 73)} />
        <span className="absolute bg-[#4e4740]" style={photo(204, 43, 73, 120)} />
        <span className="absolute bg-[#6b5c50]" style={photo(0, 200, 40, 139)} />
        <ImagePlaceholder
          label="Client story photo"
          showLabel={false}
          className="absolute"
          style={{ ...photo(62, 40, 160, 299), borderRadius: `${s(80)} ${s(80)} 0 0` }}
        />
      </div>

      <Heart
        className="absolute fill-mint text-mint"
        style={{ ...at(703, 567), ...icon }}
        aria-hidden="true"
      />
      <MessageCircle
        className="absolute text-white/85"
        style={{ ...at(735, 567), ...icon }}
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <Send
        className="absolute text-white/85"
        style={{ ...at(767, 567), ...icon }}
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <Bookmark
        className="absolute text-white/40"
        style={{ ...at(933, 567), ...icon }}
        strokeWidth={1.75}
        aria-hidden="true"
      />
    </>
  );
}

function ConcaveCorner({
  style,
  radius,
}: {
  style: CSSProperties;
  radius: CSSProperties;
}) {
  return (
    <span aria-hidden="true" className="absolute bg-sky" style={style}>
      <span className="absolute inset-0 bg-background" style={radius} />
    </span>
  );
}

const CELL = 15;
const GAP = 2.5;

function noise(x: number, y: number, seed: number) {
  const value = Math.sin(x * 12.9898 + y * 78.233 + seed * 37.719) * 43758.5453;
  return value - Math.floor(value);
}

function PixelNoise({
  width,
  height,
  seed,
  fade,
}: {
  width: number;
  height: number;
  seed: number;
  fade: "to left" | "to top";
}) {
  const step = CELL + GAP;
  const cols = Math.ceil(width / step);
  const rows = Math.ceil(height / step);
  const cells = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const n = noise(x, y, seed);
      const opacity = n > 0.9 ? 0.14 : n > 0.75 ? 0.07 : n > 0.55 ? 0.035 : 0;
      if (opacity) {
        cells.push(
          <rect
            key={`${x}-${y}`}
            x={x * step}
            y={y * step}
            width={CELL}
            height={CELL}
            fillOpacity={opacity}
          />,
        );
      }
    }
  }

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMinYMin slice"
      className="pointer-events-none absolute inset-0 size-full fill-white"
      style={{ maskImage: `linear-gradient(${fade}, black 0%, rgb(0 0 0 / 0.6) 45%, transparent 90%)` }}
    >
      {cells}
    </svg>
  );
}
