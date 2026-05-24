import "./Footer.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface SocialLinkItem {
  id: number;
  social_name: string;
  social_url: string;
}

export interface FooterProps {
  socialLinks: SocialLinkItem[];
}

export default function Footer({ socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-terminal">▮</span>
            <Link href="/">david@ortheyus</Link>
          </div>

          <p className="footer-description">
            Software engineer building clean, maintainable web applications.
            First Class Honours in Software Engineering.
          </p>
        </div>

        <div>
          <div className="footer-heading">// elsewhere</div>

          <ul className="footer-list">
            {socialLinks.map((link: SocialLinkItem) => (
              <li key={link.id}>
                <Link href={link.social_url} className="footer-link">
                  {link.social_name} <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-heading">// signal</div>

          <ul className="footer-list">
            <li>
              <a
                href="mailto:david.whalley.dev@proton.me"
                className="footer-link"
              >
                david.whalley.dev@proton.me
              </a>
            </li>

            <li className="footer-muted">UK · open to work</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content container">
          <span>© {currentYear} David / ortheyus — built from scratch</span>

          <span>$ uptime: {new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </footer>
  );
}
