import { Header } from "@/components/Header";
import { AboutPageContent } from "@/components/AboutPageContent";

export const metadata = {
  title: "About",
  description:
    "Senior Product Designer focused on complex digital products, systems thinking, accessibility, and outcomes that matter.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutPageContent />
      </main>
    </>
  );
}
