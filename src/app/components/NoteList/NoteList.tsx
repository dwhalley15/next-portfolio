import Link from "next/link";
import "./NoteList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface NoteListProps {
    title: string | null;
    subtitle: string | null;
    items: NoteItemProps[];
};

export interface NoteItemProps {
    title: string | null;
    year: number | string;
    detail: string | null;
    path: string | null;
    time: string | null;
}

export default function NoteList({ title, subtitle, items }: NoteListProps) {
    return (
        <section className="selected-notes">
            <div className="selected-notes-header">
                <div>
                    <div className="selected-notes-kicker">// {subtitle}</div>
                    <h2 className="selected-notes-title">{title}</h2>
                </div>
                <Link href="/notes" className="selected-notes-all" aria-label="View all notes">
                    view all <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </Link>
            </div>
            <div className="selected-notes-list">
                {items?.map((item: NoteItemProps, i: number) => (
                    <Link key={i} href={item.path || "#"} className="selected-notes-item" aria-label={`View project ${item.title}`}>
                        <div className="selected-notes-index">0{i + 1}</div>
                        <div className="selected-notes-main">
                            <h3 className="selected-notes-name">{item.title}</h3>
                            <span className="selected-notes-date">{item.year}</span>
                            <span className="selected-notes-time">{item.time} min read</span>
                        </div>

                        <p className="selected-notes-description">{item.detail}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}