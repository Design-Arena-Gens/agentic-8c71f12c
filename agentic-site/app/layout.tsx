import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-8c71f12c.vercel.app"),
  title: "Tehniyat Usman | WordPress Website & Brand Designer",
  description:
    "WordPress website designer and brand stylist Tehniyat Usman helps creative entrepreneurs attract high-value clients with strategy-driven visuals and conversion-focused sites.",
  openGraph: {
    title: "Tehniyat Usman | WordPress Website & Brand Designer",
    description:
      "Signature WordPress websites, brand identities, and marketing content strategies crafted to help creative professionals book aligned, high-value clients.",
    url: "https://agentic-8c71f12c.vercel.app",
    siteName: "Tehniyat Usman Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Tehniyat Usman WordPress & Brand Design Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tehniyat Usman | WordPress Website & Brand Designer",
    description:
      "Strategic WordPress design, brand identities, and content systems to help creative entrepreneurs show up with confidence.",
    creator: "@tehniyatusman",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
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
        {children}
      </body>
    </html>
  );
}
