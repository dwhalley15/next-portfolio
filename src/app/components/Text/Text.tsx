import "./Text.css";

export interface TextProps {
  title: string | null;
  text: string | null;
}

export default function Text({ title, text }: TextProps) {
    return (
        <section className="text">
            <h2 className="text-title">{title}</h2>
            <p className="text-content">{text}</p>
        </section>
    );
}
