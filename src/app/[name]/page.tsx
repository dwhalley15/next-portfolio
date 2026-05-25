import {
  getPage,
} from "../services/dbServices/dbService";
import type { Metadata } from "next";
import { renderComponent } from "../services/componentServices/componentRenderer";
import type { PageData } from "../interfaces/interfaces";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;

  const page = (await getPage(name)) as PageData | null;

  return {
    title: page?.meta_title || "",
    description: page?.meta_description || "",
    alternates: {
      canonical: page?.canonical_url
        ? `https://portfolio.ortheyus.uk/${page.canonical_url}`
        : `https://portfolio.ortheyus.uk/${name}`,
    },
    openGraph: {
      type: "website",
      siteName: page?.meta_title || "",
      locale: "en_UK",
      url: `https://portfolio.ortheyus.uk/${page?.path || name}`,
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

export default async function DynamicPage(props: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await props.params;

  const page = (await getPage(name)) as PageData | null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ortheyus",
    url: `https://portfolio.ortheyus.uk/${page?.path || name}`,
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
