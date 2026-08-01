// app/global-error.tsx
"use client";

import { useEffect } from "react";
import "./error.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const code = 500;
  const title = "Application Error";
  const message = "A critical error occurred. Please try again.";
  const log = `[err]: ${error.message}\n[err]: digest: ${error.digest ?? "n/a"}`;

  return (
    <html lang="en">
      <body>
        <section className="error-page">
          <div className="error-box">
            <div className="error-titlebar">
              <div className="titlebar-dots">
                <span className="dot dot-red" />
                <span className="dot dot-dim" />
                <span className="dot dot-dim" />
              </div>
              <span>status: {code}</span>
            </div>
            <div className="error-content">
              <div className="log-line">
                <span className="prompt-symbol">$</span> tail -n 3 /var/log/app.log
              </div>
              <pre className="log-output">{log}</pre>
              <div className="error-code-row">
                <span className="error-code-label">err_code</span>
                <span className="glow error-code-number">{code}</span>
              </div>
              <h2 className="error-title">{title}</h2>
              <p className="error-message">{message}</p>
              <div className="error-actions">
                <button onClick={() => reset()} className="btn-primary">
                  ./retry
                </button>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}