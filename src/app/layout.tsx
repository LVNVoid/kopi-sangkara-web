import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kopi Sangkara — Specialty Coffee & Warm Artisan Space",
  description:
    "Nikmati seduhan kopi pilihan dan ketenangan ruang di Kopi Sangkara. Kafe artisanal dengan suasana Nordic Minimalist di Jawa Tengah.",
  keywords: ["Kopi Sangkara", "Cafe", "Specialty Coffee", "Manual Brew", "Tempat Nongkrong"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable}`}>
      <body className="bg-canvas text-primary selection:bg-accent selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
