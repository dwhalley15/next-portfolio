import  "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFontAwesomeIcon from "@/app/services/iconService/iconService";
import Link from "next/link";

export interface ServicesItem{
    id: number;
    title: string;
    description: string;
    points: string[];
}

export interface ServicesProps {
    servicesInfo: ServicesItem[];
    servicesDescription: string;
  }

export default function Services({ servicesInfo, servicesDescription }: ServicesProps){
  return(
    <>
      <section className="services" id="services">
        <h1>Services</h1>
        <p>{servicesDescription}</p>
        <div className="services-container">
            {servicesInfo.map((item: ServicesItem) => (
                <div key={item.id} className="service-container">
                  <FontAwesomeIcon className="service-icon" icon={getFontAwesomeIcon(item.title.toLowerCase().replace(/\s+/g, ''))} size="3x"/>
                    <div className="service-text">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                    <ul>
                        {item.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className="services-link">
          <h2>{"Ready to Get Started?"}</h2>
          <p>{"Let's discuss how I can help bring your vision to life with professional web development services."}</p>
          <Link className="btn" href="/contact">{"Get in Touch"}</Link>
        </div>
      </section>
    </>
  );
};