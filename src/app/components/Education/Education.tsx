import  "./Education.css";
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface EducationItem{
    id: number;
    title: string;
    description: string;
    start_date: Date;
    end_date: Date | null;
}
export interface EducationProps {
    educationInfo: EducationItem[];
    educationDescription: string;
  }

export default function Education({ educationInfo, educationDescription }: EducationProps){

  const sortedEducationInfo = [...educationInfo].sort((a, b) => {
    const yearA = a.start_date ? a.start_date.getFullYear() : 0;
    const yearB = b.start_date ? b.start_date.getFullYear() : 0;
  
    return yearB - yearA;
  });

  return(
    <>
      <section className="education" id="education">
        <h1>Education</h1>
        <p>{educationDescription}</p>
        <div className="timeline">
            {sortedEducationInfo.map((item: EducationItem, index: number) => (
                <div key={item.id} className={`education-container ${index % 2 === 0 ? "left" : "right"}`}>
                    <div className="education-icon">
                        <FontAwesomeIcon icon={faUserGraduate} size="xl" />
                    </div>
                    <div className="education-text">
                        <div className="education-title">
                            <h2>{item.title}</h2>
                        </div>
                        <div className="education-dates">
                          <h3>
                            {item.start_date && new Date(item.start_date).getFullYear()} -{' '}
                            {item.end_date ? new Date(item.end_date).getFullYear() : 'Present'}
                          </h3>
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