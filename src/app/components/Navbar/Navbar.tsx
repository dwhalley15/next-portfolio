'use client'

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import  "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faX} from "@fortawesome/free-solid-svg-icons"

export interface NavbarItem {
    id: number;
    link_name: string;
  }
  
  export interface NavbarProps {
    navLinks: NavbarItem[];
  }

export default function Navbar({navLinks}: NavbarProps) {

  const [menuActive, setMenuActive] = useState(false);
  const [activeLink, setActiveLink] = useState<number | null>(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLinkClick = (id: number) => {
    setActiveLink(id);
    setMenuActive(false);
  };

  return(
    <>
      <header>
        <nav>
          <Link className="header_logo" href={`#${navLinks[0].link_name}`}><h1>Ortheyus</h1></Link>
          <FontAwesomeIcon icon={ menuActive ? faX : faBars} size="3x" onClick={toggleMenu}/>
          <ul className={menuActive ? 'active' : ''}>
          {navLinks.map((link: NavbarItem) => (
              <li key={link.id}>
                <Link onClick={() => handleLinkClick(link.id)} className={link.id === activeLink ? 'active' : ''}  href={`#${link.link_name}`}>{link.link_name.charAt(0).toUpperCase() + link.link_name.slice(1)}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
