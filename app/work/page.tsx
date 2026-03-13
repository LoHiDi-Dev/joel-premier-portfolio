import { Header } from "@/components/Header";
import { WorkPageContent } from "@/components/WorkPageContent";

export const metadata = {
  title: "Work",
  description:
    "Enterprise product design across e-commerce, healthcare, travel, and operations, building accessible, scalable experiences that deliver measurable impact.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <WorkPageContent />
    </>
  );
}
