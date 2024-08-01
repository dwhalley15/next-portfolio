import Link from 'next/link'
import Image from "next/image";
import mainImage from "../../public/main-image.jpg";
import { getNavLinks, getSocialLinks } from "./services/dbServices/dbService";
import { NavbarItem, Navbar, SocialLinkItem, Footer  } from './services/importService/importService';

export default async function NotFound() {

    const navLinks = await getNavLinks();

    const socialLinks = await getSocialLinks();

    return (
        <>
            <section className='not-found'>
                <div className="image-container">
                    <Image className="main-image" src={mainImage} fill alt='Main Image' object-fit="cover" />
                </div>
                <div className="text-container">
                    <h1>This page is not supported by this site</h1>
                </div>
            </section>
        </>
    );
}