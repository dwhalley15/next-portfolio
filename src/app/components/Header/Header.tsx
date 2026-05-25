import "./Header.css";
import Link from "next/link";

export interface HeaderProps {
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


export default function Header({ subtitle, title_first, title_second, title_text, first_btn_text, first_btn_url, second_btn_text, second_btn_url, whoami, location, education, currently, available }: HeaderProps) {
  return (
    <header className="hero">
      <div className="hero-grid">
        <div className="hero-main">
          <div className="hero-status">
            <span className="hero-dot">●</span>
            <span>{subtitle}</span>
          </div>

          <h1 className="hero-title">
            {title_first} {" "}
            <span className="hero-accent glow">{title_second}</span>.
          </h1>

          <p className="hero-text">{title_text}</p>

          <div className="hero-actions">
            <Link
              href={first_btn_url || "#"}
              className="hero-btn-primary"
            >
              {first_btn_text || "$ ls ./work"}
            </Link>

            <Link
              href={second_btn_url || "#"}
              className="hero-btn-secondary"
            >
              {second_btn_text || "$ mail david"}
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
${whoami}

> location
${location}

> education
${education}

> currently
${currently}

> available
${available}`}
              <span className="cursor-blink" />
            </pre>
          </div>
        </div>
      </div>
    </header>
  );
}
