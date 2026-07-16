import "./Links.css";
import Link from "next/link";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface WorkLinksProps {
  title: string | null;
  links: WorkLinkProps[];
}

export interface WorkLinkProps {
  type: string | null;
  link: string | null;
  label: string | null;
}

export default function WorkLinks({ title, links }: WorkLinksProps) {
  return (
    <section className="work-links">
      <h2 className="work-links-title">{title}</h2>
      <ul className="work-links-list">
        {links?.map((item: WorkLinkProps, i: number) => (
          <li key={i} className="work-links-item">
            <div className="work-links-item-content">
              <span className="work-links-item-title">{item.type}{":"}</span>
              <span className="work-links-item-label">{item.label}</span>
            </div>
            <Link href={item.link || "#"} target="_blank" className="work-links-item-link">
              {"open "}
                <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
