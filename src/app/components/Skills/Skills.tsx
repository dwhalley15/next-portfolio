import "./Skills.css";

export interface SkillsProps {
  title: string | null;
  items:
    | {
        title: string | null;
        skills: string[] | null;
      }[]
    | null;
}

export default function Skills({ title, items }: SkillsProps) {
  return (
    <section className="skills">
      <h2 className="skills-title">
        {"// "}
        {title}
      </h2>

      <div className="skills-grid">
        {items?.map((group, i) => (
          <div key={i} className="skills-group">
            <div className="skills-group-title">
              {group.title?.toLowerCase()}/
            </div>

            <div className="skills-tags">
              {group.skills?.map((s, j) => (
                <span key={j} className="skills-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
