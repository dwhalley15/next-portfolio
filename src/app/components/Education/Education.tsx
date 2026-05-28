import "./Education.css";

export interface EducationProps {
  title: string | null;
  items:
    | {
        qualification: string | null;
        grade: string | null;
        start_year: number | null;
        end_year: number | null;
        description: string | null;
      }[]
    | null;
}

export default function Education({ title, items }: EducationProps) {
  return (
    <section className="education">
      <h2 className="education-title">
        {"// "}
        {title}
      </h2>

      <div className="education-list">
        {items?.map((e, i) => (
          <div key={i} className="education-card">
            <h3 className="education-qualification">{e.qualification}</h3>
            <div className="education-grade">{e.grade}{" · "}{e.start_year} - {e.end_year}</div>
            <p className="education-description">{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
