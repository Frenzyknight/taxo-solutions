import { ChevronRight, Check, Rocket, Shield, UsersRound } from "lucide-react";

import { SectionEyebrow } from "@/components/section-eyebrow";
import { cn } from "@/lib/utils";

/*
 * At lg+ this section is a single composition laid out on the 947 x 570
 * reference frame: positions are percentages of that frame and sizes use
 * `cqw` so every element scales together with the container width.
 */

const cards = [
  {
    title: "The Mandate",
    body: "Taxosolution was founded to protect enterprise value before risk becomes liability.",
    icon: <Rocket className="size-full fill-current" strokeWidth={1.5} />,
    position: "lg:top-[49.1%] lg:left-[17.4%]",
    mobileOffset: "ml-0",
    seed: 1,
  },
  {
    title: "Board-Centric",
    body: "Legal strategy should follow business reality, not just the statutory checklist.",
    icon: <UsersRound className="size-full fill-current" strokeWidth={1.5} />,
    position: "lg:top-[28.4%] lg:left-[44.4%]",
    mobileOffset: "ml-[8%]",
    seed: 2,
  },
  {
    title: "Full Confidence",
    body: "Senior-level counsel, regulatory intelligence and single-point accountability on every matter.",
    icon: (
      <span className="relative block size-full">
        <Shield className="size-full fill-current" strokeWidth={1.5} />
        <Check
          className="absolute inset-0 m-auto size-1/2 text-mint"
          strokeWidth={3.5}
        />
      </span>
    ),
    position: "lg:top-[7.9%] lg:left-[71.3%]",
    mobileOffset: "ml-[16%]",
    seed: 3,
  },
];

export function MissionSection() {
  return (
    <section id="mandate" className="w-full">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-16 md:px-8 lg:pt-14 lg:pb-14">
        <div className="@container relative flex flex-col lg:block lg:aspect-[947/570]">
          <div className="flex flex-col gap-8 lg:absolute lg:top-0 lg:left-0 lg:gap-[4.9cqw] lg:whitespace-nowrap">
            <SectionEyebrow tone="dark" className="lg:text-[1.15cqw]">
              About Us
            </SectionEyebrow>
            <h2 className="text-4xl leading-[1.2] font-normal tracking-[-0.01em] text-white lg:text-[3.6cqw]">
              Senior counsel,
              <br className="hidden lg:block" /> offering foresight and
              <br className="hidden lg:block" /> protection for boards.
            </h2>
          </div>

          <div className="mt-12 flex flex-col lg:mt-0">
            {cards.map((card) => (
              <article
                key={card.title}
                className={cn(
                  "relative flex min-h-48 w-[84%] flex-col justify-between overflow-hidden rounded-[10px] bg-mint p-6 text-[#111] lg:absolute lg:ml-0 lg:h-[28.6%] lg:min-h-0 lg:w-[28.7%] lg:rounded-[1cqw] lg:p-[2.4cqw] lg:pb-[2.2cqw]",
                  card.mobileOffset,
                  card.position,
                )}
              >
                <PixelNoise seed={card.seed} />
                <span className="relative size-6 lg:size-[2.3cqw]">
                  {card.icon}
                </span>
                <div className="relative">
                  <h3 className="text-2xl font-medium tracking-[-0.02em] lg:text-[2.3cqw]">
                    {card.title}
                  </h3>
                  <p className="mt-2 max-w-[88%] text-[13px] leading-[1.3] text-[#111]/85 lg:mt-[1cqw] lg:text-[1.27cqw]">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <Stat
            value="23"
            label="Specialist Services"
            className="mt-14 lg:absolute lg:top-[61.4%] lg:left-0 lg:mt-0"
          />

          <p className="mt-6 max-w-sm text-sm leading-[1.4] text-white/85 lg:absolute lg:top-[66.1%] lg:left-[68.7%] lg:mt-0 lg:w-[30%] lg:max-w-none lg:text-[1.27cqw]">
            Senior counsel, positioned to offer strategic foresight, statutory
            precision and a deep sense of composure when enforcement strikes.
          </p>

          {/* TODO: confirm years of practice */}
          <Stat
            value="15"
            label="Years of Practice"
            className="mt-12 lg:absolute lg:top-[86.5%] lg:left-0 lg:mt-0"
          />

          <p className="mt-6 max-w-sm text-sm leading-[1.4] text-white/85 lg:absolute lg:top-[87.2%] lg:left-[19.3%] lg:mt-0 lg:w-[36%] lg:max-w-none lg:text-[1.27cqw]">
            We&apos;re a practice anchored in the appellate forums, shaped by
            judicial precedent and calibrated to the realities of the
            enterprises we serve.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 lg:absolute lg:top-[86.8%] lg:left-[68.7%] lg:mt-0 lg:w-[31.3%] lg:flex-nowrap lg:gap-0">
            <a
              href="#contact"
              className="inline-flex h-9 items-center gap-3 rounded-[4px] bg-white py-1 pr-1 pl-3 text-[13px] text-[#111] transition-opacity hover:opacity-90 lg:h-[3.6cqw] lg:gap-[1.2cqw] lg:rounded-[0.4cqw] lg:py-[0.35cqw] lg:pr-[0.35cqw] lg:pl-[1cqw] lg:text-[1.3cqw]"
            >
              Book a Consultation
              <span className="flex aspect-square h-full items-center justify-center rounded-[3px] bg-mint lg:rounded-[0.3cqw]">
                <ChevronRight
                  className="size-4 lg:size-[1.6cqw]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
            </a>
            <a
              href="#practice"
              className="text-[13px] text-white transition-opacity hover:opacity-80 lg:ml-[1.8cqw] lg:text-[1.3cqw]"
            >
              Read the Mandate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="font-heading text-5xl leading-none font-normal tracking-[-0.02em] text-white lg:text-[5.2cqw]">
        {value}
        <span className="relative -top-[0.55em] ml-[0.08em] text-[0.5em] text-mint">
          +
        </span>
      </div>
      <div className="mt-3 text-xs text-white/70 lg:mt-[1.2cqw] lg:text-[1.2cqw]">
        {label}
      </div>
    </div>
  );
}

const NOISE_COLS = 22;
const NOISE_ROWS = 13;

function noise(x: number, y: number, seed: number) {
  const value = Math.sin(x * 12.9898 + y * 78.233 + seed * 37.719) * 43758.5453;
  return value - Math.floor(value);
}

function PixelNoise({ seed }: { seed: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-px -left-px grid grid-cols-[repeat(22,15px)] auto-rows-[15px] gap-[3px] lg:grid-cols-[repeat(22,1.6cqw)] lg:auto-rows-[1.6cqw] lg:gap-[0.32cqw]"
      style={{
        maskImage:
          "linear-gradient(to bottom, black 0%, rgb(0 0 0 / 0.85) 35%, transparent 80%)",
      }}
    >
      {Array.from({ length: NOISE_COLS * NOISE_ROWS }, (_, index) => {
        const x = index % NOISE_COLS;
        const y = Math.floor(index / NOISE_COLS);
        const n = noise(x, y, seed);
        const opacity = n > 0.9 ? 0.22 : n > 0.72 ? 0.09 : n > 0.45 ? 0.035 : 0;
        return (
          <span
            key={index}
            className="bg-white"
            style={{ opacity }}
          />
        );
      })}
    </div>
  );
}
