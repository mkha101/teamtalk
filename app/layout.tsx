import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Menu } from "./components/menu/Menu";
import { RightSideContent } from "./components/right-side/RightSideContent";

export const metadata: Metadata = {
  title: "TeamTalk",
  description: "The number 1 place to talk about your favourite team",
};

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} bg-black `}>
        {children}
      </body>
    </html>
  );
}
