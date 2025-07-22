
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn, faDiscord, faInstagram, faYoutube, faReact, faJava, faUmbraco, faJs, faHtml5, faCss3Alt, faPhp, faGit, faSass, faPython, faWordpress, faVuejs, faBootstrap, faAngular, faNpm, faJira, faAndroid, faGulp } from "@fortawesome/free-brands-svg-icons";
import { faCircleExclamation, faLaptopCode, faFont, faCode, faDatabase, faMagnifyingGlass, faUsersRectangle } from "@fortawesome/free-solid-svg-icons"

export default function getFontAwesomeIcon(iconName: string): IconProp {
    switch (iconName.toLowerCase()) {
        case 'github':
            return faGithub;
        case 'linkedin':
            return faLinkedinIn;
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
        case 'webdesign':
            return faLaptopCode;
        case 'frontenddevelopment':
            return faFont;
        case 'backenddevelopment':
            return faCode;
        case 'databasedesign':
            return faDatabase;
        case 'seooptimization':
            return faMagnifyingGlass;
        case 'ui/uxdesign':
            return faUsersRectangle;
        case 'wordpress':
            return faWordpress;
        case 'vuejs':
            return faVuejs;
        case 'bootstrap':
            return faBootstrap;
        case 'angular':
            return faAngular;
        case 'npm':
            return faNpm;
        case 'jira':
            return faJira;
        case 'android':
            return faAndroid;
        case 'gulp':
            return faGulp;
        default:
            return faCircleExclamation;
    }
}