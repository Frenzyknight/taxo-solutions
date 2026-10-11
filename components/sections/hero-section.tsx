import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import type { CSSProperties } from "react";

import { PixelLogo } from "@/components/brand-mark";
import { AvatarStack, Line, MiniPhoto } from "@/components/frame-parts";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { navItems } from "@/components/nav-items";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { MenuButton } from "@/components/sections/site-header";
import { frame, type Place, type Scale } from "@/lib/frame";

/*
 * Desktop: every element sits on the 1024 x 660 reference frame. Coordinates
 * are reference pixels converted to `cqw`, so the composition scales as one.
 * Mobile renders the collage on a 360px-wide crop of the same frame.
 */

const desktop = frame(1024);
const mobile = frame(360, 220, 200);

const quote =
  "\u201CTaxosolution\u2019s counsel reshaped our GST defence. Their foresight turned a costly demand into a closed matter.\u201D";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full">
      <DesktopHero />
      <MobileHero />
    </section>
  );
}

function DesktopHero() {
  const { s, at } = desktop;

  return (
    <div className="@container relative mx-auto hidden aspect-[1024/660] max-w-[1280px] lg:block">
      <Line style={{ left: s(202), top: 0, bottom: 0, width: 1 }} />
      <Line style={{ left: s(578), top: 0, bottom: 0, width: 1 }} />
      <Line style={{ left: s(929), top: 0, bottom: 0, width: 1 }} />
      <Line style={{ ...at(202, 57, 376), height: 1 }} />
      <Line style={{ ...at(202, 191, 727), height: 1 }} />
      <Line style={{ ...at(578, 464, 351), height: 1 }} />
      <Line style={{ left: s(929), right: "-50vw", top: s(87), height: 1 }} />

      <a
        href="#home"
        aria-label="Taxosolution home"
        className="absolute flex items-center text-[#111]"
        style={{ ...at(47, 24), gap: s(7) }}
      >
        <PixelLogo style={{ height: s(13) }} />
        <span className="leading-none" style={{ fontSize: s(15) }}>
          Taxosolution
        </span>
      </a>

      <nav
        aria-label="Primary"
        className="absolute flex flex-col items-start text-[#333]"
        style={{ ...at(47, 70), fontSize: s(11), lineHeight: s(20) }}
      >
        {navItems.map((item, index) =>
          index === navItems.length - 1 ? (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex items-center border-b border-[#333] transition-opacity hover:opacity-70"
              style={{ gap: s(6), paddingBottom: s(2) }}
            >
              {item.label}
              <ArrowUpRight style={{ width: s(10), height: s(10) }} />
            </a>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ),
        )}
      </nav>

      <MiniPhoto style={at(239, 73, 72, 73)} s={s} />
      <p
        className="absolute text-[#333] italic"
        style={{ ...at(328, 95, 182), fontSize: s(9), lineHeight: s(10.5) }}
      >
        {quote}
      </p>
      <p
        className="absolute leading-none font-semibold text-[#111]"
        style={{ ...at(328, 135.5), fontSize: s(9) }}
      >
        Priya Menon
      </p>

      <div
        className="absolute font-heading leading-none font-medium text-[#111]"
        style={{ ...at(607, 32), fontSize: s(11.5) }}
      >
        ©{new Date().getFullYear()} Taxosolution
      </div>

      <AvatarStack style={at(606, 95)} size={s(35)} overlap={s(18.3)} />

      <MenuButton
        className="absolute"
        style={at(949, 24)}
        buttonStyle={{ width: s(27), height: s(27), borderRadius: s(2) }}
        iconStyle={{ width: s(12), height: s(12) }}
      />

      <SectionEyebrow
        className="absolute text-[#222]"
        style={{
          ...at(606, 239),
          gap: s(10),
          fontSize: s(9.5),
          letterSpacing: "0.2em",
        }}
        iconStyle={{ width: s(22), height: s(10) }}
      >
        Strategic Legal Advisory
      </SectionEyebrow>

      <h1
        className="absolute font-normal tracking-[-0.01em] whitespace-nowrap text-black"
        style={{ ...at(608, 272), fontSize: s(62), lineHeight: s(57) }}
      >
        Senior
        <br />
        Counsel
        <br />
        Right Here
      </h1>

      <p
        className="absolute text-[#333]"
        style={{ ...at(607, 489.6, 272), fontSize: s(10.5), lineHeight: s(12.5) }}
      >
        Strategic advisory across indirect tax, customs, FEMA and PMLA,
        positioned at the level of senior counsel, not transactional service.
      </p>

      <div
        className="absolute flex items-center"
        style={{ ...at(606, 560), height: s(33) }}
      >
        <a
          href="#contact"
          className="flex h-full items-center bg-[#111] text-white transition-opacity hover:opacity-90"
          style={{
            paddingLeft: s(10),
            paddingRight: s(3),
            gap: s(12),
            fontSize: s(11),
            borderRadius: s(2),
          }}
        >
          Book a Consultation
          <span
            className="flex items-center justify-center bg-mint text-[#111]"
            style={{ width: s(27), height: s(27), borderRadius: s(2) }}
          >
            <ChevronRight style={{ width: s(13), height: s(13) }} strokeWidth={1.75} />
          </span>
        </a>
        <a
          href="#practice"
          className="text-[#111] transition-opacity hover:opacity-70"
          style={{ marginLeft: s(19), fontSize: s(11) }}
        >
          Practice Overview
        </a>
      </div>

      <Collage s={s} at={at} bleedLeft showPortrait />
    </div>
  );
}

function MobileHero() {
  return (
    <div className="px-5 pt-4 pb-12 md:px-8 lg:hidden">
      <SectionEyebrow className="text-[#222]">Strategic Legal Advisory</SectionEyebrow>
      <h1 className="mt-6 text-[56px] leading-[0.95] font-normal tracking-[-0.01em] text-black">
        Senior
        <br />
        Counsel
        <br />
        Right Here
      </h1>
      <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#333]">
        Strategic advisory across indirect tax, customs, FEMA and PMLA,
        positioned at the level of senior counsel, not transactional service.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-5">
        <a
          href="#contact"
          className="flex h-11 items-center gap-3 rounded-[3px] bg-[#111] py-1 pr-1 pl-4 text-sm text-white"
        >
          Book a Consultation
          <span className="flex aspect-square h-full items-center justify-center rounded-[3px] bg-mint text-[#111]">
            <ChevronRight className="size-4" strokeWidth={1.75} />
          </span>
        </a>
        <a href="#practice" className="text-sm text-[#111]">
          Practice Overview
        </a>
      </div>

      <div className="@container relative mt-12 aspect-[360/460] w-full overflow-hidden">
        <Collage s={mobile.s} at={mobile.at} />
      </div>
    </div>
  );
}

function Collage({
  s,
  at,
  bleedLeft = false,
  showPortrait = false,
}: {
  s: Scale;
  at: Place;
  bleedLeft?: boolean;
  showPortrait?: boolean;
}) {
  const leftBlock: CSSProperties = bleedLeft
    ? { left: "-50vw", width: `calc(50vw + ${s(259)})`, top: at(0, 440).top, bottom: 0 }
    : { ...at(0, 440, 259), bottom: 0 };

  return (
    <>
      <div className="absolute bg-sky" style={{ ...at(230, 210, 279, 249), borderRadius: s(14) }} />
      <div className="absolute bg-sky" style={at(220, 430, 50, 40)} />
      <div className="absolute bg-sky" style={leftBlock} />
      <div
        className="absolute bg-white"
        style={{ ...at(216, 426, 14, 14), borderBottomRightRadius: s(14) }}
      />

      {showPortrait ? (
        <>
          <div className="absolute bg-mint" style={at(42, 450, 30, 40)} />
          <div className="absolute bg-mint" style={at(150, 452, 30, 26)} />
          <div className="absolute bg-mint" style={at(0, 494, 24, 22)} />
          <div className="absolute bg-mint" style={at(238, 540, 21, 62)} />
          <ImagePlaceholder
            label="Portrait photo"
            className="absolute"
            style={{
              ...at(14, 268, 230, 392),
              borderRadius: `${s(115)} ${s(115)} 0 0`,
            }}
          />
        </>
      ) : null}

      <div
        className="absolute bg-white"
        style={{ ...at(259, 459, 318, 201), borderTopLeftRadius: s(14) }}
      />

      <Stat
        style={at(409, 484)}
        s={s}
        value="23"
        suffix="+"
        suffixClassName="text-mint"
        label="Specialist Services"
        labelOffset={8.4}
      />
      <Stat
        style={at(278, 553)}
        s={s}
        value="06"
        label="Practice Pillars"
        labelOffset={7.5}
      />

      <AnalyticsCard s={s} style={at(239, 232, 123, 205)} />
      <SummaryCard s={s} style={at(375, 232, 185, 205)} />
    </>
  );
}

function Stat({
  style,
  s,
  value,
  suffix,
  suffixClassName,
  label,
  labelOffset,
}: {
  style: CSSProperties;
  s: Scale;
  value: string;
  suffix?: string;
  suffixClassName?: string;
  label: string;
  labelOffset: number;
}) {
  return (
    <div className="absolute" style={style}>
      <div
        className="font-heading leading-none font-normal tracking-[-0.03em] text-[#111]"
        style={{ fontSize: s(53) }}
      >
        {value}
        {suffix ? (
          <span
            className={`relative top-[0.18em] ml-[0.12em] align-top text-[0.42em] leading-none ${suffixClassName ?? ""}`}
          >
            {suffix}
          </span>
        ) : null}
      </div>
      <div
        className="leading-none whitespace-nowrap text-[#6b6b6b]"
        style={{ marginTop: s(labelOffset), marginLeft: s(2), fontSize: s(12) }}
      >
        {label}
      </div>
    </div>
  );
}

function AnalyticsCard({ s, style }: { s: Scale; style: CSSProperties }) {
  return (
    <div
      aria-hidden="true"
      className="absolute overflow-hidden bg-white"
      style={{
        ...style,
        borderRadius: s(8),
        maskImage: "linear-gradient(to right, transparent 0%, black 48%)",
      }}
    >
      <span
        className="absolute inline-flex items-center leading-none text-[#555]"
        style={{ left: s(11), top: s(16), fontSize: s(7), gap: s(3) }}
      >
        +12.4%
        <ArrowUp className="text-mint" style={{ width: s(7), height: s(7) }} />
      </span>
      <span
        className="absolute inset-x-0"
        style={{
          top: s(42),
          height: s(1.2),
          backgroundImage: `repeating-linear-gradient(to right, #2fbf71 0 ${s(5)}, transparent ${s(5)} ${s(9)})`,
        }}
      />
      <span
        className="absolute bg-linear-to-b from-mint to-sky"
        style={{
          ...pos(s, 31, 21, 29, 117),
          borderRadius: `${s(3)} ${s(3)} 0 0`,
        }}
      >
        <span
          className="absolute inset-x-0 bottom-0"
          style={{
            top: s(40),
            backgroundImage: `radial-gradient(circle, rgb(255 255 255 / 0.55) ${s(1)}, transparent ${s(1.4)})`,
            backgroundSize: `100% ${s(8)}`,
          }}
        />
      </span>
      <span
        className="absolute rounded-full border-mint bg-white shadow-[0_0_0_3px_rgb(100_235_136/0.35)]"
        style={{ ...pos(s, 41, 37, 10, 10), borderWidth: s(2) }}
      />
      <span className="absolute bg-[#eaf5ec]" style={pos(s, 71, 44, 20, 94)} />
      <span className="absolute bg-[#eaf5ec]" style={pos(s, 96, 78, 20, 60)} />
      <span
        className="absolute font-heading leading-none font-semibold whitespace-nowrap text-[#111]"
        style={{ left: s(-26), top: s(149), fontSize: s(13) }}
      >
        Risk Analytics
      </span>
      <span
        className="absolute text-[#666]"
        style={{ left: s(-26), top: s(167), width: s(130), fontSize: s(9), lineHeight: s(11) }}
      >
        Overview of exposure and savings insights.
      </span>
    </div>
  );
}

function SummaryCard({ s, style }: { s: Scale; style: CSSProperties }) {
  const legend = [
    { label: "GST", value: "23%", color: "bg-mint", x: 8 },
    { label: "Customs", value: "20%", color: "bg-sky", x: 65 },
    { label: "FEMA", value: "57%", color: "bg-[#111]", x: 125 },
  ];

  return (
    <div
      aria-hidden="true"
      className="absolute overflow-hidden bg-white text-[#111]"
      style={{
        ...style,
        borderRadius: s(8),
        boxShadow: `0 ${s(6)} ${s(24)} rgb(0 0 0 / 0.08)`,
      }}
    >
      <div className="absolute flex items-center" style={{ left: s(8), top: s(8), gap: s(4) }}>
        <PixelLogo style={{ height: s(8) }} />
        <span className="leading-none" style={{ fontSize: s(9) }}>
          Taxosolution
        </span>
      </div>
      <div className="absolute leading-none text-[#555]" style={{ left: s(8), top: s(29.5), fontSize: s(9) }}>
        Demand Summary
      </div>
      <div
        className="absolute font-heading leading-none font-medium"
        style={{ left: s(8), top: s(42), fontSize: s(20) }}
      >
        ₹13.97L
      </div>
      <div
        className="absolute flex items-center justify-center rounded-full border border-[#222] leading-none"
        style={{ ...pos(s, 126, 34, 50, 20), fontSize: s(8.5), gap: s(4) }}
      >
        Weekly
        <ChevronDown style={{ width: s(9), height: s(9) }} />
      </div>

      <div
        className="absolute overflow-hidden bg-[#f1f1f1]"
        style={{
          ...pos(s, 8, 69, 168, 79),
          borderRadius: s(4),
          backgroundImage:
            "repeating-linear-gradient(to right, transparent 0 calc(16.66% - 1px), #e6e6e6 calc(16.66% - 1px) 16.66%)",
        }}
      >
        <svg viewBox="0 0 168 79" className="absolute inset-0 size-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hero-curve" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#2fbf71" stopOpacity="0.2" />
              <stop offset="0.45" stopColor="#2fbf71" />
              <stop offset="1" stopColor="#54b8f6" />
            </linearGradient>
          </defs>
          <path
            d="M0 76 C 70 76, 110 66, 144 36 S 162 12, 168 4"
            fill="none"
            stroke="url(#hero-curve)"
            strokeWidth="2"
          />
          <circle cx="144" cy="36" r="4" fill="#fff" stroke="#3fb8a0" strokeWidth="2" />
        </svg>
        <span
          className="absolute inline-flex items-center bg-white leading-none text-[#333] shadow-sm"
          style={{
            left: s(97),
            top: s(21),
            fontSize: s(7),
            gap: s(3),
            padding: `${s(3)} ${s(4)}`,
            borderRadius: s(2),
          }}
        >
          −38.6%
          <ArrowDown className="text-mint" style={{ width: s(7), height: s(7) }} />
        </span>
      </div>

      {legend.map((item) => (
        <div key={item.label} className="absolute" style={{ left: s(item.x), top: s(155) }}>
          <div className="flex items-center leading-none text-[#555]" style={{ gap: s(4), fontSize: s(8) }}>
            <span className={item.color} style={{ width: s(6), height: s(6) }} />
            {item.label}
          </div>
          <div
            className="leading-none font-semibold"
            style={{ marginTop: s(5), marginLeft: s(9), fontSize: s(10.5) }}
          >
            {item.value}
          </div>
        </div>
      ))}

      <div
        className="absolute flex overflow-hidden rounded-full"
        style={pos(s, 7, 186, 170, 10)}
      >
        <span className="bg-mint" style={{ width: "18%" }} />
        <span className="bg-sky" style={{ width: "35%" }} />
        <span className="flex-1 bg-[#111]" />
      </div>
    </div>
  );
}

function pos(s: Scale, x: number, y: number, w: number, h: number): CSSProperties {
  return { left: s(x), top: s(y), width: s(w), height: s(h) };
}
