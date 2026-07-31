import "./Footer.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface SocialLinkItem {
  social_label: string;
  social_url: string;
}

export interface FooterProps {
  title: string | null;
  text: string | null;
  email: string | null;
  signal: string | null;
  copyright: string | null;
  socialLinks: SocialLinkItem[];
}

export default function Footer({ title, text, email, signal, copyright, socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString();

  return (
    <footer className="footer">
      <div className="footer-main container">
        <div className="footer-brand">
          <h2 className="footer-logo">
            <span className="footer-logo-terminal">▮</span>
            <Link href="/" aria-label={title ?? "Home"}>{title}</Link>
          </h2>

          <p className="footer-description">
            {text}
          </p>
        </div>

        <div>
          <h3 className="footer-heading">// elsewhere</h3>

          <ul className="footer-list">
            {socialLinks.map((link: SocialLinkItem, index: number) => (
              <li key={index}>
                <Link href={link.social_url} className="footer-link" target="_blank" rel="noopener noreferrer" aria-label={link.social_label}>
                  {link.social_label} <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">// signal</h3>

          <ul className="footer-list">
            <li>
              <Link
                href={`mailto:${email}`}
                className="footer-link"
                aria-label={`Email ${email}`}
              >
                {email}
              </Link>
            </li>

            <li className="footer-muted">{signal}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content container">
          <span>© {currentYear} {copyright}</span>

          <span>$ uptime: {currentDate}</span>
        </div>
      </div>
    </footer>
  );
}
