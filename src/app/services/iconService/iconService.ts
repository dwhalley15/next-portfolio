
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin, faDiscord, faInstagram, faYoutube, faReact, faJava, faUmbraco, faJs, faHtml5, faCss3Alt, faPhp, faGit, faSass, faPython } from "@fortawesome/free-brands-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

export default function getFontAwesomeIcon(iconName: string): IconProp {
    switch (iconName.toLowerCase()) {
        case 'github':
            return faGithub;
        case 'linkedin':
            return faLinkedin;
        case 'discord':
            return faDiscord;
        case 'instagram':
            return faInstagram;
        case 'youtube':
            return faYoutube;
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
            return faCircleExclamation;
    }
}