import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://onepercentbetter.dev"),
  title: "1% Better",
  description:
    "Senior data engineer building useful products in public. Hiring-friendly proof of work, small product loops, and visible execution.",
  icons: {
    icon: [
      { url: "/icon", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/icon",
    apple: "/apple-icon",
  },
  openGraph: {
    title: "1% Better",
    description:
      "Senior data engineer building useful products in public. Hiring-friendly proof of work, small product loops, and visible execution.",
    url: "https://onepercentbetter.dev",
    siteName: "1% Better",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "1% Better — Small apps. Fast loops.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1% Better",
    description:
      "Senior data engineer building useful products in public. Hiring-friendly proof of work, small product loops, and visible execution.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
