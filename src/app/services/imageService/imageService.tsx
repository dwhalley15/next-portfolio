import theGuitarShopImage from "../../../../public/the-guitar-shop-electric.png";
import theGuitarShopHome from "../../../../public/the-guitar-shop-home.png";
import theGuitarShopMobile from "../../../../public/the-guitar-shop-mobile.png";
import inspirationalQuotesImage from "../../../../public/inspirational-quotes-home.png";
import rightTrackImage from "../../../../public/right-track-image.png";
import rightTrackCourses from "../../../../public/right-track-courses.png";
import rightTrackNewTask from "../../../../public/right-track-new-task.png";
import dailyGrindImage from "../../../../public/daily-grind-account.png";
import dailyGrindActivity from "../../../../public/daily-grind-activity.png";
import dailyGrindProfile from "../../../../public/daily-grind-profile.png";
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
import appleGameImageInGame from "../../../../public/apple-catcher-image-in-game.png";
import portfolioImage from "../../../../public/portfolio-home.png";
import portfolioMobile from "../../../../public/portfolio-mobile.png";
import portfolioProjects from "../../../../public/portfolio-projects.png";
import portfolioListingImage from "../../../../public/portfolio-listing.jpg";
import medicalPortfoliosHome from "../../../../public/medical-portfolios-home.png";
import medicalPortfoliosListing from "../../../../public/medical-portfolios-listing.jpg";
import medicalPortfoliosSearch from "../../../../public/medical-portfolios-search.png";
import medicalPortfoliosPortfolio from "../../../../public/medical-portfolios-portfolio.png";
import medicalPortfoliosMobile from "../../../../public/medical-portfolios-mobile.png";
import imageNotFound from "../../../../public/image-not-found.jpg";
import Image, { StaticImageData } from "next/image";

type ImageMap = Record<string, StaticImageData>;

const imageMap: ImageMap = {
    theguitarshop: theGuitarShopImage,
    theguitarshophome: theGuitarShopHome,
    theguitarshopmobile: theGuitarShopMobile,
    inspirationqutoes: inspirationalQuotesImage,
    righttrack: rightTrackImage,
    righttrackcourses: rightTrackCourses,
    righttracknewtask: rightTrackNewTask,
    dailygrind: dailyGrindImage,
    dailygrindactivity: dailyGrindActivity,
    dailygrindprofile: dailyGrindProfile,
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
    applegameingame: appleGameImageInGame,
    portfoliomobile: portfolioMobile,
    portfolioprojects: portfolioProjects,
    medicalportfolioshome: medicalPortfoliosHome,
    medicalportfolioslisting: medicalPortfoliosListing,
    medicalportfoliossearch: medicalPortfoliosSearch,
    medicalportfoliosportfolio: medicalPortfoliosPortfolio,
    medicalportfoliosmobile: medicalPortfoliosMobile,
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