import  "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faReact, faJava, faUmbraco, faJs, faHtml5, faCss3Alt, faPhp, faGit, faSass, faPython} from "@fortawesome/free-brands-svg-icons";

export interface SkillsItem{
    id: number;
    name: string;
}

export interface SkillsProps {
    skillsInfo: SkillsItem[];
  }

const Skills: React.FC<SkillsProps> = ({ skillsInfo }) => {
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

export default Skills;

function getFontAwesomeIcon(socialName: string): IconProp {
    switch (socialName.toLowerCase()) {
        case 'react':
            return faReact;
        case 'javascript':
            return faJs;
        case 'java':
            return faJava;
        case 'umbraco':
            return faUmbraco;
        case 'html':
            return faHtml5;
        case 'css':
            return faCss3Alt;
        case 'php':
            return faPhp;
        case 'git':
            return faGit;
        case 'sass':
            return faSass;
        case 'python':
            return faPython; 
        default:
            return faJs;
    }
}