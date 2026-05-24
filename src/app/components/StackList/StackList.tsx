import "./StackList.css";

export interface StackItem {
  id: number;
  name: string;
}

export interface StackListProps {
  stackItems: StackItem[];
}

export default function StackList({ stackItems }: StackListProps) {
  return (
    <section className="stacklist">
      <div className="stacklist-grid">
        <div className="stacklist-content">
          <div className="stacklist-kicker">// stack</div>

          <h2 className="stacklist-title">Tools of the trade.</h2>

          <p className="stacklist-description">
            I pick boring, proven tech and use it well. Then I write tests.
          </p>
        </div>

        <div className="stacklist-items">
          {stackItems.map((s) => (
            <span key={s.id} className="stacklist-item">
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
