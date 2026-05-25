import "./Timeline.css";

export interface TimelineProps {
  title: string | null;
  items:
    | {
        year: number | null;
        title: string | null;
        detail: string | null;
      }[]
    | null;
}

export default function Timeline({ title, items }: TimelineProps) {
  return (
    <section className="timeline">
      <h2 className="timeline-title">
        {"// "}
        {title}
      </h2>

      <ol className="timeline-list">
        {items?.map((t, i) => (
          <li key={i} className="timeline-item">
            <span className="timeline-year">{t.year}</span>

            <span className="timeline-content">
              {t.title} - {t.detail}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
