import "./Footer.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFontAwesomeIcon from "@/app/services/iconService/iconService";
import mainImage from '../../../../public/main-image.jpg';
import Image from 'next/image';
import { ProjectProps } from '../../services/importService/importService';

export interface SocialLinkItem {
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
  projects: ProjectProps[];
}

export default function Footer({ socialLinks, navLinks, projects }: FooterProps) {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">

        <div className="footer-nav">
          <div className="footer-image">
            <Image src={mainImage} alt="Image of a red light bulb with a black background" width={600} height={600} />
          </div>
          <div className="footer-lists">
            <ul>
              <li><h2>Site Map</h2></li>
              {navLinks.map((link: NavbarItem) => (
                <li key={link.id}>
                  <Link href={link.link_name === 'home' ? '/' : `/${link.link_name}`}>{link.link_name.charAt(0).toUpperCase() + link.link_name.slice(1)}</Link>
                </li>
              ))}
            </ul>
            <ul>
              <li><h2>Project Map</h2></li>
              {projects.map((project: ProjectProps, index) => (
                <li key={index}>
                  <Link href={`/projects/${project.url}`}>{project.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-social-copyright">
          <div className="social">
            {socialLinks.map((link: SocialLinkItem) => (
              <Link key={link.id} href={link.social_url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={getFontAwesomeIcon(link.social_name)} size="1x" />
              </Link>
            ))}
          </div>
          <p className="copyright">
            {`Copyright ${currentYear} \u00A9 Ortheyus | All Rights Reserved`}
          </p>
        </div>
      </footer>
    </>
  );
};