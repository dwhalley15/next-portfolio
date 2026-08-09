import "./DynamicWorkList.css";
import Link from "next/link";

export interface DynamicWorkListProps {
  workItems: WorkItemProps[];
}

export interface WorkItemProps {
  title: string | null;
  year: number | string;
  type: string | null;
  description: string | null;
  url: string | null;
  stack: string[];
}

export default function DynamicWorkList({ workItems }: DynamicWorkListProps) {
  return (
    <section className="dynamic-work-list">
      <div className="work-header">
        <div className="col-1">#</div>
        <div className="col-3">project</div>
        <div className="col-1">year</div>
        <div className="col-1">type</div>
        <div className="col-4">description</div>
        <div className="col-2 text-right">stack</div>
      </div>
      <div className="work-items">
        {workItems.map((p, i) => (
          <Link key={p.url} href={p.url || "#"} className="work-item" aria-label={`View project ${p.title}`}>
            <span className="col-1 text-xs text-dim">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="col-11 md-col-3">
              <h2 className="project-title">{p.title}</h2>
            </div>
            <span className="col-4 md-col-1 text-xs text-dim">
              {p.year}
            </span>
            <span className="col-8 md-col-1 text-xs text-dim">
              {p.type}
            </span>
            <p className="col-12 md-col-4 text-sm text-foreground-muted">
              {p.description}
            </p>
            <div className="col-12 md-col-2 stack">
              {p.stack.map((s) => (
                <span key={s} className="stack-tag">
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
