import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeFeaturedWorkSection } from "@/components/HomeFeaturedWorkSection";
import { ApproachSection } from "@/components/ApproachSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <main>
        <HomeFeaturedWorkSection />
        <ApproachSection />
        <CTASection />
      </main>
    </>
  );
}
