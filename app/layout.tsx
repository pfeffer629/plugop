import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "PlugOp | Cost-Effective EV Charging Programs",
  description:
    "Implement an EV charging program for your apartment complex for a fraction of the cost without compromising user experience. Reduce installation costs by 40% with PlugOp.",
  keywords: [
    "EV charging",
    "electric vehicle",
    "apartment charging",
    "energy management",
    "power sharing",
  ],
};

export const viewport: Viewport = {
  themeColor: "#5260C4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
