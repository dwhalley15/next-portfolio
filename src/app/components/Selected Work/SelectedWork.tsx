import { ProjectProps } from "../Project/Project";
import Link from "next/link";
import "./SelectedWork.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface SelectedWorkProps {
  projects: ProjectProps[];
};

export default function SelectedWork({ projects }: SelectedWorkProps) {
  return (
    <section className="selected-work">
      <div className="selected-work-header">
        <div>
          <div className="selected-work-kicker">// featured</div>
          <h2 className="selected-work-title">Selected work</h2>
        </div>

        <Link href="/work" className="selected-work-all">
          view all <FontAwesomeIcon icon={faArrowRight} size="xs" />
        </Link>
      </div>

      <div className="selected-work-list">
        {projects.map((p: ProjectProps, i: number) => (
          <Link key={i} href={`/work/${p.url}`} className="selected-work-item">
            <div className="selected-work-index">0{i + 1}</div>

            <div className="selected-work-main">
              <h3 className="selected-work-name">{p.title}</h3>

              <span className="selected-work-date">
                {p.date instanceof Date ? p.date.toLocaleDateString(undefined, { year: 'numeric' }) : p.date}
              </span>
            </div>

            <p className="selected-work-description">{p.description}</p>

            <div className="selected-work-tags">
              {p.technologies.map((s: string) => (
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
