import type { Metadata } from "next";
import {
  getProjectByName,
  getNavLinks,
  getSocialLinks,
  getProjectData,
} from "../../services/dbServices/dbService";
import {
  Navbar,
  NavbarItem,
  SocialLinkItem,
  Footer,
  ProjectProps,
} from "../../services/importService/importService";
import NotFound from "../../not-found";
import { QueryResult, QueryResultRow } from "@vercel/postgres";
import Link from "next/link";
import ImageService from "../../services/imageService/imageService";
import getTechLink from "../../services/techService/techService";
import getTimeAgo from "@/app/services/timeService/getTimeAgo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendar,
  faClock,
  faCircle,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Project.css";

export interface ProjectData {
  title: string;
  descriptionLong: string;
  description: string;
  images: any[];
  technologies: string[];
  video?: string;
  url: string;
  link: string;
  listingimage?: any;
  features: string[];
  date: Date;
  livelink: string;
}

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  const mapProjectData = (row: QueryResultRow): ProjectData => {
    return {
      title: row.title,
      description: row.description,
      descriptionLong: row.descriptionlong,
      images: Array.isArray(row.images) ? row.images : [],
      technologies: row.technologies,
      video: row.video,
      url: row.url,
      link: row.link,
      listingimage: row.listingimage,
      features: row.features,
      date: row.date,
      livelink: row.livelink,
    };
  };

  const projectData: QueryResult<QueryResultRow> = await getProjectByName(
    params.name
  );

  if (projectData.rows.length === 0) {
    return {
      title: "Project Not Found",
      description: "This project could not be found",
    };
  }

  const mappedProjectData: ProjectData = mapProjectData(projectData.rows[0]);

  const renderredListingImage = ImageService(
    mappedProjectData.listingimage,
    mappedProjectData.title + " Heading Image"
  );

  const imageSrc = (renderredListingImage.props as any).src as string;

  return {
    title: `Ortheyus | Projects | ${mappedProjectData.title}`,
    description: mappedProjectData.description,
    alternates: {
      canonical:
        "https://ortheyus-portfolio.vercel.app/projects/" +
        mappedProjectData.url,
    },
    openGraph: {
      type: "website",
      siteName: `Ortheyus | Projects | ${mappedProjectData.title}`,
      locale: "en_UK",
      url:
        "https://ortheyus-portfolio.vercel.app/projects/" +
        mappedProjectData.url,
      title: `Ortheyus | Projects | ${mappedProjectData.title}`,
      description: mappedProjectData.description,
      images: [
        {
          url: imageSrc,
          width: 800,
          height: 600,
          alt: `Ortheyus | Projects | ${mappedProjectData.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Ortheyus | Projects | ${mappedProjectData.title}`,
      description: mappedProjectData.description,
      images: [imageSrc],
    },
  };
}

export default async function Project({
  params,
}: {
  params: { name: string };
}) {
  const mapProjectData = (row: QueryResultRow): ProjectData => {
    return {
      title: row.title,
      description: row.description,
      descriptionLong: row.descriptionlong,
      images: row.images,
      technologies: row.technologies,
      video: row.video,
      url: row.url,
      link: row.link,
      listingimage: row.listingimage,
      features: row.features,
      date: row.date,
      livelink: row.livelink,
    };
  };

  try {
    const projectData: QueryResult<QueryResultRow> = await getProjectByName(
      params.name
    );

    if (projectData.rows.length === 0) {
      return <NotFound />;
    }

    const mappedProjectData: ProjectData = mapProjectData(projectData.rows[0]);

    const navLinks = await getNavLinks();

    const socialLinks = await getSocialLinks();

    const { projects } = await getProjectData();

    const renderedImages = mappedProjectData.images?.map(img =>
      ImageService(img, mappedProjectData.title)
    );

    const renderredListingImage = ImageService(
      mappedProjectData.listingimage,
      mappedProjectData.title + " Heading Image"
    );

    const imageSrc = (renderredListingImage.props as any).src as string;

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: mappedProjectData.title,
      url: `https://ortheyus-portfolio.vercel.app/projects/${mappedProjectData.url}`,
      sameAs: [
        "https://www.linkedin.com/in/davidwhalleyprofile",
        "https://github.com/dwhalley15",
        "https://www.instagram.com/ortheyus/",
        "https://www.youtube.com/channel/UCWikZ6mdoqSzCTOvy8MjsLQ",
      ],
      jobTitle: "Software Developer",
      worksFor: {
        "@type": "Organization",
        name: "the human tech agency",
      },
      image: {
        "@type": "ImageObject",
        url: imageSrc,
        width: 800,
        height: 600,
      },
      description: mappedProjectData.description,
    };

    return (
      <>
        <Navbar
          navLinks={navLinks as NavbarItem[]}
          projects={projects as ProjectProps[]}
        />
        <main>
          <section className="project-page">
            <Link href="/projects" className="btn-tertiary">
              <FontAwesomeIcon icon={faArrowLeft} size="sm" /> Back to Projects
            </Link>
            <h1>{mappedProjectData.title}</h1>
            <div className="project-page-dates">
              <span className="project-page-date">
                <FontAwesomeIcon icon={faCalendar} size="sm" />
                {new Date(mappedProjectData.date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="project-page-date">
                <FontAwesomeIcon icon={faClock} size="sm" />
                {getTimeAgo(mappedProjectData.date)}
              </span>
            </div>
            <div className="project-page-btns">
              <Link
                href={mappedProjectData.livelink}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" /> View
                Live Project
              </Link>
              <Link
                href={mappedProjectData.link}
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="sm" /> View Repository
              </Link>
            </div>
            <div className="project-page-container">
              <div className="project-page-columns">
                <div className="project-page-section">
                  <div className="project-listing-image">
                    {renderredListingImage}
                  </div>
                </div>
                <div className="project-page-section">
                  <div className="project-page-technologies">
                    <h2>Technologies</h2>
                    <ul>
                      {mappedProjectData.technologies.map((tech: string) => (
                        <li key={tech}>
                          <Link
                            href={getTechLink(tech)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {tech}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="project-page-section">
                  <div className="project-page-description">
                    <h2>Description</h2>
                    <p>{mappedProjectData.descriptionLong}</p>
                  </div>
                </div>
                <div className="project-page-section">
                  <div className="project-page-features">
                    <h2>Key Features</h2>
                    <ul>
                      {mappedProjectData.features.map((feature: string) => (
                        <li key={feature}>
                          <FontAwesomeIcon icon={faCircle} size="2xs" />{" "}
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="project-page-section">
                  <div className="project-page-media">
                    <h2>Project Media</h2>
                    <div className="project-page-media-items">
                      {mappedProjectData.video && (
                        <iframe
                          src={`https://www.youtube.com/embed/${mappedProjectData.video}`}
                          title="Youtube Video Player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                      )}
                      {renderedImages?.map((image, idx) => (
                        <div key={idx} className="project-page-media-image">
                          {image}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="project-page-section">
                  <div className="project-page-links">
                    <h2>Project Links</h2>
                    <Link
                      href={mappedProjectData.livelink}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />{" "}
                      Live Demo
                    </Link>
                    <Link
                      href={mappedProjectData.link}
                      className="btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} size="sm" /> Source Code
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer socialLinks={socialLinks as SocialLinkItem[]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </>
    );
  } catch (error) {
    <NotFound />;
  }
}
