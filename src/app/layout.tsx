import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khushi API Client — Desktop API Testing App",
  description:
    "Khushi API Client is a fast, lightweight desktop API testing app for developers. Send requests, inspect responses, and test APIs with a clean, modern interface. Available for Linux, with Windows and macOS coming soon.",
  icons: {
    icon: "/khushi_web/icon.png",
    shortcut: "/khushi_web/icon.png",
    apple: "/khushi_web/icon.png",
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
        className={`
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
