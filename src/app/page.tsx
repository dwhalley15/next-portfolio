import {
  getHomePageInfo,
} from "./services/dbServices/dbService";
import { renderComponent } from "./services/componentServices/componentRenderer";
import type { PageData } from "./interfaces/interfaces";

export default async function Home() {
  const page = (await getHomePageInfo()) as PageData | null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ortheyus",
    url: "https://portfolio.ortheyus.uk/",
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
    description:
      "Discover Ortheyus' portfolio: a passionate software developer showcasing innovative web development projects, skills, and programming expertise.",
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
