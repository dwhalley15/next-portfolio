import Project from '../Project/Project';
import {ProjectProps} from "../Project/Project";
import "./Projects.css";
import {getProjectData} from "../../services/dbServices/dbService";

export default async function Projects() {

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
        </>
    );
};