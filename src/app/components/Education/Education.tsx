import  "./Education.css";
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface EducationItem{
    id: number;
    title: string;
    description: string;
}

export interface EducationProps {
    educationInfo: EducationItem[];
  }

const Education: React.FC<EducationProps> = ({ educationInfo }) => {
  return(
    <>
      <section className="education" id="education">
        <h2>Education</h2>
        <div className="timeline">
            {educationInfo.map((item: EducationItem, index: number) => (
                <div key={item.id} className={`education-container ${index % 2 === 0 ? "left" : "right"}`}>
                    <FontAwesomeIcon className="education-icon" icon={faUserGraduate} size="xl" />
                    <div className="education-text">
                        <div className="education-title">
                            <h4>{item.title}</h4>
                        </div>
                        <div className="education-description">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Education;