import "./About.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFontAwesomeIcon from "@/app/services/iconService/iconService";

export default async function About() {

    return (
        <>
            <section className="about-site-section">
                <div className="about-site-header">
                    <h1>About <span>Me</span></h1>
                    <p>{"I'm a passionate software engineer who loves turning complex problems into simple, beautiful solutions. With a strong foundation in modern web technologies and a keen eye for detail, I create applications that are both functional and delightful."}</p>
                </div>
                <div className="about-site-content">
                    <div className="about-site-content-container">
                        <h2>My Journey</h2>
                        <p>{"I graduated with First Class Honours in Software Engineering, where I discovered my passion for creating digital solutions that make a real impact. My journey has been driven by curiosity and a constant desire to learn and improve."}</p>
                        <p>{"When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community through my YouTube channel and social platforms."}</p>
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
                                        <div className="progress-bar-fill" style={{ width: "80%" }}></div>
                                    </div>
                                    <p>{'80%'}</p>
                                </div>
                            </div>
                            <div className="about-site-content-skill">
                                <FontAwesomeIcon icon={getFontAwesomeIcon("databasedesign")} size="3x" />
                                <div className="about-site-content-skill-text">
                                    <h3>Backend Development</h3>
                                    <p>{"C#, ASP.NET Core, SQL Server"}</p>
                                    <div className="progress-bar">
                                        <div className="progress-bar-fill" style={{ width: "70%" }}></div>
                                    </div>
                                    <p>{'70%'}</p>
                                </div>
                            </div>
                            <div className="about-site-content-skill">
                                <FontAwesomeIcon icon={getFontAwesomeIcon("globe")} size="3x" />
                                <div className="about-site-content-skill-text">
                                    <h3>Web Technologies</h3>
                                    <p>{"HTML5, CSS3, JavaScript, REST APIs"}</p>
                                    <div className="progress-bar">
                                        <div className="progress-bar-fill" style={{ width: "90%" }}></div>
                                    </div>
                                    <p>{'90%'}</p>
                                </div>
                            </div>
                            <div className="about-site-content-skill">
                                <FontAwesomeIcon icon={getFontAwesomeIcon("mobiledesign")} size="3x" />
                                <div className="about-site-content-skill-text">
                                    <h3>Mobile Development</h3>
                                    <p>{"React Native, Expo, Kotlin"}</p>
                                    <div className="progress-bar">
                                        <div className="progress-bar-fill" style={{ width: "70%" }}></div>
                                    </div>
                                    <p>{'70%'}</p>
                                </div>
                            </div>
                        </div>
                        <Link href="/skills" className="btn">{"View More Skills"}</Link>
                    </div>
                    <div className="about-site-content-container">
                        <h2>Education</h2>
                        <p><strong>{'Software Engineering'}</strong><br />{'First Class Honours'}<br />{'University Degree'}</p>
                        <Link href="/education" className="btn">{"View More Education"}</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
