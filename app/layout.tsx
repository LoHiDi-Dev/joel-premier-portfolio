import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Joel Premier | Senior Product Designer | Open to New Opportunities",
    template: "%s | Joel Premier",
  },
  description:
    "Senior Product Designer focused on complex digital products, systems thinking, and accessibility. Designing accessible, systems-driven digital experiences.",
  openGraph: {
    title: "Joel Premier | Senior Product Designer | Open to New Opportunities",
    description:
      "Senior Product Designer focused on complex digital products, systems thinking, and accessibility.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} flex min-h-screen flex-col overflow-x-hidden font-sans antialiased`}
      >
        <div className="min-h-screen flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
