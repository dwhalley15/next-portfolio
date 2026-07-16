import "./NumberList.css";

export interface NumberListProps {
  title: string | null;
  items: string[] | null;
}

export default function NumberList({ title, items }: NumberListProps) {
  return (
    <section className="number-list">
      <h2 className="number-list-title">{title}</h2>
      <ol className="number-list-items">
        {items?.map((item: string, i: number) => (
          <li key={i} className="number-list-item">
            <span>
                {(i + 1).toString().padStart(2, "0")}
            </span>
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}
