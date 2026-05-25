"use client";

import Link from "next/link";
import "./Navigation.css";
import { usePathname } from "next/navigation";

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
          <Link key={index} href={item.path || "/"} className="logo">
            <span className="logo-terminal">▮</span>
            <span>{item.label}</span>
            <span className="logo-dim">:~$</span>
          </Link>
        ))}
        <nav>
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path || "#"}
              className={pathname === item.path ? "active" : ""}
            >
              {"~/"}
              {item.label}
            </Link>
          ))}
        </nav>
        {btns.map((item, index) => (
          <Link key={index} href={item.path || "#"} className="hire-me">
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
