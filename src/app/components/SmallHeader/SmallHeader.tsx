import "./SmallHeader.css";

export interface SmallHeaderProps {
  subtitle: string | null;
  title_first: string | null;
  title_second: string | null;
  title_text: string | null;
  title_text_muted: string | null;
}

export default function SmallHeader({
  subtitle,
  title_first,
  title_second,
  title_text,
  title_text_muted,
}: SmallHeaderProps) {
  return (
    <header className="smallheader">
      <span className="smallheader-subtitle">~/{subtitle}</span>
      <h1>
        {"$ "}{title_first} <span className="terminal">{title_second}</span>
      </h1>
      <p className="intro">{title_text}</p>
      <p className="muted">{title_text_muted}</p>
    </header>
  );
}
