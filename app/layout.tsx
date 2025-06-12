import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Nav/ResponsiveNav";
import StarAnimation from "./components/StarAnimation";
import ChatBot from "./components/ChatBot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
})


export const metadata: Metadata = {
  title: "M. Dwi Kurniawan",
  description: "Personal portfolio of M. Dwi Kurniawan — a passionate software developer with proven experience in web, mobile, and desktop application development."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#0F0F1A] text-[#E0E0FF]`}>
        <StarAnimation/>
        <ResponsiveNav />
        <div className="pt-[12vh]">
          {children}
        </div>

        <ChatBot/>
      </body>
    </html>
  );
}
