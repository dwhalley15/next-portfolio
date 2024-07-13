import theGuitarShopImage from "../../../../public/the-guitar-shop-electric.png";
import inspirationalQuotesImage from "../../../../public/inspirational-quotes-home.png";
import rightTrackImage from "../../../../public/right-track-image.png";
import dailyGrindImage from "../../../../public/daily-grind-account.png";
import battleshipsImage from "../../../../public/battleships-home.png";
import imageNotFound from "../../../../public/image-not-found.jpg";
import Image from "next/image";

export default function ImageService(imageName: string, altText: string){
    switch(imageName.toLowerCase()){
        case 'theguitarshop':
            return <Image src={theGuitarShopImage} alt={altText} width={426} height={240}/>;
        case 'inspirationqutoes':
            return <Image src={inspirationalQuotesImage} alt={altText} width={426} height={240}/>;
        case 'righttrack':
            return <Image src={rightTrackImage} alt={altText} width={426} height={240}/>;
        case 'dailygrind':
            return <Image src={dailyGrindImage} alt={altText} width={426} height={240}/>;
        case 'battleships':
            return <Image src={battleshipsImage} alt={altText} width={426} height={240}/>;
        default: <Image src={imageNotFound} alt={altText} width={426} height={240}/>;
    }
}