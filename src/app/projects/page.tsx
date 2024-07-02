import Project from '../components/Project/Project';
import {ProjectProps} from "../components/Project/Project";
import "./Projects.css";
import Link from "next/link";
import mainImage from "../../../public/main-image.jpg";
import {getProjectData} from "../services/dbServices/dbService";

export default async function Projects() {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ortheyus",
        "url": "https://next-portfolio-delta-snowy.vercel.app/about",
        "sameAs": [
            "https://www.linkedin.com/in/davidwhalleyprofile",
            "https://github.com/dwhalley15",
            "https://www.instagram.com/ortheyus/",
            "https://www.youtube.com/channel/UCWikZ6mdoqSzCTOvy8MjsLQ"
        ],
        "jobTitle": "Software Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "the human tech agency"
        },
        "image": {
            "@type": "ImageObject",
            "url": mainImage,
            "width": 800,
            "height": 600
        },
        "description": "Discover Ortheyus' portfolio: a passionate software developer showcasing innovative web development projects, skills, and programming expertise."
    };

    const projectsResults = await getProjectData();

    const projects = projectsResults.projects as ProjectProps[];

    return(
        <>
            <div className="project-container">
            <Link href="/" className="sticky-link">Back to Portfolio</Link>
                <h1>Projects</h1>
                {projects.length > 0 ? (
                    <>
                        <p>
                            Below are some of the projects I have worked on.
                        </p>
                        {projects.map((project, index) => (
                            <Project key={index} {...project} />
                        ))}
                    </>
                ) : (
                    <p>No projects currently available. Check back soon!</p>
                )}
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
        
    );
};