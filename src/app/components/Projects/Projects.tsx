import Project from "../Project/Project";
import { ProjectProps } from "../Project/Project";
import "./Projects.css";
import { getProjectData } from "../../services/dbServices/dbService";
import Link from "next/link";

export default async function Projects() {
  const projectsResults = await getProjectData();

  const projects = projectsResults.projects as ProjectProps[];

  return (
    <>
      <section className="project-container">
        <h1>
          Featured <span>Projects</span>
        </h1>
        <p>
          {
            "Here are some of my recent projects that showcase my skills and passion for creating meaningful digital experiences."
          }
        </p>
        <div className="project-list">
          {projects.length > 0 ? (
            <>
              {projects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </>
          ) : (
            <p>No projects currently available. Check back soon!</p>
          )}
        </div>
        <Link className="btn-secondary" href="https://github.com/dwhalley15" target="_blank" rel="noopener noreferrer">View All Projects on GitHub</Link>
      </section>
    </>
  );
}
