import Link from 'next/link'
import Image from "next/image";
import mainImage from "../../public/main-image.jpg"

export default function NotFound() {
    return (
        <section className='not-found'>
            <div className="image-container">
                <Image className="main-image" src={mainImage} fill alt='Main Image' object-fit="cover"/>
            </div>
            <div className="text-container">
                <h1>This page is not supported by this site</h1>
                <Link href="/">Return to Site</Link>
            </div>
        </section>
    );
}