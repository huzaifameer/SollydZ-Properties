import React from "react";
function HeroArea({hero,children}){

    return(
        <>
            <header className={hero} >
                {children}
            </header>
        </>
    )
}
export default HeroArea;