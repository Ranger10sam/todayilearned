import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import DisplayMode from "@/components/displayMode";
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: "Today I Learned",
  description: "Document what you learnt today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <DisplayMode />
        {children}
        <Footer />
      </body>
    </html>
  );
}
