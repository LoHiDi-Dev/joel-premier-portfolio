import Link from "next/link";
import { Header } from "@/components/Header";

export default function CaseStudyNotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-medium text-[#171717]">Project not found</h1>
        <p className="mt-4 text-[#525252]">
          The case study you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/work"
          className="mt-8 font-medium text-[#171717] underline transition-opacity hover:opacity-80"
        >
          Back to Work
        </Link>
      </main>
    </>
  );
}
