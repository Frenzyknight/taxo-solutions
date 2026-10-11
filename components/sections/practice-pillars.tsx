"use client";

import {
  ArrowUpRight,
  Briefcase,
  Globe2,
  Landmark,
  Minus,
  Plus,
  Scale,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

import { PixelBlocks } from "@/components/pixel-blocks";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { cn } from "@/lib/utils";

type Pillar = {
  title: string;
  summary: string;
  body: string;
  tags: string[];
  Icon: LucideIcon;
};

const pillars: Pillar[] = [
  {
    title: "IGST & Indirect Tax",
    summary: "Demand defence · ITC architecture · Appellate strategy",
    body: "An evidentiary fortress built before the adjudicating officer — not assembled in haste at the appellate stage. Multi-layer submissions anchored to Supreme Court, High Court and Tribunal precedent.",
    tags: [
      "ITC Dispute Defence",
      "Appellate Representation",
      "SCN Strategy & Reply",
      "Compliance Architecture",
    ],
    Icon: Scale,
  },
  {
    title: "Customs & Trade Regulation",
    summary: "Classification · Valuation · DRI defence · Refunds",
    body: "Disciplined classification analysis, notification-driven exemption strategy and robust appellate advocacy — where a single tariff entry can decide the viability of an import model.",
    tags: [
      "Classification & BCD",
      "DRI Investigation Defence",
      "Anti-Dumping Analysis",
      "Cross-Border Structuring",
    ],
    Icon: Globe2,
  },
  {
    title: "FEMA & RBI Counsel",
    summary: "FDI · ODI · ECB · Compounding · Enforcement defence",
    body: "Transactional structuring intelligence combined with penalty defence depth — because FEMA contraventions are now investigated as conduits to money laundering.",
    tags: ["FDI & ODI Structuring", "FEMA Compounding", "ED Penalty Defence"],
    Icon: Landmark,
  },
  {
    title: "PMLA & Anti-Money Laundering",
    summary: "ED investigations · Attachment defence · AML compliance",
    body: "Composure, speed and statutory precision where GST fraud, customs evasion or FEMA violations become scheduled offences capable of triggering provisional attachment.",
    tags: ["ED Investigation Advisory", "GST–PMLA Intersection"],
    Icon: ShieldCheck,
  },
  {
    title: "Director & KMP Protection",
    summary: "Personal liability · Governance shielding · Board advisory",
    body: "Strategic pre-emption, governance architecture and vigorous personal defence as revenue authorities, the ED and insolvency regulators pierce the corporate veil.",
    tags: [
      "Tax Recovery Defence",
      "PMLA Personal Attachment",
      "NI Act Liability",
      "DIN & Disqualification",
      "IBC / CIRP Advisory",
      "Pre-Appointment Risk Mapping",
    ],
    Icon: Users,
  },
  {
    title: "Commercial & Governance",
    summary: "Contracts · Disputes · Consumer · Corporate retainer",
    body: "Contractual architecture, dispute posture and consumer-forum exposure managed with the same rigour as tax and enforcement risk.",
    tags: [
      "Contract & Commercial Disputes",
      "Consumer & Insurance",
      "Corporate Retainer",
    ],
    Icon: Briefcase,
  },
];

export function PracticePillars() {
  const [active, setActive] = useState(0);

  return (
    <section id="practice" className="w-full">
      <div className="mx-auto max-w-7xl px-5 pt-6 pb-16 md:px-8 lg:pb-20">
        <SectionEyebrow tone="dark">Practice Pillars</SectionEyebrow>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="max-w-lg text-4xl leading-[1.08] font-medium tracking-tight md:text-5xl">
            Six verticals, one integrated advisory framework
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-white/60 lg:justify-self-end">
            Each pillar is a discrete enterprise risk domain — managed with
            specialist depth, integrated strategic thinking and the singular
            accountability of senior-level counsel.
          </p>
        </div>

        <ul className="mt-12 flex flex-col gap-2">
          {pillars.map((pillar, index) => {
            const isOpen = index === active;
            const panelId = `pillar-panel-${index}`;
            return (
              <li
                key={pillar.title}
                className={cn(
                  "rounded-2xl transition-colors",
                  isOpen ? "bg-ink-soft" : "hover:bg-white/[0.03]",
                )}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-5 text-left md:grid-cols-[auto_1fr_1fr_auto] md:px-6"
                >
                  <span
                    className={cn(
                      "flex size-8 items-center justify-center rounded-lg transition-colors",
                      isOpen ? "bg-mint text-foreground" : "bg-white/5 text-white/70",
                    )}
                  >
                    {isOpen ? (
                      <Minus className="size-4" aria-hidden="true" />
                    ) : (
                      <Plus className="size-4" aria-hidden="true" />
                    )}
                  </span>
                  <span className="text-lg font-medium md:text-xl">
                    {pillar.title}
                  </span>
                  <span className="hidden text-xs text-white/45 md:block">
                    {pillar.summary}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-mint">
                    Detail
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  hidden={!isOpen}
                  className="px-4 pb-6 md:px-6"
                >
                  <div className="grid grid-cols-1 gap-8 md:pl-12 lg:grid-cols-[1fr_380px] lg:items-center">
                    <div className="flex flex-col gap-5">
                      <p className="max-w-lg text-sm leading-relaxed text-white/65">
                        {pillar.body}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {pillar.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <DeviceMockup Icon={pillar.Icon} title={pillar.title} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const tileColors = [
  "bg-mint",
  "bg-sky",
  "bg-white",
  "bg-sky",
  "bg-white",
  "bg-mint",
];

function DeviceMockup({ Icon, title }: { Icon: LucideIcon; title: string }) {
  return (
    <div className="relative mx-auto h-64 w-full max-w-[380px]" aria-hidden="true">
      <PixelBlocks
        pattern={["ss..", "ssm.", ".mm."]}
        className="absolute top-6 left-0 w-[46%]"
      />
      <PixelBlocks
        pattern={[".m", "ss"]}
        className="absolute right-2 bottom-4 w-[22%]"
      />

      <div className="absolute top-1/2 left-1/2 w-52 -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-[34px] bg-black p-2 shadow-2xl ring-1 ring-white/15">
        <div className="rounded-[28px] bg-[#1b1b1b] p-4">
          <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-white/15" />
          <div className="grid grid-cols-3 gap-2.5">
            {tileColors.map((color, index) => (
              <div
                key={index}
                className={cn(
                  "flex aspect-square items-center justify-center rounded-xl text-foreground",
                  color,
                )}
              >
                {index === 0 ? <Icon className="size-5" /> : null}
              </div>
            ))}
          </div>
          <div className="mt-4 truncate text-[11px] font-medium text-white/80">
            {title}
          </div>
          <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-white/10" />
          <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}
