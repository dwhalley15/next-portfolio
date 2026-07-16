import { getPage } from "../services/dbServices/dbService";
import type { Metadata } from "next";
import { renderComponent } from "../services/componentServices/componentRenderer";
import type { PageData } from "../interfaces/interfaces";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const path = slug.join("/");

  const page = (await getPage(path)) as PageData | null;

  if (!page) {
    notFound();
  }

  return {
    title: page?.meta_title || "",
    description: page?.meta_description || "",
    alternates: {
      canonical: page?.canonical_url
        ? `https://portfolio.ortheyus.uk/${page.canonical_url}`
        : `https://portfolio.ortheyus.uk/${path}`,
    },
    openGraph: {
      type: "website",
      siteName: page?.meta_title || "",
      locale: "en_UK",
      url: `https://portfolio.ortheyus.uk/${page?.path || path}`,
      title: page?.meta_title || "",
      description: page?.meta_description || "",
      images: [
        {
          url: page?.meta_image_url || "https://frw6rziicw61rtm1.public.blob.vercel-storage.com/portfolio/light-bulb.png",
          width: 800,
          height: 600,
          alt: page?.meta_title || "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page?.meta_title || "",
      description: page?.meta_description || "",
      images: [
        page?.meta_image_url || "https://frw6rziicw61rtm1.public.blob.vercel-storage.com/portfolio/light-bulb.png",
      ],
    },
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const path = slug.join("/");

  const page = (await getPage(path)) as PageData | null;

  if (!page) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ortheyus",
    url: `https://portfolio.ortheyus.uk/${page?.path || path}`,
    sameAs: [
      "https://www.linkedin.com/in/davidwhalleyprofile",
      "https://github.com/dwhalley15",
      "https://www.instagram.com/ortheyus/",
      "https://www.youtube.com/channel/UCWikZ6mdoqSzCTOvy8MjsLQ",
    ],
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "the human tech agency",
    },
    image: {
      "@type": "ImageObject",
      url: "https://frw6rziicw61rtm1.public.blob.vercel-storage.com/portfolio/light-bulb.png",
      width: 800,
      height: 600,
    },
    description: page?.meta_description || "",
  };

  return (
    <div className="container">
      {page?.components.map(renderComponent)}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
