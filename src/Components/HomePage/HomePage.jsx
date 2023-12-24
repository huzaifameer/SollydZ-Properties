import HeroArea from "../HeroArea/HeroArea.jsx";
import BannerArea from "../Banner/BannerArea.jsx";
import {Link} from "react-router-dom";

function HomePage(){
    return(
        <>
            <HeroArea hero='defaultHeroClass'>
                <BannerArea mainTitle="Effortless Home Sales" subTitle='Unlocking Doors to Modern Transactions'>
                    <Link to='/properties' className='banner-btn'>
                        Find Properties
                    </Link>
                </BannerArea>
            </HeroArea>
        </>
    )

}
export default HomePage