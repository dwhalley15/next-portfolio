import "./StackList.css";

export interface StackListProps {
  title: string | null;
  subtitle: string | null;
  text: string | null;
  stackItems: string[];
}

export default function StackList({ title, subtitle, text,stackItems }: StackListProps) {
  return (
    <section className="stacklist">
      <div className="stacklist-grid">
        <div className="stacklist-content">
          <div className="stacklist-kicker">// {subtitle}</div>

          <h2 className="stacklist-title">{title}</h2>

          <p className="stacklist-description">
            {text}
          </p>
        </div>

        <div className="stacklist-items">
          {stackItems.map((s, i) => (
            <span key={i} className="stacklist-item">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
