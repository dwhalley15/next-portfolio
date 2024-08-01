import  "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFontAwesomeIcon from "@/app/services/iconService/iconService";
import Link from "next/link";

export interface ServicesItem{
    id: number;
    title: string;
    description: string;
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
                    <div className="service-text">
                        <FontAwesomeIcon icon={getFontAwesomeIcon(item.title.toLowerCase().replace(/\s+/g, ''))} size="8x"/>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
  );
};