"use client";

import Link from "next/link";
import "./Navigation.css";
import { usePathname } from "next/navigation";

export interface NavbarItem {
  id: number;
  link_name: string;
}

export interface NavbarProps {
  navLinks: NavbarItem[];
}

export default function Navigation({ navLinks }: NavbarProps) {
  const pathname = usePathname();

  function resolveHref(linkName: string) {
    if (linkName.toLowerCase() === "home") return "/";
    return `/${linkName}`;
  }

  return (
    <header className="navigation">
      <div className="container">
        <Link href="/" className="logo">
          <span className="logo-terminal">▮</span>
          <span>david@ortheyus</span>
          <span className="logo-dim">:~$</span>
        </Link>
        <nav>
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={resolveHref(item.link_name)}
              className={
                pathname === resolveHref(item.link_name) ? "active" : ""
              }
            >
              {"~/"}
              {item.link_name}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hire-me">
          ./hire-me
        </Link>
      </div>
    </header>
  );
}
