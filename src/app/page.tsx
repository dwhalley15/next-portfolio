import * as components from "./services/importService/importService"; 
import '@fortawesome/fontawesome-svg-core/styles.css'
import { getNavLinks, getHeaderInfo, getSocialLinks, getProjectData } from "./services/dbServices/dbService";
import mainImage from "../../public/light-bulb.png";


export default async function Home() {


  const navLinks = await getNavLinks();
  const headerInfo = await getHeaderInfo();
  const socialLinks = await getSocialLinks();
  const { projects } = await getProjectData();
 
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ortheyus",
    "url": "https://ortheyus-portfolio.vercel.app/",
    "sameAs": [
      "https://www.linkedin.com/in/davidwhalleyprofile",
      "https://github.com/dwhalley15",
      "https://www.instagram.com/ortheyus/",
      "https://www.youtube.com/channel/UCWikZ6mdoqSzCTOvy8MjsLQ"
    ],
    "jobTitle": "Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "the human tech agency"
    },
    "image": {
      "@type": "ImageObject",
      "url": mainImage.src,
      "width": 800,
      "height": 600
    },
    "description": "Discover Ortheyus' portfolio: a passionate software developer showcasing innovative web development projects, skills, and programming expertise."
  };

  return (
   <>
    <components.Navbar navLinks={navLinks as components.NavbarItem[]} projects={projects as components.ProjectProps[]} />
    <main>
      <components.Header headerInfo={ headerInfo as components.HeaderItem[]} socialLinks={socialLinks as components.SocialLinkItem[]} />
    </main>
    <components.Footer socialLinks={ socialLinks as components.SocialLinkItem[]}/>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
   </>
  );
}