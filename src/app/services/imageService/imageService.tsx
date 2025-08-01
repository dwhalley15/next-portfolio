import theGuitarShopImage from "../../../../public/the-guitar-shop-electric.png";
import inspirationalQuotesImage from "../../../../public/inspirational-quotes-home.png";
import rightTrackImage from "../../../../public/right-track-image.png";
import dailyGrindImage from "../../../../public/daily-grind-account.png";
import battleshipsImage from "../../../../public/battleships-home.png";
import instaTranslateImage from "../../../../public/insta-translate.png";
import instaTranslateListingImage from "../../../../public/insta-translate-listing.jpg";
import dailyGrindListingImage from "../../../../public/daily-grind-listing.jpg";
import battleshipsListingImage from "../../../../public/battleships-listing.jpg";
import inspirationalQuotesListingImage from "../../../../public/inspirational-quotes-listing.jpg";
import theGuitarShopListingImage from "../../../../public/the-guitar-shop-listing.jpg";
import rightTrackListingImage from "../../../../public/right-track-listing.jpg";
import appleGameImage from "../../../../public/apple-catcher-game.jpg";
import appleGameListingImage from "../../../../public/apple-game-listing.jpg";
import portfolioImage from "../../../../public/portfolio-home.png";
import portfolioListingImage from "../../../../public/portfolio-listing.jpg";
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
    instatranslatelisting: instaTranslateListingImage,
    dailygrindlisting: dailyGrindListingImage,
    battleshipslisting: battleshipsListingImage,
    inspirationalquoteslisting: inspirationalQuotesListingImage,
    theguitarshoplisting: theGuitarShopListingImage,
    righttracklisting: rightTrackListingImage,
    applegame: appleGameImage,
    portfolio: portfolioImage,
    portfoliolisting: portfolioListingImage,
    applegamelisting: appleGameListingImage,
    default: imageNotFound,
  };

  function getImageSource(imageName: string): StaticImageData {
    if (!imageName) {
      return imageMap["default"];
    }
    return imageMap[imageName.toLowerCase()] || imageMap["default"];
  }

  export default function ImageService(imageName: string, altText: string): JSX.Element {
    const imageSrc = getImageSource(imageName);
  
    return <Image src={imageSrc.src} alt={altText} width={10000} height={10000} className="project-img" />;
  }