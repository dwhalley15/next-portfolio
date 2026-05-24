import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { getNavLinks, getSocialLinks } from "./services/dbServices/dbService";
import Navigation from "./components/Navigation/Navigation";
import * as components from "./services/importService/importService";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.ortheyus.uk/"),
  title: "Ortheyus | Software Developer | Web Enthusiast",
  description:
    "Discover Ortheyus' portfolio: a passionate software developer showcasing innovative web development projects, skills, and programming expertise.",
  keywords:
    "ortheyus, software developer, web developer, web enthusiast, portfolio, skills, web development, programming, software development, web design, html, css, javascript, react, nextjs",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  authors: [{ name: "Ortheyus" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "Ortheyus",
  publisher: "Ortheyus",
  applicationName: "Ortheyus Portfolio",
  alternates: {
    canonical: "https://portfolio.ortheyus.uk/",
  },
  openGraph: {
    type: "website",
    siteName: "Ortheyus | Software Developer | Web Enthusiast",
    locale: "en_UK",
    url: "https://portfolio.ortheyus.uk/",
    title: "Ortheyus | Software Developer | Web Enthusiast",
    description:
      "Discover Ortheyus' portfolio: a passionate software developer showcasing innovative web development projects, skills, and programming expertise.",
    images: [
      {
        url: "https://frw6rziicw61rtm1.public.blob.vercel-storage.com/portfolio/light-bulb.png",
        width: 800,
        height: 600,
        alt: "Ortheyus | Software Developer | Web Enthusiast",
      },
    ],
  },
  robots: {
    follow: true,
    index: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ortheyus | Software Developer | Web Enthusiast",
    description:
      "Discover Ortheyus' portfolio: a passionate software developer showcasing innovative web development projects, skills, and programming expertise.",
    images: [
      "https://frw6rziicw61rtm1.public.blob.vercel-storage.com/portfolio/light-bulb.png",
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = await getNavLinks();
  const socialLinks = await getSocialLinks();

  return (
    <html lang="en" className={`${jetbrainsMono.variable}`}>
      <body>
        <components.Navbar navLinks={navLinks as components.NavbarItem[]} />
        <main>{children}</main>
        <components.Footer socialLinks={socialLinks as components.FooterProps['socialLinks']} />
      </body>
    </html>
  );
}
