import type { Metadata } from 'next';
import { getProjectByName } from "../../services/dbServices/dbService";
import NotFound from "../../not-found";
import { QueryResult, QueryResultRow } from '@vercel/postgres';
import Link from "next/link";
import ImageService from "../../services/imageService/imageService";
import getTechLink from "../../services/techService/techService";
import "./Project.css";

export interface ProjectData {
    title: string;
    descriptionLong: string;
    description: string;
    image: any;
    technologies: string[];
    video?: string;
    url: string;
    link: string;
}

export default async function Project({ params }: { params: { name: string } }) {

    const mapProjectData = (row: QueryResultRow): ProjectData => {
        return {
            title: row.title,
            description: row.description,
            descriptionLong: row.descriptionlong,
            image: row.image,
            technologies: row.technologies,
            video: row.video,
            url: row.url,
            link: row.link,
        };
    };

    try {
        const projectData: QueryResult<QueryResultRow> = await getProjectByName(params.name);

        if (projectData.rows.length === 0) {
            return <NotFound />;
        }

        const mappedProjectData: ProjectData = mapProjectData(projectData.rows[0]);

        const jsonLd = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": mappedProjectData.title,
            "url": `https://next-portfolio-delta-snowy.vercel.app/projects/${mappedProjectData.url}`,
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
                "url": mappedProjectData.image,
                "width": 800,
                "height": 600
            },
            "description": mappedProjectData.description
        };

        const renderredImage = ImageService(mappedProjectData.image, mappedProjectData.title);

        return (
            <>
                <section className='project-page'>
                    <Link href="/projects" className="sticky-link">Back to Projects</Link>
                    <h1>{mappedProjectData.title}</h1>
                    <div className='project-page-container'>
                        <div className='project-page-columns'>
                            <div className='project-page-text'>
                                <h2>Description</h2>
                                <p>{mappedProjectData.descriptionLong}</p>
                                <h2>Technologies</h2>
                                <ul>
                                    {mappedProjectData.technologies.map((tech: string) => (
                                        <li key={tech}><Link href={getTechLink(tech)} target="_blank" rel="noopener noreferrer">{tech}</Link></li>
                                    ))}
                                </ul>
                                <Link className='project-btn' href={mappedProjectData.link} target="_blank" rel="noopener noreferrer">View Repository</Link>
                            </div>
                            <div className='project-page-media'>
                                <h2>Media</h2>
                                {mappedProjectData.video && (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${mappedProjectData.video}`}
                                        title="Youtube Video Player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        referrerPolicy="strict-origin-when-cross-origin"
                                    ></iframe>
                                )}
                                {renderredImage}
                            </div>
                        </div>
                    </div>
                    <Link className='profile-btn' href="/about">About this Portfolio</Link>
                </section>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </>
        );
    }
    catch (error) {
        <NotFound />;
    }

}