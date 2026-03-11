import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Resume | Joel Stefano Premier",
  description: "Resume and experience for Joel Stefano Premier, Senior Product Designer.",
};

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-24">
        <h1 className="text-3xl font-medium text-[#171717]">Resume</h1>
        <p className="mt-4 text-[#525252]">
          Resume content coming soon. In the meantime, feel free to{" "}
          <a
            href="mailto:hello@joelstefanopremier.com"
            className="font-medium text-[#171717] underline"
          >
            get in touch
          </a>
          .
        </p>
        <Link
          href="/"
          className="mt-8 inline-block font-medium text-[#171717]"
        >
          ← Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
