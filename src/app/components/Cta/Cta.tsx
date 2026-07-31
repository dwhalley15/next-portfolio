import "./Cta.css";
import Link from "next/link";

export interface CtaProps {
  title_first: string | null;
  title_second: string | null;
  subtitle: string | null;
  btn_text: string | null;
  btn_url: string | null;
}

export default function Cta({ title_first, title_second, subtitle, btn_text, btn_url }: CtaProps) {
  return (
    <section className="cta">
      <div className="cta-content">
        <div>
          <div className="cta-kicker">// {subtitle}</div>

          <h2 className="cta-title">
            {title_first}{" "} <span className="cta-accent">{title_second}</span>
          </h2>
        </div>

        <Link href={btn_url || "#"} className="cta-button" aria-label={btn_text || "Call to Action"}>
          {btn_text || ""}
        </Link>
      </div>
    </section>
  );
}
