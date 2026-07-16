import "./WorkHeader.css";
import Link from "next/link";

export interface WorkHeaderProps {
  subtitle: string | null;
  title: string | null;
  technologies: string[];
}

export default function WorkHeader({
  subtitle,
  title,
  technologies,
}: WorkHeaderProps) {
  return (
    <header className="workheader">
      <Link href="/work" className="workheader-back">
        {"← ~/work"}
      </Link>
      <span className="workheader-subtitle">{subtitle}</span>
      <h1 className="workheader-title">{title}</h1>
      <div className="workheader-technologies">
        {technologies.map((s) => (
          <span key={s} className="workheader-technology">
            {s}
          </span>
        ))}
      </div>
    </header>
  );
}
