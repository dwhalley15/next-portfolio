import  "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFontAwesomeIcon from "../../services/iconService/iconService";

export interface SkillsItem{
    id: number;
    name: string;
}

export interface SkillsProps {
    skillsInfo: SkillsItem[];
  }

export default function Skills({ skillsInfo }: SkillsProps){
    return (
        <>
            <section className="skills" id="skills">
                <h2>Skills</h2>
                <div className="skills-container">
                    <div className="skills-row">
                    {skillsInfo.map((item: SkillsItem) => (
                        <div key={item.id} className="skills-bar">
                            <div className="skill">
                                <FontAwesomeIcon icon={getFontAwesomeIcon(item.name)} size="5x"/>
                                <span>{item.name}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};