import "./Header.css";
import Link from "next/link";

export interface HomePageInfoItem {
  id: number;
  subtitle: string | null;
  title_first: string | null;
  title_second: string | null;
  title_text: string | null;
  first_btn_text: string | null;
  first_btn_url: string | null;
  second_btn_text: string | null;
  second_btn_url: string | null;
  whoami: string | null;
  location: string | null;
  education: string | null;
  currently: string | null;
  available: string | null;
}

export interface HeaderProps {
  homePageInfo: HomePageInfoItem[];
}

export default function Header({ homePageInfo }: HeaderProps) {
  const firstItem = homePageInfo[0];

  return (
    <header className="hero">
      <div className="hero-grid">
        <div className="hero-main">
          <div className="hero-status">
            <span className="hero-dot">●</span>
            <span>{firstItem?.subtitle}</span>
          </div>

          <h1 className="hero-title">
            {firstItem?.title_first} {" "}
            <span className="hero-accent glow">{firstItem?.title_second}</span>.
          </h1>

          <p className="hero-text">{firstItem?.title_text}</p>

          <div className="hero-actions">
            <Link
              href={firstItem?.first_btn_url || "#"}
              className="hero-btn-primary"
            >
              {firstItem?.first_btn_text || "$ ls ./work"}
            </Link>

            <Link
              href={firstItem?.second_btn_url || "#"}
              className="hero-btn-secondary"
            >
              {firstItem?.second_btn_text || "$ mail david"}
            </Link>
          </div>
        </div>

        {/* Terminal card */}
        <div className="hero-side">
          <div className="hero-terminal">
            <div className="hero-terminal-header">
              <span>~/whoami.sh</span>
              <span className="hero-terminal-dots">
                <span />
                <span />
                <span />
              </span>
            </div>

            <pre className="hero-terminal-body">
              {`> whoami
${firstItem?.whoami}

> location
${firstItem?.location}

> education
${firstItem?.education}

> currently
${firstItem?.currently}

> available
${firstItem?.available}`}
              <span className="cursor-blink" />
            </pre>
          </div>
        </div>
      </div>
    </header>
  );
}
