import  Navbar, {NavbarItem}  from "./components/Navbar/Navbar"; 
import Header, {HeaderItem, SocialLinkItem} from "./components/Header/Header";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { getNavLinks, getHeaderInfo, getSocialLinks } from "./services/dbService";

export default async function Home() {

  const navLinks = await getNavLinks();

  const headerInfo = await getHeaderInfo();
  console.log(headerInfo);
  const socialLinks = await getSocialLinks();

  return (
   <>
    <Navbar navLinks={navLinks as NavbarItem[]} />
    <main>
      <Header headerInfo={ headerInfo as HeaderItem[]} socialLinks={socialLinks as SocialLinkItem[]} />
    </main>
   </>
  );
}
