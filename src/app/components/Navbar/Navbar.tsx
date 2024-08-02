'use client'

import Link from "next/link";
import React, { useState, useRef, useEffect } from 'react';
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { ProjectProps } from "../Project/Project";
import { usePathname } from 'next/navigation';

export interface NavbarItem {
  id: number;
  link_name: string;
}

export interface NavbarProps {
  navLinks: NavbarItem[];
  projects: ProjectProps[];
}

export default function Navbar({ navLinks, projects }: NavbarProps) {

  const [menuActive, setMenuActive] = useState(false);
  const [projectsDropdownActive, setProjectsDropdownActive] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false); 

  const pathname = usePathname(); 

  const updateIsMobile = () => {
    setIsMobile(window.matchMedia("(max-width: 995px)").matches);
  };

  useEffect(() => {
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile); 
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setProjectsDropdownActive(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = window.setTimeout(() => {
      setProjectsDropdownActive(false);
    }, 300);
  };

  return (
    <>
      <header>
        <nav>
          <Link className="header_logo" href="/">
            <span>Ortheyus</span>
          </Link>
          <FontAwesomeIcon icon={menuActive ? faX : faBars} size="3x" onClick={toggleMenu} />
          <ul className={menuActive ? 'active' : ''}>
            {navLinks.map((link: NavbarItem) => {
              const linkHref = link.link_name === 'home' ? '/' : `/${link.link_name}`;
              const isLinkActive = pathname === linkHref;

              return (
                <li key={link.id} className="nav-item">
                  {link.link_name === 'projects' ? (
                    <div
                      className="nav-link-wrapper"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        className={`nav-link ${isLinkActive ? 'active' : ''}`}
                        href="/projects"
                        onClick={() => setMenuActive(false)}
                      >
                        {link.link_name.charAt(0).toUpperCase() + link.link_name.slice(1)}
                      </Link>
                      {projectsDropdownActive && (
                        <ul className="nav-dropdown">
                          {projects.map((project: ProjectProps) => {
                            const projectLink = `/projects/${project.url}`;
                            const isProjectActive = pathname === projectLink;

                            return (
                              <li key={project.url}>
                                <Link 
                                  className={`nav-link ${isProjectActive ? 'active' : ''}`} 
                                  href={projectLink}
                                  onClick={() => setMenuActive(false)}
                                >
                                  {project.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      className={`nav-link ${isLinkActive ? 'active' : ''}`}
                      href={linkHref}
                      onClick={() => setMenuActive(false)}
                    >
                      {link.link_name.charAt(0).toUpperCase() + link.link_name.slice(1)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};
