import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import DisplayMode from "@/components/displayMode";
import Footer from '@/components/footer'
import {Shantell_Sans} from 'next/font/google'

export const metadata: Metadata = {
  title: "Today I Learned",
  description: "Document what you learnt today",
};
const shantell = Shantell_Sans({ subsets: ['latin'], display: "swap" })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={shantell.className}>
        <Navbar />
        <DisplayMode />
        {children}
        <Footer />
      </body>
    </html>
  );
}
