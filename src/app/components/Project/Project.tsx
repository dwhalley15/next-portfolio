import "./Project.css";
import Link from "next/link";
import Image from "next/image";

export interface ProjectProps {
    title: string;
    description: string;
    image: any;
    technologies: string[];
    video: string;
    url: string;
}

export default function Project({ title, description, image, technologies, video, url }: ProjectProps) {
    return(
        <section className="project">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="project-media">
                <Image src={image} alt={title} width={426} height={240} />
                <iframe 
                    src={`https://www.youtube.com/embed/${video}`}
                    title="Youtube Video Player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    >
                </iframe>
            </div>
            <h3>Technologies Used:</h3>
            <ul>
                {technologies.map((tech: string) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
            <Link href={url} target="_blank" rel="noopener noreferrer">View Project</Link>
        </section>
    );
}