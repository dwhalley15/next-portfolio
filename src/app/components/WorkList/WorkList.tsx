import Link from "next/link";
import "./WorkList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface WorkListProps {
  title: string | null;
  subtitle: string | null;
  workItems: WorkItemProps[];
};

export interface WorkItemProps {
  title: string | null;
  year: number | string;
  detail: string | null;
  path: string | null;
  technologies: string[];
}

export default function WorkList({ title, subtitle, workItems }: WorkListProps) {
  return (
    <section className="selected-work">
      <div className="selected-work-header">
        <div>
          <div className="selected-work-kicker">// {subtitle}</div>
          <h2 className="selected-work-title">{title}</h2>
        </div>

        <Link href="/work" className="selected-work-all" aria-label="View all work">
          view all <FontAwesomeIcon icon={faArrowRight} size="xs" />
        </Link>
      </div>

      <div className="selected-work-list">
        {workItems?.map((item: WorkItemProps, i: number) => (
          <Link key={i} href={item.path || "#"} className="selected-work-item" aria-label={`View project ${item.title}`}>
            <div className="selected-work-index">0{i + 1}</div>

            <div className="selected-work-main">
              <h3 className="selected-work-name">{item.title}</h3>
              <span className="selected-work-date">{item.year}</span>
            </div>

            <p className="selected-work-description">{item.detail}</p>

            <div className="selected-work-tags">
              {item.technologies.map((s: string) => (
                <span key={s} className="selected-work-tag">
                  {s}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
