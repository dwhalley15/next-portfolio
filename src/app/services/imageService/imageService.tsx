import theGuitarShopImage from "../../../../public/the-guitar-shop-electric.png";
import inspirationalQuotesImage from "../../../../public/inspirational-quotes-home.png";
import rightTrackImage from "../../../../public/right-track-image.png";
import dailyGrindImage from "../../../../public/daily-grind-account.png";
import battleshipsImage from "../../../../public/battleships-home.png";
import instaTranslateImage from "../../../../public/insta-translate.png";
import imageNotFound from "../../../../public/image-not-found.jpg";
import Image, { StaticImageData } from "next/image";

type ImageMap = Record<string, StaticImageData>;

const imageMap: ImageMap = {
    theguitarshop: theGuitarShopImage,
    inspirationqutoes: inspirationalQuotesImage,
    righttrack: rightTrackImage,
    dailygrind: dailyGrindImage,
    battleships: battleshipsImage,
    instatranslate: instaTranslateImage,
    default: imageNotFound,
  };

  function getImageSource(imageName: string): StaticImageData {
    return imageMap[imageName.toLowerCase()] || imageMap["default"];
  }

  export default function ImageService(imageName: string, altText: string): JSX.Element {
    const imageSrc = getImageSource(imageName);
  
    return <Image src={imageSrc.src} alt={altText} width={426} height={240} />;
  }