import  "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFontAwesomeIcon from "@/app/services/iconService/iconService";

export interface ServicesItem{
    id: number;
    title: string;
    description: string;
}

export interface ServicesProps {
    servicesInfo: ServicesItem[];
  }

export default function Services({ servicesInfo }: ServicesProps){
  return(
    <>
      <section className="services" id="services">
        <h2>Services</h2>
        <div className="services-container">
            {servicesInfo.map((item: ServicesItem) => (
                <div key={item.id} className="service-container">
                    <div className="service-text">
                        <FontAwesomeIcon icon={getFontAwesomeIcon(item.title.toLowerCase().replace(/\s+/g, ''))} size="8x"/>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
  );
};