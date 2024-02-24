import "./Footer.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFontAwesomeIcon from "@/app/services/iconService/iconService";

export interface SocialLinkItem{
    id: number;
    social_name: string;
    social_url: string;
  }

  export interface NavbarItem {
    id: number;
    link_name: string;
  }

export interface FooterProps {
    socialLinks: SocialLinkItem[];
    navLinks: NavbarItem[];

}

const Footer: React.FC<FooterProps> = ({ socialLinks,  navLinks}) => {

    const currentYear = new Date().getFullYear();

  return(
    <>
      <footer className="footer">
        <div className="social">
        {socialLinks.map((link: SocialLinkItem) => (
              <Link key={link.id} href={link.social_url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={getFontAwesomeIcon(link.social_name)} size="1x"/>
              </Link>
            ))}
        </div>
        <ul>
        {navLinks.map((link: NavbarItem) => (
              <li key={link.id}>
                <Link href={`#${link.link_name}`}>{link.link_name.charAt(0).toUpperCase() + link.link_name.slice(1)}</Link>
              </li>
            ))}
        </ul>
        <p className="copyright">
            {`Copyright ${currentYear} \u00A9 Ortheyus | All Rights Reserved`}
        </p>
      </footer>
    </>
  );
};

export default Footer;