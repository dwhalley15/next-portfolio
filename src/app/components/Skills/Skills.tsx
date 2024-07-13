"use client"

import  "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFontAwesomeIcon from "../../services/iconService/iconService";
import {useState} from "react";
import Link from "next/link";

export interface SkillsItem{
    id: number;
    name: string;
    description: string;
}

export interface SkillsProps {
    skillsInfo: SkillsItem[];
  }

export default function Skills({ skillsInfo }: SkillsProps){

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

    return (
        <>
            <section className="skills" id="skills">
                <h2>Skills</h2>
                <div className="skills-container">
                    <div className="skills-row">
                    {skillsInfo.slice().sort((a, b) => a.id - b.id).map((item: SkillsItem) => (
                        <div key={item.id} 
                        className={`skills-bar ${selectedSkill && selectedSkill.id === item.id && showDesc ? 'active' : ''}`}
                        onClick={() => handleClick(item)}
                        >
                            <div className="skill">
                            {showDesc && selectedSkill && selectedSkill.id === item.id ? (
                                <span className="skill-description">{item.description}</span>
                            ) : (
                                <>
                                <FontAwesomeIcon icon={getFontAwesomeIcon(item.name)} size="5x" />
                                <span>{item.name}</span>
                                </>
                            )}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <Link className="skills-btn" href="/projects">Projects</Link>
            </section>
        </>
    );
};