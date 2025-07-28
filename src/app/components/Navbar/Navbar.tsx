/**
 * @file Navbar component for the portfolio site.
 * It handles responsive navigation, dropdowns for project links,
 * mobile toggling, and adds scroll-based styling to the nav element.
 */

"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { ProjectProps } from "../Project/Project";
import { usePathname } from "next/navigation";

export interface NavbarItem {
  id: number;
  link_name: string;
}

export interface NavbarProps {
  navLinks: NavbarItem[];
  projects: ProjectProps[];
}

/**
 * Navbar component that renders the main site navigation.
 * Includes a responsive menu, project dropdowns, and dynamic scroll styling.
 *
 * @param {NavbarProps} props - Component props.
 * @returns {JSX.Element} Rendered navbar component.
 */
export default function Navbar({ navLinks, projects }: NavbarProps) {
  const [menuActive, setMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  /**
   * Updates `isMobile` state based on screen width.
   */
  const updateIsMobile = () => {
    setIsMobile(window.matchMedia("(max-width: 995px)").matches);
  };

  useEffect(() => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    /**
     * Handles scroll event to set `scrolled` state.
     */
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Toggles the mobile menu open/close state.
   */
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  /**
   * Activates the project dropdown on hover (desktop only).
   */
  const handleDropdownEnter = (linkName: string) => {
    if (isMobile) return;
    clearTimeout(timeoutRef.current!);
    setActiveDropdown(linkName);
  };

  /**
   * Deactivates the project dropdown with a delay (desktop only).
   */
  const handleDropdownLeave = () => {
    if (isMobile) return;
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <>
      <header>
        <nav className={scrolled ? "scrolled" : ""}>
          <Link className="header_logo" href="/">
            {"Ortheyus"}
          </Link>
          <FontAwesomeIcon
            icon={menuActive ? faX : faBars}
            size="2x"
            onClick={toggleMenu}
          />
          <ul className={menuActive ? "active" : ""}>
            {navLinks.map((link: NavbarItem) => {
              const linkHref =
                link.link_name === "home" ? "/" : `/${link.link_name}`;
              const isLinkActive = pathname === linkHref;
              const hasDropdown =
                link.link_name === "projects" || link.link_name === "about";
              const isDropdownActive = activeDropdown === link.link_name;

              return (
                <li
                  key={link.id}
                  className={`nav-item ${hasDropdown ? "has-dropdown" : ""}`}
                  onMouseEnter={() => handleDropdownEnter(link.link_name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="nav-link-wrapper">
                    <Link
                      className={`nav-link ${isLinkActive ? "active" : ""}`}
                      href={linkHref}
                      onClick={() => {
                        setMenuActive(false);
                      }}
                    >
                      {link.link_name.charAt(0).toUpperCase() +
                        link.link_name.slice(1)}
                    </Link>

                    {hasDropdown && (
                      <ul
                        className={`nav-dropdown ${isDropdownActive ? "visible" : ""
                          }`}
                      >
                        {link.link_name === "projects" &&
                          projects.map((project: ProjectProps) => {
                            const projectLink = `/projects/${project.url}`;
                            const isProjectActive = pathname === projectLink;
                            return (
                              <li key={project.url}>
                                <Link
                                  className={`nav-link ${isProjectActive ? "active" : ""
                                    }`}
                                  href={projectLink}
                                  onClick={() => setMenuActive(false)}
                                >
                                  {project.title}
                                </Link>
                              </li>
                            );
                          })}

                        {link.link_name === "about" && (() => {
                          const isServicesActive = pathname === "/services";
                          const isSkillsActive = pathname === "/skills";
                          const isEducationActive = pathname === "/education";
                          return (
                            <>
                              <li>
                                <Link
                                  href="/services"
                                  className={`nav-link ${isServicesActive ? "active" : ""}`}
                                  onClick={() => setMenuActive(false)}
                                >
                                  Services
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/skills"
                                  className={`nav-link ${isSkillsActive ? "active" : ""}`}
                                  onClick={() => setMenuActive(false)}
                                >
                                  Skills
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/education"
                                  className={`nav-link ${isEducationActive ? "active" : ""}`}
                                  onClick={() => setMenuActive(false)}
                                >
                                  Education
                                </Link>
                              </li>
                            </>
                          );
                        })()}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
          <Link href="/contact" className="btn hire-me">
            {"Hire Me"}
          </Link>
        </nav>
      </header>
    </>
  );
}
