import "./ContactDetails.css";
import Link from "next/link";

export interface ContactDetailsProps {
  title: string | null;
  status: string | null;
  channels:
    | {
        link: string | null;
        label: string | null;
        title: string | null;
      }[]
    | null;
}

export default function ContactDetails({
  title,
  status,
  channels,
}: ContactDetailsProps) {
  return (
    <section className="contact-details">
      <div className="contact-details-header">
        <h2>{title}</h2>
        <span className="contact-details-indicator" />
      </div>

      <div className="contact-details-content">
        <pre className="contact-details-status">
          {[`> echo $STATUS`, status, ``, `> ls ./channels`].join("\n")}
        </pre>

        <dl className="contact-details-list">
          {(channels ?? []).map((c, i) => (
            <div key={i} className="contact-details-item">
              <dt className="contact-details-title">{c.title}/</dt>

              <dd className="contact-details-value">
                {c.link ? (
                  <Link href={c.link} className="contact-details-link">
                    {c.label}
                  </Link>
                ) : (
                  <span>
                    {c.label}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
