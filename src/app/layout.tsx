import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const baskerville = Libre_Baskerville({ 
  weight: ['400', '700'],
  subsets: ["latin"], 
  variable: "--font-baskerville" 
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds | Clinical Psychologist",
  description: "Compassionate therapy for anxiety, trauma, and relationships in Minneapolis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${baskerville.variable}`}>
        {children}
      </body>
    </html>
  );
}