import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heïdi Al Ihmid Jeremia | Frontend Developer",
  description: "Portfolio & technical profile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
