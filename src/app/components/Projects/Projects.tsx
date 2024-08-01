import Project from '../Project/Project';
import {ProjectProps} from "../Project/Project";
import "./Projects.css";
import mainImage from "../../../../public/main-image.jpg";
import {getProjectData} from "../../services/dbServices/dbService";
import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL('https://next-portfolio-delta-snowy.vercel.app/projects'),
    title: "Ortheyus | Software Developer | Projects",
    description: "Discover Ortheyus' projects page: listing just some of the projects worked on in this software engineering journey.",
    alternates: {
        canonical: "https://next-portfolio-delta-snowy.vercel.app/projects/",
      },
      openGraph: {
        type: "website",
        siteName: "Ortheyus | Software Developer | Projects",
        locale: "en_UK",
        url: "https://next-portfolio-delta-snowy.vercel.app/projects",
        title: "Ortheyus | Software Developer | Projects",
        description: "Discover Ortheyus' projects page: listing just some of the projects worked on in this software engineering journey.",
        images: [
            {
              url: mainImage.src,
              width: 800,
              height: 600,
              alt: "Ortheyus | Software Developer | Projects",
            },
          ]
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Ortheyus | Software Developer | Projects',
        description: "Discover Ortheyus' projects page: listing just some of the projects worked on in this software engineering journey.",
        images: [mainImage.src],
      },
}

export default async function Projects() {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ortheyus",
        "url": "https://next-portfolio-delta-snowy.vercel.app/projects",
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
        "description": "Discover Ortheyus' projects page: listing just some of the projects worked on in this software engineering journey."
    };

    const projectsResults = await getProjectData();

    const projects = projectsResults.projects as ProjectProps[];

    return(
        <>
            <section className="project-container">
                <h1>Projects</h1>
                <p>{"Discover Ortheyus' projects page: listing just some of the projects worked on in this software engineering journey."}</p>
                {projects.length > 0 ? (
                    <>
                        {projects.map((project, index) => (
                            <Project key={index} {...project} />
                        ))}
                    </>
                ) : (
                    <p>No projects currently available. Check back soon!</p>
                )}
            </section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
        
    );
};