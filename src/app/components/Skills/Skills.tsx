"use client"

import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFontAwesomeIcon from "../../services/iconService/iconService";
import { useState } from "react";
import Link from "next/link";

export interface SkillsItem {
    id: number;
    name: string;
    description: string;
    category: string;
    percentage: string;
}

export interface SkillsProps {
    skillsInfo: SkillsItem[];
    skillsDescription: string;
}

export default function Skills({ skillsInfo, skillsDescription }: SkillsProps) {

    const [showDesc, setShowDesc] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState<SkillsItem | null>(null);

    const handleClick = (skill: SkillsItem) => {
        if (selectedSkill && selectedSkill.id === skill.id) {
            setSelectedSkill(null);
            setShowDesc(false);
        } else {
            setSelectedSkill(skill);
            setShowDesc(true);
        }
    };

    const categoryIconMap: Record<string, string> = {
        frontend: "frontenddevelopment",
        backend: "databasedesign",
        content: "globe",
        styling: "webdesign",
        mobile: "mobiledesign",
        tools: "tools"
    };

    const categoryMap: Record<string, string> = {
        frontend: "Frontend Development",
        backend: "Backend Development",
        content: "Content Management",
        styling: "Styling & Design",
        mobile: "Mobile Development",
        tools: "Development Tools"
    };

    const allCategories = Array.from(
        new Set(
            skillsInfo
                .map(item => item.category)
                .filter(category => categoryMap.hasOwnProperty(category))
        )
    );

    const sortedCategories = allCategories.sort(
        (a, b) => categoryMap[a].localeCompare(categoryMap[b])
    );

    return (
        <>
            <section className="skills" id="skills">
                <h1>Skills & Expertise</h1>
                <p>{skillsDescription}</p>
                <div className="skills-container">
                    {sortedCategories.map((category, index) => (
                        <div className="skills-category" key={index}>
                            <div className="skills-category-header">
                                <FontAwesomeIcon icon={getFontAwesomeIcon(categoryIconMap[category])} size="3x" />
                                <h2>{categoryMap[category]}</h2>
                            </div>
                            <div className="skills-list">
                                {skillsInfo
                                    .filter(item => item.category === category)
                                    .map(item => (
                                        <div key={item.id} className="skills-item">
                                            <div className="skills-item-row">
                                                <h3>{item.name}</h3>
                                                <span>{item.percentage}%</span>
                                            </div>
                                            <div className="skills-progress-bar">
                                                <div className="skills-progress-bar-fill" style={{ width: `${item.percentage}%` }}></div>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="skills-link">
                    <h2>{"Ready to Collaborate?"}</h2>
                    <p>{"Let's discuss how my skills can bring your project to life."}</p>
                    <div className="skills-buttons">
                        <Link className="btn" href="/contact">{"Get in Touch"}</Link>
                        <Link className="btn-secondary" href="/projects">{"View My Work"}</Link>
                    </div>
                </div>
            </section>
        </>
    );
};