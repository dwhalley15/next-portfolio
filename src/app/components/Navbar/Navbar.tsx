import Link from "next/link";
import  "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"

export interface QueryResultRow {
    id: number;
    link_name: string;
  }
  
  export interface NavbarProps {
    navLinks: QueryResultRow[];
  }

const Navbar: React.FC<NavbarProps> = ({navLinks}) => {
  return(
    <>
      <header>
        <nav>
          <h1>Ortheyus</h1>
          <FontAwesomeIcon className="nav-btn" icon={faBars} size="2x"/>
          <ul>
          {navLinks.map((link: QueryResultRow) => (
              <li key={link.id}>
                <Link href={`#${link.link_name}`}>{link.link_name.charAt(0).toUpperCase() + link.link_name.slice(1)}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;