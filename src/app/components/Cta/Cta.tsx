import "./Cta.css";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="cta">
      <div className="cta-content">
        <div>
          <div className="cta-kicker">// next</div>

          <h2 className="cta-title">
            Got a project that needs{" "}
            <span className="cta-accent">shipping</span>?
          </h2>
        </div>

        <Link href="/contact" className="cta-button">
          $ ./start-conversation
        </Link>
      </div>
    </section>
  );
}
