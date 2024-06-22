import React from 'react'
 import LogoImage2 from "../images/Logo2.png"
function Logo({width = "160px" , height = "160px"}) {
    return (
        <div>
            <img src={LogoImage2} alt='Logo image' width={width} height={height} />
        </div>
    )
}

export default Logo
