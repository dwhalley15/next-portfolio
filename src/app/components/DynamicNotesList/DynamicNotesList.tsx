import "./DynamicNotesList.css";
import Link from "next/link";

export interface DynamicNotesListProps {
  noteItems: NoteItemProps[];
}

export interface NoteItemProps {
  date: string | null;
  time: number | null;
  title: string | null;
  description: string | null;
  url: string | null;
}

export default function DynamicNotesList({ noteItems }: DynamicNotesListProps) {
  return (
    <section className="dynamic-notes-list">
      {noteItems.map((note, index) => (
        <Link
          key={note.url ?? index}
          className="dynamic-notes-list__item"
          href={note.url ?? "#"}
          aria-label={note.title ?? "Note"}
        >
          <div className="dynamic-notes-list__link">
            <div className="dynamic-notes-list__meta">
              {note.date && <time>{note.date}</time>}

              {note.date && note.time != null && (
                <span className="dynamic-notes-list__separator">·</span>
              )}

              {note.time != null && <span>{note.time} min read</span>}
            </div>

            {note.title && (
              <h2 className="dynamic-notes-list__title">{note.title}</h2>
            )}

            {note.description && (
              <p className="dynamic-notes-list__description">
                {note.description}
              </p>
            )}

            <div className="dynamic-notes-list__read">Read →</div>
          </div>
        </Link>
      ))}
    </section>
  );
}
