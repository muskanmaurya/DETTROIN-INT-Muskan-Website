import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Barlow_Condensed, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VasantValley School",
  description:
    "VasantValley School is a premier educational institution dedicated to providing excellence in learning and development. We offer a comprehensive curriculum designed to nurture each student's potential and prepare them for future success.",
  icons: {
    icon: [
      { url: "/assets/logo.png", type: "image/jpeg" },
      { url: "/assets/favicon.png", sizes: "32x32" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${barlow.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
