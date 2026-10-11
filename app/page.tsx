import { ClaritySection } from "@/components/sections/clarity-section";
import { EngagementSection } from "@/components/sections/engagement-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { PracticePillars } from "@/components/sections/practice-pillars";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-2 bg-muted p-2 md:gap-3 md:p-3">
      <div className="overflow-hidden rounded-3xl bg-background">
        <SiteHeader />
        <HeroSection />
      </div>
      <main className="flex flex-col gap-2 md:gap-3">
        <div className="rounded-3xl bg-ink text-white">
          <MissionSection />
          <PracticePillars />
        </div>
        <div className="overflow-hidden rounded-3xl bg-background">
          <ClaritySection />
        </div>
        <div className="overflow-hidden rounded-3xl bg-background">
          <EngagementSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
