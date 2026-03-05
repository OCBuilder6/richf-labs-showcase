import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RichF Labs — One App a Day, Every Day",
  description:
    "A showcase of apps built daily by RichF Labs. AI, Web3, DeFi, and more — shipped every single day.",
  openGraph: {
    title: "RichF Labs — One App a Day, Every Day",
    description: "Daily-shipped apps: AI, Web3, DeFi & more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#f9fafb", color: "#111827" }}>
        {children}
      </body>
    </html>
  );
}
