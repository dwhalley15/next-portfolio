"use client";

import Link from "next/link";
import "./Navigation.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

export interface NavbarItem {
  path: string | null;
  type: string | null;
  label: string | null;
  sort_order: number | null;
}

export interface NavbarProps {
  navigationItems: NavbarItem[];
}

export default function Navigation({ navigationItems }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = [...(navigationItems ?? [])].sort(
    (a, b) =>
      (a.sort_order ?? Number.MAX_SAFE_INTEGER) -
      (b.sort_order ?? Number.MAX_SAFE_INTEGER),
  );

  const main = items.filter((item) => item.type === "main");
  const btns = items.filter((item) => item.type === "button");
  const navLinks = items.filter((item) => item.type === "link");

  return (
    <header className="navigation">
      <div className="container">
        {main.map((item, index) => (
          <Link
            key={index}
            href={item.path || "/"}
            className="logo"
            aria-label={item.label || "Home"}
          >
            <img
              src="/favicon-32x32.png"
              alt=""
              width={20}
              height={20}
              className="logo-image"
            />
            <span>{item.label}</span>
            <span className="logo-dim">:~$</span>
          </Link>
        ))}

        <nav className="desktop-nav">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path || "#"}
              className={pathname === item.path ? "active" : ""}
              aria-label={item.label || ""}
            >
              {"~/"}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-right">
          {btns.map((item, index) => (
            <Link
              key={index}
              href={item.path || "#"}
              className="hire-me desktop-only"
              aria-label={item.label || ""}
            >
              {item.label}
            </Link>
          ))}

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`hamburger ${open ? "is-open" : ""}`} />
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className={`mobile-nav ${open ? "is-open" : ""}`}>
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.path || "#"}
            className={pathname === item.path ? "active" : ""}
            aria-label={item.label || ""}
            onClick={() => setOpen(false)}
          >
            {"~/"}
            {item.label}
          </Link>
        ))}
        {btns.map((item, index) => (
          <Link
            key={index}
            href={item.path || "#"}
            className="hire-me"
            aria-label={item.label || ""}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
