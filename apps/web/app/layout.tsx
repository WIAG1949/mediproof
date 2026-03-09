import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Mediproof",
    template: "%s | Mediproof",
  },
  description: "Open-source Stellar Soroban protocol. Part of the GrantFox ecosystem.",
  keywords: ["stellar", "soroban", "blockchain", "open-source", "web3", "mediproof"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0f] text-white antialiased">{children}</body>
    </html>
  );
}
