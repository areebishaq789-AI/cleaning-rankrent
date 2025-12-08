import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0284c7",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Ajax Cleaning Services",
    default: "Ajax Cleaning Services | Top Rated Maids in Ajax, Ontario",
  },
  description: "Professional cleaning services in Ajax, Ontario. Residential, commercial, move-in/move-out cleaning. Reliable, bonded, and insured. Get a free quote today!",
  keywords: ["Cleaning Services Ajax", "Maid Service Ajax", "House Cleaning Ajax", "Commercial Cleaning Ajax", "Move out cleaning Ajax"],
  authors: [{ name: "Ajax Cleaning Services" }],
  creator: "Ajax Cleaning Services",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://ajaxcleaning.com", // Placeholder
    title: "Ajax Cleaning Services | Top Rated Maids in Ajax, Ontario",
    description: "Professional cleaning services in Ajax, Ontario. Residential, commercial, move-in/move-out cleaning. Get a free quote today!",
    siteName: "Ajax Cleaning Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
