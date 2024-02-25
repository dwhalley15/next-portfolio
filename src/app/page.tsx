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
  } = await getAllData();

  return (
   <>
    <components.Navbar navLinks={navLinks as components.NavbarItem[]} />
    <main>
      <components.Header headerInfo={ headerInfo as components.HeaderItem[]} socialLinks={socialLinks as components.SocialLinkItem[]} />
      <components.Services servicesInfo={ servicesInfo as components.ServicesItem[] }/>
      <components.Skills skillsInfo={ skillsInfo as components.SkillsItem[] }/>
      <components.Education educationInfo={ educationInfo as components.EducationItem[] }/>
      <components.Contact />
    </main>
    <components.Footer socialLinks={ socialLinks as components.SocialLinkItem[]} navLinks={navLinks as components.NavbarItem[]} />
   </>
  );
}
