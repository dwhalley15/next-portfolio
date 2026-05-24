import * as components from "./services/importService/importService";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  getProjectData,
  getHomePageInfo,
  getSkillsInfo,
} from "./services/dbServices/dbService";

export default async function Home() {
  const homePageInfo = await getHomePageInfo();
  const { projects } = await getProjectData();
  const typedProjects = projects as components.ProjectProps[];

  const sortedProjects = typedProjects.sort(
    (a: components.ProjectProps, b: components.ProjectProps) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const getFirstThreeProjects = sortedProjects.slice(0, 3);

  const skillsInfo = await getSkillsInfo();

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
      <components.Header
        homePageInfo={homePageInfo as components.HomePageInfoItem[]}
      />
      <components.SelectedWork projects={getFirstThreeProjects as components.SelectedWorkProps['projects']} />
      <components.StackList stackItems={skillsInfo as components.StackListProps['stackItems']} />
      <components.Cta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
