import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ortheyus | Software Developer | Web Enthusiast",
  description: "Explore the portfolio of Ortheyus, a software developer passionate about creating innovative solutions. Discover projects, skills, and expertise in web development and programming.",
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
