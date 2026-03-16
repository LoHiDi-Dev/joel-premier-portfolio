import { Header } from "@/components/Header";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata = {
  title: "Contact",
  description:
    "Reach out about senior product design roles and select consulting engagements where thoughtful product work can make a clear difference.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactPageContent />
      </main>
    </>
  );
}
