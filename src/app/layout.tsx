import type { Metadata } from "next";
import { Inter, Poppins, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Distance MBA College",
    default: "Distance MBA College — Honest Advice for Working Professionals",
  },
  description:
    "Find the distance MBA that fits your life. Every UGC-DEB recognised programme in one place. Compare fees, duration, and accreditation honestly. Then speak to a counsellor whose only job is the right fit.",
  keywords: [
    "distance MBA",
    "online MBA India",
    "UGC-DEB recognised MBA",
    "distance education",
    "working professionals MBA",
  ],
  openGraph: {
    siteName: "Distance MBA College",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${lora.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
