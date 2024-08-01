import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainImage from "../../../../public/main-image.jpg";
import getFontAwesomeIcon from "@/app/services/iconService/iconService";

export interface HeaderItem {
  id: number;
  image_alt: string;
  name: string;
  description: string;
  typing_text: string;
  intro_text: string;
  button_text: string;
}

export interface SocialLinkItem {
  id: number;
  social_name: string;
  social_url: string;
}

export interface HeaderProps {
  headerInfo: HeaderItem[];
  socialLinks: SocialLinkItem[];
}

export default function Header({ headerInfo, socialLinks }: HeaderProps) {

  const firstItem = headerInfo[0];

  return (
    <>
      <section className="header" id="home">
        <div className="image-container">
          <Image className="main-image" src={mainImage} alt={firstItem.image_alt} width={400} height={400} />
        </div>
        <div className="text-container">
          <h1>{firstItem.intro_text} <span>{firstItem.name.charAt(0).toUpperCase() + firstItem.name.slice(1)}</span></h1>
          <h3 className="typing-text">{firstItem.typing_text} <span></span></h3>
          <p>{firstItem.description}</p>
          <div className="icons">
            {socialLinks.map((link: SocialLinkItem) => (
              <Link key={link.id} href={link.social_url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={getFontAwesomeIcon(link.social_name)} size="1x" />
              </Link>
            ))}
          </div>
          <div className="btn-container">
            <Link href="/contact" className="btn">{firstItem.button_text}</Link>
            <Link className="btn" href="/projects">Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
};