import "./List.css";

interface ListProps {
  title: string | null;
  items:
    | {
        title: string | null;
        text: string | null;
      }[]
    | null;
}

export default function List({ title, items }: ListProps) {
  return (
    <section className="list">
      <h2 className="list-title">
        {"// "}
        {title}
      </h2>
      <div className="list-items">
        {items?.map((i, index) => (
          <div key={index} className="list-item">
            <h3 className="list-item-title">{i.title}</h3>
            <p className="list-item-text">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
