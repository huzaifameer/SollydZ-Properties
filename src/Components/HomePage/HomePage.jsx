import HeroArea from "../HeroArea/HeroArea.jsx";
import BannerArea from "../Banner/BannerArea.jsx";
import {Link} from "react-router-dom";
import ServicesArea from "../ServicesArea/ServicesArea.jsx";
import FeaturedProperty from "../FeaturedProperty/FeaturedProperty.jsx";

function HomePage(){

    return(
        <>
            <HeroArea hero='defaultHeroClass'>
                <BannerArea mainTitle="Effortless Home Sales" subTitle='Unlocking Doors to Modern Transactions'>
                    <Link to='/properties' className='banner-btn'>{/*button for the properties page*/}
                        Find Properties
                    </Link>
                </BannerArea>
            </HeroArea>
            <ServicesArea/>
            <FeaturedProperty />
        </>
    )

}
export default HomePage