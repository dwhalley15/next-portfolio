import  Navbar, {NavbarItem}  from "./components/Navbar/Navbar"; 
import Header, {HeaderItem, SocialLinkItem} from "./components/Header/Header";
import Services, { ServicesItem } from "./components/Services/Services";
import Skills, { SkillsItem } from "./components/Skills/Skills";
import Education, { EducationItem }  from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { getNavLinks, getHeaderInfo, getSocialLinks, getServicesInfo, getSkillsInfo, getEducationInfo } from "./services/dbServices/dbService";


export default async function Home() {

  const navLinks = await getNavLinks();

  const headerInfo = await getHeaderInfo();

  const socialLinks = await getSocialLinks();

  const servicesInfo = await getServicesInfo();

  const skillsInto = await getSkillsInfo();

  const educationInfo = await getEducationInfo();

  return (
   <>
    <Navbar navLinks={navLinks as NavbarItem[]} />
    <main>
      <Header headerInfo={ headerInfo as HeaderItem[]} socialLinks={socialLinks as SocialLinkItem[]} />
      <Services servicesInfo={ servicesInfo as ServicesItem[] }/>
      <Skills skillsInfo={ skillsInto as SkillsItem[] }/>
      <Education educationInfo={ educationInfo as EducationItem[] }/>
      <Contact />
    </main>
    <Footer socialLinks={ socialLinks as SocialLinkItem[]} navLinks={navLinks as NavbarItem[]} />
   </>
  );
}
