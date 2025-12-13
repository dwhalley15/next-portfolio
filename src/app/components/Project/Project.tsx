import "./Project.css";
import Link from "next/link";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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

  const FALLBACK_IMAGE =
  "https://frw6rziicw61rtm1.public.blob.vercel-storage.com/portfolio/image-not-found.jpg";
  
  const renderedImage =
  typeof listingimage === "string" && listingimage.trim().length > 0
    ? listingimage
    : FALLBACK_IMAGE;

  return (
    <Link href={`/projects/${url}`} className="project">
      <div className="project-media">
        <Image src={renderedImage} alt={title + " Listing Image"} width={820} height={250} className="project-img" loading="lazy" />
      </div>
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
