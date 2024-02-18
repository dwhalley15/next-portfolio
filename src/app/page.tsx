import  Navbar, {NavbarItem}  from "./components/Navbar/Navbar"; 
import Header, {HeaderItem, SocialLinkItem} from "./components/Header/Header";
import Services, { ServicesItem } from "./components/Services/Services";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { getNavLinks, getHeaderInfo, getSocialLinks, getServicesInfo } from "./services/dbService";

export default async function Home() {

  const navLinks = await getNavLinks();

  const headerInfo = await getHeaderInfo();

  const socialLinks = await getSocialLinks();

  const servicesInfo = await getServicesInfo();

  return (
   <>
    <Navbar navLinks={navLinks as NavbarItem[]} />
    <main>
      <Header headerInfo={ headerInfo as HeaderItem[]} socialLinks={socialLinks as SocialLinkItem[]} />
      <Services servicesInfo={ servicesInfo as ServicesItem[] }/>
    </main>
   </>
  );
}
