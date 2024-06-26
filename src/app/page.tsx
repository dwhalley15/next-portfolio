import * as components from "./services/importService/importService"; 
import '@fortawesome/fontawesome-svg-core/styles.css'
import { getAllData } from "./services/dbServices/dbService";


export default async function Home() {


  const {
    navLinks,
    headerInfo,
    socialLinks,
    servicesInfo,
    skillsInfo,
    educationInfo,
    contactInfo,
  } = await getAllData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ortheyus",
    "url": "https://next-portfolio-delta-snowy.vercel.app/",
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
      "url": headerInfo[0].image,
      "width": 800,
      "height": 600
    },
    "description": "Discover Ortheyus' portfolio: a passionate software developer showcasing innovative web development projects, skills, and programming expertise."
  };

  return (
   <>
    <components.Navbar navLinks={navLinks as components.NavbarItem[]} />
    <main>
      <components.Header headerInfo={ headerInfo as components.HeaderItem[]} socialLinks={socialLinks as components.SocialLinkItem[]} />
      <components.Services servicesInfo={ servicesInfo as components.ServicesItem[] }/>
      <components.Skills skillsInfo={ skillsInfo as components.SkillsItem[] }/>
      <components.Education educationInfo={ educationInfo as components.EducationItem[] }/>
      <components.Contact contactInfo={ contactInfo as components.ContactItem[] }/>
    </main>
    <components.Footer socialLinks={ socialLinks as components.SocialLinkItem[]} navLinks={navLinks as components.NavbarItem[]} />
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
   </>
  );
}