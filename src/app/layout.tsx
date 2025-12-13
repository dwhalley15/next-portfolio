import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.ortheyus.uk/'),
  title: "Ortheyus | Software Developer | Web Enthusiast",
  description: "Discover Ortheyus' portfolio: a passionate software developer showcasing innovative web development projects, skills, and programming expertise.",
  keywords: "ortheyus, software developer, web developer, web enthusiast, portfolio, skills, web development, programming, software development, web design, html, css, javascript, react, nextjs",
  authors: [{name: "Ortheyus"}],
  generator: "Next.js",
  referrer: 'origin-when-cross-origin',
  creator: 'Ortheyus',
  publisher: 'Ortheyus',
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
    description: "Discover Ortheyus' portfolio: a passionate software developer showcasing innovative web development projects, skills, and programming expertise.",
    images: [
      {
        url: "https://frw6rziicw61rtm1.public.blob.vercel-storage.com/portfolio/light-bulb.png",
        width: 800,
        height: 600,
        alt: "Ortheyus | Software Developer | Web Enthusiast",
      },
    ]
  },
  robots: {
    follow: true,
    index: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ortheyus | Software Developer | Web Enthusiast',
    description: "Discover Ortheyus' portfolio: a passionate software developer showcasing innovative web development projects, skills, and programming expertise.",
    images: ["https://frw6rziicw61rtm1.public.blob.vercel-storage.com/portfolio/light-bulb.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
