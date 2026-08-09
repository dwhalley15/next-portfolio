import "./Terminal.css";

export interface TerminalProps {
  title: string | null;
  terminal: TerminalData;
}

export interface TerminalData {
  title: string | null;
  items: TerminalItem[];
}

export interface TerminalItem {
  name: string | null;
  description: string | null;
}

export default function Terminal({ title, terminal }: TerminalProps) {
  return (
    <section className="terminal-block">
      {" "}
      <h2 className="terminal-block-title">{title}</h2>{" "}
      <pre>
        {" "}
        <div className="terminal-block-command"> {terminal.title} </div>{" "}
        {terminal.items.map((detail, detailIndex) => (
          <div key={detailIndex} className="terminal-block-item">
            {" "}
            <span className="terminal-block-item-name"> {detail.name} </span>{" "}
            <span className="terminal-block-item-description">
              {" "}
              # {detail.description}{" "}
            </span>{" "}
          </div>
        ))}{" "}
      </pre>{" "}
    </section>
  );
}
