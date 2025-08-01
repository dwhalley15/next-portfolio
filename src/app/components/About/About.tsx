import "./About.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFontAwesomeIcon from "@/app/services/iconService/iconService";
import { getAboutInfo } from "@/app/services/dbServices/dbService";
import NotFound from "@/app/not-found";
import { QueryResultRow } from "@vercel/postgres";

export interface AboutInfo {
    description: string;
    journey: string[];
    frontend: number;
    backend: number;
    web: number;
    mobile: number;
}


export default async function About() {

    const MapAboutData = (row: QueryResultRow): AboutInfo => {
        return{
            description: row.description,
            journey: row.journey,
            frontend: row.frontend,
            backend: row.backend,
            web: row.web,
            mobile: row.mobile,
        }
    }

    const aboutInfo = await getAboutInfo();

    const mappedAboutInfo = aboutInfo.map(MapAboutData);

    if (!mappedAboutInfo || mappedAboutInfo.length === 0) {
        return <NotFound />;
    }

    const about = mappedAboutInfo[0];

    return (
        <>
            <section className="about-site-section">
                <div className="about-site-header">
                    <h1>About <span>Me</span></h1>
                    <p>{about.description}</p>
                </div>
                <div className="about-site-content">
                    <div className="about-site-content-container">
                        <h2>My Journey</h2>
                        {about.journey.map((paragraph: string, index: number) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <Link href="/services" className="btn">{"View My Services"}</Link>
                    </div>
                    <div className="about-site-content-skills-container">
                        <h2>Skills & Expertise</h2>
                        <div className="about-site-content-skills">
                            <div className="about-site-content-skill">
                                <FontAwesomeIcon icon={getFontAwesomeIcon("backenddevelopment")} size="3x" />
                                <div className="about-site-content-skill-text">
                                    <h3>Frontend Development</h3>
                                    <p>{"React, TypeScript, Next.js, Vue"}</p>
                                    <div className="progress-bar">
                                        <div className="progress-bar-fill" style={{ width: `${about.frontend}%` }}></div>
                                    </div>
                                    <p>{about.frontend}%</p>
                                </div>
                            </div>
                            <div className="about-site-content-skill">
                                <FontAwesomeIcon icon={getFontAwesomeIcon("databasedesign")} size="3x" />
                                <div className="about-site-content-skill-text">
                                    <h3>Backend Development</h3>
                                    <p>{"C#, ASP.NET Core, SQL Server"}</p>
                                    <div className="progress-bar">
                                        <div className="progress-bar-fill" style={{ width: `${about.backend}%` }}></div>
                                    </div>
                                    <p>{about.backend}%</p>
                                </div>
                            </div>
                            <div className="about-site-content-skill">
                                <FontAwesomeIcon icon={getFontAwesomeIcon("globe")} size="3x" />
                                <div className="about-site-content-skill-text">
                                    <h3>Web Technologies</h3>
                                    <p>{"HTML5, CSS3, JavaScript, REST APIs"}</p>
                                    <div className="progress-bar">
                                        <div className="progress-bar-fill" style={{ width: `${about.web}%` }}></div>
                                    </div>
                                    <p>{about.web}%</p>
                                </div>
                            </div>
                            <div className="about-site-content-skill">
                                <FontAwesomeIcon icon={getFontAwesomeIcon("mobiledesign")} size="3x" />
                                <div className="about-site-content-skill-text">
                                    <h3>Mobile Development</h3>
                                    <p>{"React Native, Expo, Kotlin"}</p>
                                    <div className="progress-bar">
                                        <div className="progress-bar-fill" style={{ width: `${about.mobile}%` }}></div>
                                    </div>
                                    <p>{about.mobile}%</p>
                                </div>
                            </div>
                        </div>
                        <Link href="/skills" className="btn">{"View More Skills"}</Link>
                    </div>
                    <div className="about-site-content-container">
                        <h2>Education</h2>
                        <p><strong>{'BSc, Computer Software Engineering'}</strong><br />{'First Class Honours'}<br />{'Bournemouth University'}</p>
                        <Link href="/education" className="btn">{"View More Education"}</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
