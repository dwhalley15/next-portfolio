import "./Project.css";
import Link from "next/link";
import ImageService from "../../services/imageService/imageService";

export interface ProjectProps {
    title: string;
    description: string;
    image: any;
    url: string;
}

export default function Project({ title, description, image, url }: ProjectProps) {

    const renderredImage = ImageService(image, title);

    return(
        <section className="project">
            <div className="project-text">
                <h2>{title}</h2>
                <p>{description}</p>
                <Link href={`/projects/${url}`}>View Project</Link>
            </div> 
            <div className="project-media">
                {renderredImage}
            </div>
        </section>
    );
}