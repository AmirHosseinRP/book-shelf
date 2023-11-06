import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/shared/assets/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Shelf",
  description: "Next.js web application for all your books at one place",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
