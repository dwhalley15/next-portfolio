import "./Education.css";
import { faGraduationCap, faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export interface EducationItem {
  id: number;
  title: string;
  description: string;
  start_date: Date;
  end_date: Date | null;
  course: string;
  award: string;
}
export interface EducationProps {
  educationInfo: EducationItem[];
  educationDescription: string;
}

export default function Education({ educationInfo, educationDescription }: EducationProps) {

  const sortedEducationInfo = [...educationInfo].sort((a, b) => {
    const yearA = a.start_date ? a.start_date.getFullYear() : 0;
    const yearB = b.start_date ? b.start_date.getFullYear() : 0;

    return yearB - yearA;
  });

  return (
    <>
      <section className="education" id="education">
        <h1>Education</h1>
        <p>{educationDescription}</p>
        <div className="timeline">
          {sortedEducationInfo.map((item: EducationItem, index: number) => (
            <div key={item.id} className="education-container">
              <div className={`education-text ${index === 0 ? "top" : index === 1 ? "second" : "other"}`}>
                <div className="education-title">
                  <FontAwesomeIcon icon={faGraduationCap} size="2x" className="education-icon" />
                  <h2>{item.title}</h2>
                  <span className="education-dates">
                    {item.start_date && new Date(item.start_date).getFullYear()} -{' '}
                    {item.end_date ? new Date(item.end_date).getFullYear() : 'Present'}
                  </span>
                </div>
                <div className="education-content">
                  <h3>{item.course}</h3>
                  <div className="education-award">
                    <FontAwesomeIcon icon={faAward} size="1x" />
                    <h4>{item.award}</h4>
                  </div>
                  <div className="education-description">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="education-bottom">
          <h2>{"Continuous Learning"}</h2>
          <p>{"Education is a lifelong journey. I'm always seeking new opportunities to expand my knowledge and stay current with the latest technologies and best practices in software development."}</p>
          <div className="education-spans">
            <span className="education-span-top">
              {"Online Courses"}
            </span>
            <span className="education-span-middle">
              {"Technical Certifications"}
            </span>
            <span className="education-span-bottom">
              {"Industry Conferences"}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};