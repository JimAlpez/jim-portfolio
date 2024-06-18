import { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Wrapper from "@/components/wrapper";

const inter = Inter({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Jim Alpez | Personal Portfolio",
  description: "He is graduate under BS in Computer Engineering who is passionate about web development and is always determined to complete tasks with high-quality results. He is fast learner who is eager to take on new challenges and learn new ideas that will enhance his skills and lead to great opportunities.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} relative tracking-wide`}>
        <Wrapper>{children}</Wrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
