import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";
import FooterBar from "@/components/FooterBar";
import QueryProvider from "@/components/provider/query.provider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maulakalika Hydro Power pvt. ltd.",
  description: `Maula Kalika Hydropower Company Limited is a Nepalese energy company focused on developing sustainable hydropower projects. Its flagship Kalika Kaligandaki Hydropower Project generates 38.16 MW of clean energy while maintaining ecological flows in the river. The company combines modern infrastructure with community development, promoting local economic growth. Committed to sustainability and reliable electricity generation, Maula Kalika plays a key role in Nepal’s renewable energy sector.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full flex flex-col items-center justify-start bg-white">
          <Toaster position="top-right" reverseOrder={false} />
          <Navbar />
          <QueryProvider>{children}</QueryProvider>
          <FooterBar />
        </div>
      </body>
    </html>
  );
}
