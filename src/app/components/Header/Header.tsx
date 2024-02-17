import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faDiscord, faInstagram} from "@fortawesome/free-brands-svg-icons";
import mainImage from "../../assets/images/main-image.jpg";

const Header = () => {
  return(
    <>
      <section className="header" id="header">
        <div className="image-container">
            <Image className="main-image" src={mainImage} fill alt="" objectFit="cover"/>
        </div>
        <div className="text-container">
          <h1>Hi, It's <span>David</span></h1>
          <h3 className="typing-text">I'm a <span></span></h3>
          <p>A hard working and high-achieving student, currently reading a Bachelor of Science Degree in Software Engineering. A growing interest and competency in web and software development.</p>
          <div className="icons">
            <Link href="https://www.linkedin.com/in/davidwhalleyprofile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="1x"/></Link>
            <Link href="https://github.com/dwhalley15" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="1x"/></Link>
            <Link href="https://www.instagram.com/ortheyus" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="1x"/></Link>
            <Link href="https://discord.com/users/212627113147105280" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} size="1x"/></Link>
          </div>
          <Link href="#contact" className="btn">Hire Me</Link>
        </div>
      </section>
    </>
  );
};

export default Header;

//https://www.youtube.com/watch?v=DkrfsFB_nms
//13:32

