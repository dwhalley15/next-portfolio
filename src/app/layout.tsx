import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import openGraphImage  from "./assets/images/main-image.jpg";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Ortheyus | Software Developer | Web Enthusiast",
  description: "Explore the portfolio of Ortheyus, a software developer passionate about creating innovative solutions. Discover projects, skills, and expertise in web development and programming.",
  keywords: "ortheyus, software developer, web developer, web enthusiast, portfolio, projects, skills, expertise, web development, programming, software development, web design, web technologies, web applications, web services, web solutions, web projects, web tools, web frameworks, web libraries, web languages, web standards, web practices, web techniques, web methodologies, web patterns, web principles, web concepts, web ideas, web trends, web insights, web resources, web references, web tutorials, web guides, web tips, web tricks, web hacks, web cheats, web examples, web demos, web showcases, web experiments, web explorations, web adventures, web experiences, web journeys, web stories, web narratives, web legends, web myths, web tales, web fables, web sagas, web epics, web chronicles, web histories, web biographies, web profiles, web resumes, web CVs, web applications, web services, web solutions, web projects, web tools, web frameworks, web libraries, web languages, web standards, web practices, web techniques, web methodologies, web patterns, web principles, web concepts, web ideas, web trends, web insights, web resources, web references, web tutorials, web guides, web tips, web tricks, web hacks, web cheats, web examples, web demos, web showcases, web experiments, web explorations, web adventures, web experiences, web journeys, web stories, web narratives, web legends, web myths, web tales, web fables, web sagas, web epics, web chronicles, web histories, web biographies, web profiles, web resumes, web CVs, web applications, web services, web solutions, web projects, web tools, web frameworks, web libraries, web languages, web standards, web practices, web techniques, web methodologies, web patterns, web principles, web concepts, web ideas, web trends, web insights, web resources, web references, web tutorials, web guides, web tips, web tricks, web hacks, web cheats, web examples, web demos, web showcases, web experiments, web explorations, web adventures, web experiences, web journeys, web stories, web narratives, web legends, web myths, web tales, web fables, web sagas, web epics, web chronicles, web histories, web biographies, web profiles, web resumes, web CVs, web applications, web services, web solutions, web projects, web tools, web frameworks, web libraries, web languages, web standards, web practices, web techniques, web methodologies, web patterns, web principles, web concepts, web ideas, web trends, web insights, web resources, web references, web tutorials, web guides, web tips, web tricks, web hacks, web cheats, web examples, web demos, web showcases, web experiments, web explorations, web adventures, web experiences, web journeys, web stories, web narratives, web legends, web",
  openGraph: {
    type: "website",
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
