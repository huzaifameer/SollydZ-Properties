import HeroArea from "../HeroArea/HeroArea.jsx";
import BannerArea from "../Banner/BannerArea.jsx";

function HomePage(){
    return(
        <>
            <HeroArea hero='defaultHeroClass'>
                <BannerArea mainTitle="Effortless Home Sales" subTitle='Unlocking Doors to Modern Transactions'/>
            </HeroArea>
        </>
    )

}
export default HomePage