import React from 'react'
import aboutMeImg from "../images/aboutMeImg.png"
function AboutMe() {
    return (
       <div id='about-me'>
 <div className='flex items-center aboutMe justify-between'>
            <div className='w-[38%] text-[white] text-[1.3rem]'>
                <h2 className='text-[1.8rem] '>
                    Hello There !
                </h2>
                <h3 className='text-[2.2rem] text-[rgb(251,194,22)] meText'>
                    I'm Aniqa a Graphic and UI/UX Designer
                </h3>
                <p> nam earum hic ipsam, odio quisquam nemo nihil! Quo magnam rerum ipsam minus sequi! Incidunt.
                Quo magnam rerum ipsam minus sequi! Incidunt.
                </p>
            </div>
            <div className='w-[50%]'>
               <img src={aboutMeImg} alt="" />
            </div>
        </div>
       </div>
       
    )
}

export default AboutMe
