import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { getLayoutInfo } from "./services/dbServices/dbService";
import { renderComponent } from "./services/componentServices/componentRenderer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { PageData } from "./interfaces/interfaces";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const page = (await getLayoutInfo()) as PageData | null;

  return {
    title: page?.meta_title || "",
    description: page?.meta_description || "",
    metadataBase: new URL("https://portfolio.ortheyus.uk/"),
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
      siteName: page?.meta_title || "",
      locale: "en_UK",
      url: "https://portfolio.ortheyus.uk/",
      title: page?.meta_title || "",
      description: page?.meta_description || "",
      images: [
        {
          url: "https://frw6rziicw61rtm1.public.blob.vercel-storage.com/portfolio/light-bulb.png",
          width: 800,
          height: 600,
          alt: page?.meta_title || "",
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
      title: page?.meta_title || "",
      description: page?.meta_description || "",
      images: [
        "https://frw6rziicw61rtm1.public.blob.vercel-storage.com/portfolio/light-bulb.png",
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const page = (await getLayoutInfo()) as PageData | null;

  return (
    <html lang="en" className={`${jetbrainsMono.variable}`}>
      <body>
        {page &&
          renderComponent(
            page.components.find((c) => c.component_type === "navigation_info"),
          )}
        <main>{children}</main>
        {page &&
          renderComponent(
            page.components.find((c) => c.component_type === "footer_info"),
          )}
      </body>
    </html>
  );
}
