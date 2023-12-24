import HeroArea from "../HeroArea/HeroArea.jsx";
import BannerArea from "../Banner/BannerArea.jsx";
import {Link} from "react-router-dom";

function Properties(){
    return(
        <>
            <HeroArea hero='propertiesHero'>
                <BannerArea mainTitle="Find Your Property" subTitle="Empowering Sellers, Delighting Buyers.">
                    <Link to='/' className='banner-btn'>
                        Back to Home
                    </Link>
                </BannerArea>
            </HeroArea>
        </>
    )

}
export default Properties