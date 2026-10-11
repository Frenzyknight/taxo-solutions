"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { PixelLogo } from "@/components/brand-mark";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { cn } from "@/lib/utils";

/*
 * At lg+ this section is laid out on the 1024 x 652 reference frame:
 * positions are percentages of that frame and sizes use `cqw`, so the
 * whole composition scales with the container width.
 */

const practiceTags = [
  "Indirect Tax",
  "Customs",
  "FEMA Counsel",
  "PMLA Defence",
  "Director Protection",
  "+1",
];

type Testimonial = {
  lead: string;
  rest: string;
  name: string;
  title: string;
};

const QUOTES: Testimonial[] = [
  {
    lead: "Taxosolution transformed our compliance.",
    rest: " Their foresight makes risk manageable.",
    name: "Priya Menon",
    title: "CFO of Northwind Industries",
  },
  {
    lead: "They flag issues before they surface.",
    rest: " Nothing reaches our boardroom unprepared.",
    name: "Rahul Khanna",
    title: "Group General Counsel, Helios Capital",
  },
  {
    lead: "Risk is neutralised in the boardroom,",
    rest: " long before it reaches a courtroom.",
    name: "Arvind Gupta",
    title: "Advocate & Legal Counsel, Taxosolution",
  },
];

const LINE = "pointer-events-none absolute hidden bg-[#ececec] lg:block";

export function ClaritySection() {
  const [active, setActive] = useState(0);
  const current = QUOTES[active];
  const step = (delta: number) =>
    setActive((index) => (index + delta + QUOTES.length) % QUOTES.length);

  return (
    <section id="testimonials" className="relative w-full overflow-hidden">
      <div className="@container relative mx-auto max-w-[1280px] px-5 py-14 md:px-8 lg:aspect-[1024/652] lg:p-0">
        <span className={cn(LINE, "top-[3.2cqw] right-[43.36%] -left-[50vw] h-px")} />
        <span className={cn(LINE, "top-[18.85cqw] right-[43.36%] -left-[50vw] h-px")} />
        <span className={cn(LINE, "top-[17.87cqw] -right-[50vw] left-[56.64%] h-px")} />
        <span className={cn(LINE, "top-[30.47cqw] -right-[50vw] left-[56.64%] h-px")} />
        <span className={cn(LINE, "top-0 bottom-0 left-[2.25%] w-px")} />
        <span className={cn(LINE, "top-0 bottom-0 left-[56.64%] w-px")} />

        <SectionEyebrow
          accent="sky"
          className="text-[#111] lg:absolute lg:top-[7.71cqw] lg:left-[4.59%] lg:gap-[1cqw] lg:text-[0.98cqw] lg:tracking-[0.14em]"
          iconClassName="lg:h-[1.07cqw] lg:w-[2.15cqw]"
        >
          What They Said
        </SectionEyebrow>

        <p className="mt-5 max-w-xs text-[13px] leading-[1.2] text-[#1f1f1f] lg:absolute lg:top-[12.75cqw] lg:left-[4.3%] lg:mt-0 lg:max-w-none lg:text-[1.22cqw] lg:whitespace-nowrap">
          We break down statutory jargon into words
          <br className="hidden lg:block" /> your board actually uses and
          understands.
        </p>

        <h2 className="mt-10 text-[34px] leading-[1.17] font-normal tracking-[-0.01em] text-black lg:absolute lg:top-[19.7cqw] lg:left-[4.39%] lg:mt-0 lg:text-[3.52cqw] lg:whitespace-nowrap">
          We&rsquo;re here to connect clarity
          <br className="hidden lg:block" /> and compliance
          <TogglePill />
          so you
          <br className="hidden lg:block" /> can breathe easy.
          <AvatarStack />
        </h2>

        <div className="mt-12 flex flex-wrap items-end gap-x-12 gap-y-8 lg:contents">
          <Stat
            value="100"
            suffix="%"
            label="Senior-Led Matters"
            className="lg:absolute lg:top-[36.1cqw] lg:left-[4.6%]"
          />
          {/* TODO: confirm years of practice */}
          <Stat
            value="15"
            suffix="+"
            label="Years of Practice"
            className="lg:absolute lg:top-[48.2cqw] lg:left-[18.3%]"
          />
        </div>

        <PhotoBlock className="mt-10 lg:absolute lg:top-[35.45cqw] lg:left-[32.4%] lg:mt-0 lg:w-[19.7%] lg:max-w-none lg:rounded-[0.6cqw]" />

        <div className="mt-16 font-heading text-lg leading-none font-medium text-black lg:absolute lg:top-[13.23cqw] lg:left-[62.1%] lg:mt-0 lg:text-[1.66cqw]">
          ©{new Date().getFullYear()} Taxosolution
        </div>

        <ul className="mt-5 flex max-w-sm flex-wrap gap-x-1 gap-y-1.5 lg:absolute lg:top-[20.7cqw] lg:left-[62.3%] lg:mt-0 lg:w-[31%] lg:max-w-none lg:gap-x-[0.45cqw] lg:gap-y-[0.6cqw]">
          {practiceTags.map((tag) => (
            <li
              key={tag}
              className="inline-flex h-6 items-center rounded-full border border-[#2d2d2d] px-2 text-[11px] leading-none text-[#111] lg:h-[2.25cqw] lg:px-[0.7cqw] lg:text-[1.07cqw]"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-6 lg:contents">
          <div
            className="flex items-center gap-1.5 lg:absolute lg:top-[35.45cqw] lg:left-[62.1%] lg:gap-[0.59cqw]"
            role="tablist"
            aria-label="Testimonials"
          >
            {QUOTES.map((quote, index) => {
              const isActive = index === active;
              return (
                <button
                  key={quote.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show testimonial from ${quote.name}`}
                  onClick={() => setActive(index)}
                  className={cn(
                    "h-3.5 rounded-[2px] transition-all duration-300 lg:h-[1.37cqw]",
                    isActive
                      ? "w-7 bg-mint lg:w-[2.73cqw]"
                      : "w-3.5 bg-[#f3f3f3] hover:bg-[#e6e6e6] lg:w-[1.37cqw]",
                  )}
                />
              );
            })}
          </div>

          <blockquote
            key={active}
            className="animate-in font-heading text-[22px] leading-[1.27] text-black duration-500 fade-in lg:absolute lg:top-[39.7cqw] lg:left-[62.1%] lg:w-[35%] lg:text-[2.15cqw]"
          >
            &ldquo;{current.lead}
            <span className="text-[#737373]">{current.rest}&rdquo;</span>
          </blockquote>

          <div className="flex items-end justify-between gap-4 lg:contents">
            <div className="lg:absolute lg:top-[51.85cqw] lg:left-[62.1%]">
              <div className="font-heading text-[15px] leading-none font-medium text-black lg:text-[1.46cqw]">
                {current.name}
              </div>
              <div className="mt-1.5 text-[11px] leading-none text-[#2e2e2e] lg:mt-[0.63cqw] lg:text-[1.03cqw]">
                {current.title}
              </div>
            </div>

            <div className="flex gap-1.5 lg:absolute lg:top-[52.34cqw] lg:left-[89.94%] lg:gap-[0.68cqw]">
              <NavButton label="Previous testimonial" onClick={() => step(-1)}>
                <ChevronLeft className="size-4 lg:size-[1.4cqw]" strokeWidth={1.5} />
              </NavButton>
              <NavButton label="Next testimonial" onClick={() => step(1)}>
                <ChevronRight className="size-4 lg:size-[1.4cqw]" strokeWidth={1.5} />
              </NavButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TogglePill() {
  return (
    <span
      aria-hidden="true"
      className="relative mx-[0.15em] inline-block h-[0.78em] w-[1.42em] rounded-full bg-sky align-[-0.11em]"
    >
      <span className="absolute top-1/2 right-[0.08em] size-[0.61em] -translate-y-1/2 rounded-full bg-white" />
    </span>
  );
}

function AvatarStack() {
  return (
    <span
      aria-hidden="true"
      className="ml-[0.28em] inline-flex align-[-0.22em]"
    >
      <span className="size-[1.08em] rounded-full bg-[#18181a] ring-[0.06em] ring-white" />
      <span className="-ml-[0.64em] size-[1.08em] rounded-full bg-sky ring-[0.06em] ring-white" />
      <span className="-ml-[0.64em] flex size-[1.08em] items-center justify-center rounded-full bg-mint text-white ring-[0.06em] ring-white">
        <PixelLogo className="h-[0.48em]" />
      </span>
    </span>
  );
}

function Stat({
  value,
  suffix,
  label,
  className,
}: {
  value: string;
  suffix: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="font-heading text-5xl leading-none font-normal tracking-[-0.03em] text-[#111] lg:text-[5.3cqw]">
        {value}
        <span className="relative top-[0.04em] ml-[0.1em] align-top text-[0.42em] leading-none text-mint">
          {suffix}
        </span>
      </div>
      <div className="mt-2 text-xs leading-none text-[#575757] lg:mt-[0.7cqw] lg:text-[1.17cqw]">
        {label}
      </div>
    </div>
  );
}

function PhotoBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[202/219] w-full max-w-sm overflow-hidden rounded-md bg-[#181816]",
        className,
      )}
    >
      <span className="absolute top-[5.5%] left-0 h-[19%] w-[37%] bg-[#a5f3b9]" />
      <span className="absolute top-[23%] left-[37%] h-[21%] w-[14%] bg-[#a5f3b9]" />
      <span className="absolute top-[42%] left-[17.5%] h-[39%] w-[20%] bg-[#a5f3b9]" />
      <span className="absolute top-[81%] left-0 h-[19%] w-[17.5%] bg-[#a5f3b9]" />
      <ImagePlaceholder
        label="Client photo"
        className="absolute top-[14%] right-[4%] bottom-0 left-[30%] rounded-t-[40%]"
      />
    </div>
  );
}

function NavButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-7 items-center justify-center rounded-[4px] border border-[#222] text-[#111] transition-colors hover:bg-[#111] hover:text-white lg:size-[2.73cqw] lg:rounded-[0.4cqw]"
    >
      {children}
    </button>
  );
}
