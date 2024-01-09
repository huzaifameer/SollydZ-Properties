
// eslint-disable-next-line react/prop-types
function BannerArea({children,mainTitle,subTitle}){
    return(
        <div className='bannerArea'>
            <h1>{mainTitle}</h1>{/*setting the main title*/}
            <div></div>
            <p>{subTitle}</p>{/*adding the sub heading*/}
            {children}{/*getting the children props*/}
        </div>
    )
}
export default BannerArea;