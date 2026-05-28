import "./Services.css";

export interface ServicesProps {
  title: string | null;
  items:
    | {
        title: string | null;
        text: string | null;
      }[]
    | null;
}

export default function Services({ title, items }: ServicesProps) {
  return (
    <section className="services">
      <h2 className="services-title">
        {"// "}
        {title}
      </h2>

      <div className="services-grid">
        {items?.map((s, i) => (
          <div key={i} className="services-card">
            <div className="services-card-title">{s.title}</div>
            <p className="services-card-text">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
