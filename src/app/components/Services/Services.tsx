import  "./Services.css";

export interface ServicesItem{
    id: number;
    title: string;
    description: string;
}

export interface ServicesProps {
    servicesInfo: ServicesItem[];
  }

const Services: React.FC<ServicesProps> = ({ servicesInfo }) => {
  return(
    <>
      <section className="services" id="services">
        <h2>Services</h2>
        <div className="services-container">
            {servicesInfo.map((item: ServicesItem) => (
                <div key={item.id} className="service-container">
                    <div className="service-text">
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

export default Services;