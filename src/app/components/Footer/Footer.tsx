import "./Footer.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFontAwesomeIcon from "@/app/services/iconService/iconService";

export interface SocialLinkItem {
  id: number;
  social_name: string;
  social_url: string;
}

export interface FooterProps {
  socialLinks: SocialLinkItem[];
}

export default function Footer({
  socialLinks
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <Link
            href={"/"}
            className="header_logo"
            aria-label="Link to home page"
          >
            {"Ortheyus"}
          </Link>
          <div className="social">
            {socialLinks.map((link: SocialLinkItem) => (
              <Link
                key={link.id}
                href={link.social_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link to ${link.social_name}`}
              >
                <FontAwesomeIcon
                  icon={getFontAwesomeIcon(link.social_name)}
                  size="xs"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            {`\u00A9 ${currentYear} Ortheyus | All Rights Reserved`}
          </p>
        </div>
      </footer>
    </>
  );
}
