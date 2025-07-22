import type { Metadata } from 'next';
import { getProjectByName, getNavLinks, getSocialLinks, getProjectData } from "../../services/dbServices/dbService";
import { Navbar, NavbarItem, SocialLinkItem, Footer, ProjectProps } from "../../services/importService/importService";
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

export async function generateMetadata({ params }: { params: { name: string } }): Promise<Metadata> {

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

    const projectData: QueryResult<QueryResultRow> = await getProjectByName(params.name);

    const mappedProjectData: ProjectData = mapProjectData(projectData.rows[0]);

    const renderredImage = ImageService(mappedProjectData.image, mappedProjectData.title);

    const imageSrc = (renderredImage.props as any).src as string;

    return {
        title: `Ortheyus | Projects | ${mappedProjectData.title}`,
        description: mappedProjectData.description,
        alternates: {
            canonical: "https://next-portfolio-delta-snowy.vercel.app/projects/" + mappedProjectData.url,
        },
        openGraph: {
            type: "website",
            siteName: `Ortheyus | Projects | ${mappedProjectData.title}`,
            locale: "en_UK",
            url: "https://next-portfolio-delta-snowy.vercel.app/projects/" + mappedProjectData.url,
            title: `Ortheyus | Projects | ${mappedProjectData.title}`,
            description: mappedProjectData.description,
            images: [
                {
                    url: imageSrc,
                    width: 800,
                    height: 600,
                    alt: `Ortheyus | Projects | ${mappedProjectData.title}`,
                },
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: `Ortheyus | Projects | ${mappedProjectData.title}`,
            description: mappedProjectData.description,
            images: [imageSrc],
        },
    };
};

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

        const navLinks = await getNavLinks();

        const socialLinks = await getSocialLinks();

        const { projects } = await getProjectData();

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
                <Navbar navLinks={navLinks as NavbarItem[]} projects={projects as ProjectProps[]} />
                <main>
                    <section className='project-page'>
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
                    </section>
                </main>
                <Footer socialLinks={socialLinks as SocialLinkItem[]}/>
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