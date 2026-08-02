import "./NoteHeader.css";
import Link from "next/link";

export interface NoteHeaderProps {
  date: string | null;
  time: string | null;
  title: string | null;
  text: string | null;
}

export default function NoteHeader({
  date,
  time,
  title,
  text,
}: NoteHeaderProps) {
  return (
    <header className="noteheader">
      <Link
        href="/notes"
        className="noteheader-back"
        aria-label="Back to Notes Page"
      >
        {"← ~/notes"}
      </Link>
      <span className="noteheader-date">
        {date}
        {" · "}
        {time} {"min"}
      </span>
      <h1 className="noteheader-title">{title}</h1>
      <p className="noteheader-text">
        <span>{"tl:dr"}</span>
        {" — "}
        {text}
      </p>
    </header>
  );
}
