
// eslint-disable-next-line react/prop-types
function BannerArea({children,mainTitle,subTitle}){
    return(
        <div className='bannerArea'>
            <h1>{mainTitle}</h1>
            <div></div>
            <p>{subTitle}</p>
            {children}
        </div>
    )
}
export default BannerArea;