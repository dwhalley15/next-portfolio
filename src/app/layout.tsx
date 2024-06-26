import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import openGraphImage from "../../public/main-image.jpg";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://next-portfolio-delta-snowy.vercel.app/'),
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
    canonical: "https://next-portfolio-delta-snowy.vercel.app/",
  },
  openGraph: {
    type: "website",
    siteName: "Ortheyus | Software Developer | Web Enthusiast",
    locale: "en_UK",
    url: "https://next-portfolio-delta-snowy.vercel.app/",
    title: "Ortheyus | Software Developer | Web Enthusiast",
    description: "Discover Ortheyus' portfolio: a passionate software developer showcasing innovative web development projects, skills, and programming expertise.",
    images: [
      {
        url: openGraphImage.src,
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
    images: [openGraphImage.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
