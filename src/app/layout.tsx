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
  title: "Ortheyus | Software Developer | Web Enthusiast",
  description: "Explore the portfolio of Ortheyus, a software developer passionate about creating innovative solutions. Discover projects, skills, and expertise in web development and programming.",
  keywords: "ortheyus, software developer, web developer, web enthusiast, portfolio, skills, web development, programming, software development, web design, html, css, javascript, react, nextjs",
  openGraph: {
    type: "website",
    siteName: "Ortheyus | Software Developer | Web Enthusiast",
    locale: "en_UK",
    url: "https://next-portfolio-delta-snowy.vercel.app/",
    title: "Ortheyus | Software Developer | Web Enthusiast",
    description: "Explore the portfolio of Ortheyus, a software developer passionate about creating innovative solutions. Discover projects, skills, and expertise in web development and programming.",
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
    nocache: true,
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
    description: 'Explore the portfolio of Ortheyus, a software developer passionate about creating innovative solutions. Discover projects, skills, and expertise in web development and programming.',
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
