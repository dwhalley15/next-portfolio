import Link from "next/link";
import "./error.css";
import { headers } from "next/headers";

export default async function NotFound() {
  const headersList = await headers();

  const path =
    headersList.get("x-invoke-path") ?? headersList.get("referer") ?? "unknown";

  const code = 404;

  const title = "Page Not Found";

  const message = "The page you are looking for does not exist.";

  const log = `[err]: Page not found\n[err] at ${path}\n[err] at NotFound (src/app/not-found.tsx:10:5)`;

  const actions = [
    { to: "/", label: "cd ~/", primary: true },
    { to: "/contact", label: "mail david" },
  ];

  return (
    <>
      <section className="error-page">
        <div className="error-box">
          <div className="error-titlebar">
            <div className="titlebar-dots">
              <span className="dot dot-red" />
              <span className="dot dot-dim" />
              <span className="dot dot-dim" />
              <span className="titlebar-path">{path}</span>
            </div>
            <span>status: {code}</span>
          </div>
          <div className="error-content">
            <div className="log-line">
              <span className="prompt-symbol">$</span> tail -n 3
              /var/log/app.log
            </div>
            <pre className="log-output">{log}</pre>
            <div className="error-code-row">
              <span className="error-code-label">err_code</span>
              <span className="glow error-code-number">{code}</span>
            </div>
            <h2 className="error-title">
              {title}
              <span className="cursor-blink" />
            </h2>
            <p className="error-message">{message}</p>
            <div className="error-actions">
              {actions.map((a) => (
                <Link
                  key={a.to}
                  href={a.to}
                  className={a.primary ? "btn-primary" : "btn-secondary"}
                >
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
