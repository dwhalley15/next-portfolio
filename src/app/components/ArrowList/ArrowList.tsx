import "./ArrowList.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export interface ArrowListProps {
  title: string | null;
  items: string[] | null;
}

export default function ArrowList({ title, items }: ArrowListProps) {
  return (
    <section className="arrow-list">
      <h2 className="arrow-list-title">{title}</h2>
      <ol className="arrow-list-items">
        {items?.map((item: string, i: number) => (
          <li key={i} className="arrow-list-item">
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}
