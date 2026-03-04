import * as components from "../services/importService/importService";
import {
  getAllData,
  getPageDescriptions,
  getProjectData,
} from "../services/dbServices/dbService";
import NotFound from "../not-found";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;

  const pageDescriptions = await getPageDescriptions();

  const description = pageDescriptions.find(
    (page: any) => page.name === name
  )?.description;

  const capitalizedParamName = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    title: `Ortheyus | Software Developer | ${capitalizedParamName}`,
    description,
    alternates: {
      canonical: `https://portfolio.ortheyus.uk/${name}`,
    },
    openGraph: {
      type: "website",
      siteName: `Ortheyus | Software Developer | ${capitalizedParamName}`,
      locale: "en_UK",
      url: `https://portfolio.ortheyus.uk/${name}`,
      title: `Ortheyus | Software Developer | ${capitalizedParamName}`,
      description,
      images: [
        {
          url: "https://frw6rziicw61rtm1.public.blob.vercel-storage.com/portfolio/light-bulb.png",
          width: 800,
          height: 600,
          alt: `Ortheyus | Software Developer | ${capitalizedParamName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Ortheyus | Software Developer | ${capitalizedParamName}`,
      description,
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

  const {
    navLinks,
    headerInfo,
    socialLinks,
    servicesInfo,
    skillsInfo,
    educationInfo,
    contactInfo,
  } = await getAllData();

  const pageDescriptions: any = await getPageDescriptions();

  let description = pageDescriptions.find(
    (page: any) => page.name === name
  )?.description;

  const { projects } = await getProjectData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ortheyus",
    url: `https://portfolio.ortheyus.uk/${name}`,
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
    description: description,
  };

  let componentToRender: JSX.Element | null = null;

  switch (name) {
    case "home":
      componentToRender = (
        <components.Header
          headerInfo={headerInfo as components.HeaderItem[]}
          socialLinks={socialLinks as components.SocialLinkItem[]}
        />
      );
      break;
    case "services":
      componentToRender = (
        <components.Services
          servicesInfo={servicesInfo as components.ServicesItem[]}
          servicesDescription={description}
        />
      );
      break;
    case "skills":
      componentToRender = (
        <components.Skills
          skillsInfo={skillsInfo as components.SkillsItem[]}
          skillsDescription={description}
        />
      );
      break;
    case "education":
      componentToRender = (
        <components.Education
          educationInfo={educationInfo as components.EducationItem[]}
          educationDescription={description}
        />
      );
      break;
    case "contact":
      componentToRender = (
        <components.Contact
          contactInfo={contactInfo as components.ContactItem[]}
          contactDescription={description}
        />
      );
      break;
    case "about":
      componentToRender = <components.About />;
      break;
    case "projects":
      componentToRender = <components.Projects />;
      break;
    default:
      componentToRender = <NotFound />;
  }

  return (
    <>
      <components.Navbar
        navLinks={navLinks as components.NavbarItem[]}
        projects={projects as components.ProjectProps[]}
      />
      <main>{componentToRender}</main>
      <components.Footer
        socialLinks={socialLinks as components.SocialLinkItem[]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
