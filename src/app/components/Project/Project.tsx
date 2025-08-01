import "./Project.css";
import Link from "next/link";
import ImageService from "../../services/imageService/imageService";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface ProjectProps {
  title: string;
  description: string;
  listingimage: any;
  url: string;
  technologies: string[];
  date: Date;
}

export default function Project({
  title,
  description,
  listingimage,
  url,
  technologies,
}: ProjectProps) {
  const renderredImage = ImageService(listingimage, title);

  return (
    <Link href={`/projects/${url}`} className="project">
      <div className="project-media">{renderredImage}</div>
      <div className="project-text">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul className="project-tech-list">
          {technologies.map((tech, index) => (
            <li key={index} className="project-tech-item">
              {tech}
            </li>
          ))}
        </ul>
        <p className="project-link">View Details <FontAwesomeIcon icon={faArrowRight} size="sm" /></p>
      </div>
    </Link>
  );
}
