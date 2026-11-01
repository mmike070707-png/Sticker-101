import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sticker-101 | AI Sticker Studio",
  description: "Create custom AI stickers, save your designs, download PNGs, and request printed sticker orders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
