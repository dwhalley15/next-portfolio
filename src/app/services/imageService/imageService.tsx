import theGuitarShopImage from "../../../../public/the-guitar-shop-electric.png";
import inspirationalQuotesImage from "../../../../public/inspirational-quotes-home.png";
import imageNotFound from "../../../../public/image-not-found.jpg";
import Image from "next/image";

export default function ImageService(imageName: string, altText: string){
    switch(imageName.toLowerCase()){
        case 'theguitarshop':
            return <Image src={theGuitarShopImage} alt={altText} width={426} height={240}/>;
        case 'inspirationqutoes':
            return <Image src={inspirationalQuotesImage} alt={altText} width={426} height={240}/>;
        default: <Image src={imageNotFound} alt={altText} width={426} height={240}/>;
    }
}