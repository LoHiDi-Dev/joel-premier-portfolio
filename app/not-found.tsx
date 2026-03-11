import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-medium text-[#171717]">Page not found</h1>
        <p className="mt-4 text-center text-[#525252]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 font-medium text-[#171717] underline transition-opacity hover:opacity-80"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
