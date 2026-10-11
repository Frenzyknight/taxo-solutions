import { ArrowUpRight } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Input } from "@/components/ui/input";

const linkColumns = [
  {
    heading: "Firm",
    links: [
      { label: "The Mandate", href: "#mandate" },
      { label: "Counsel", href: "#counsel" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Engagement",
    links: [
      { label: "Board-Level Retainer", href: "#contact" },
      { label: "Appellate Defence", href: "#practice" },
      { label: "Cross-Border Advisory", href: "#practice" },
    ],
  },
  {
    heading: "Practice",
    links: [
      { label: "IGST & Indirect Tax", href: "#practice" },
      { label: "Customs · FEMA · PMLA", href: "#practice" },
      { label: "Director Protection", href: "#practice" },
    ],
  },
];

const infoItems = [
  {
    heading: "Office",
    body: "F-3, First Floor, Block-B, Gold Coin Complex, Jodhpur Cross Road, Satellite, Ahmedabad – 380015",
  },
  { heading: "Enrolment", body: "Gujarat High Court, Ahmedabad" },
  { heading: "Languages", body: "English · Hindi · Gujarati" },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="w-full overflow-hidden rounded-3xl bg-ink text-white"
    >
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-10 md:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <BrandMark tone="light" />
            <h2 className="max-w-md text-4xl leading-[1.08] font-medium tracking-tight md:text-5xl">
              Counsel Made Clear, Strategic &amp; Personal
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkColumns.map((column) => (
              <div key={column.heading} className="flex flex-col gap-4">
                <h3 className="text-xs font-medium tracking-[0.18em] text-white/45 uppercase">
                  {column.heading}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-end gap-6 border-t border-white/10 pt-8 lg:grid-cols-[1.1fr_1.4fr]">
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Regulatory briefings on GST, FEMA, PMLA and director liability —
            delivered to general counsel and board members.
          </p>
          <div className="flex w-full max-w-xl gap-2 rounded-xl bg-white/5 p-1.5 ring-1 ring-white/10 lg:justify-self-end">
            <Input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              className="h-10 border-0 bg-transparent text-sm text-white placeholder:text-white/40 focus-visible:ring-0 dark:bg-transparent"
            />
            <button
              type="button"
              className="h-10 shrink-0 rounded-lg bg-white px-5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mx-2 mb-2 rounded-2xl bg-white p-5 text-foreground md:mx-3 md:mb-3 md:p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto] lg:items-center">
          {infoItems.map((item) => (
            <div key={item.heading} className="flex flex-col gap-1.5">
              <span className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                {item.heading}
              </span>
              <span className="max-w-xs text-sm leading-snug">{item.body}</span>
            </div>
          ))}

          <a
            href="#home"
            className="group flex items-center gap-4 lg:justify-self-end"
            aria-label="Back to top"
          >
            <div className="flex -space-x-3">
              {["Counsel", "Associate"].map((label) => (
                <ImagePlaceholder
                  key={label}
                  label={label}
                  showLabel={false}
                  className="size-11 rounded-full ring-2 ring-white"
                />
              ))}
            </div>
            <span className="flex size-12 items-center justify-center rounded-full bg-mint transition-transform group-hover:rotate-45">
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </span>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Taxosolution — Advocates &amp; Legal
            Consultants
          </span>
          <span>Tax Law · Customs · FEMA · PMLA · Director Advisory</span>
        </div>
      </div>
    </footer>
  );
}
