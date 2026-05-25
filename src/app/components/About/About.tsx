import "./About.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFontAwesomeIcon from "@/app/services/iconService/iconService";
import { getAboutInfo } from "@/app/services/dbServices/dbService";
import NotFound from "@/app/not-found";
import TextContainer from "../Motion/TextContainer/TextContainer";

export interface AboutInfo {
    description: string;
    journey: string[];
    frontend: number;
    backend: number;
    web: number;
    mobile: number;
}


export default async function About() {


    const aboutInfo = await getAboutInfo();


    return (
        <>

        </>
    );
}
