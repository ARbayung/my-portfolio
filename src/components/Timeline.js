import React from "react";
import niku from "./images/nikubar.png";
import grandir from "./images/grandir.png";
import EdX from "./images/EdX.png";

function Timeline(){
    return <div class="section2">
                <div class="timeline reveal">
                    <div class="timeline-container left-container reveal">
                        <img src={EdX}></img>
                        <div class="timeline-textbox">
                            <small>2022-2023</small>
                            <h2>EdX</h2>
                            <p>I have successfully completed a rigorous six-month interactive Front-End Development Bootcamp, which encompassed comprehensive training in essential programming languages and frameworks. Through this immersive learning experience, I have acquired a solid foundation in front-end development principles and gained practical expertise in utilizing these technologies to build dynamic and responsive web applications.</p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>
                    <div class="timeline-container right-container reveal">
                        <img src={grandir}></img>
                        <div class="timeline-textbox">
                        <small>2020-2023</small>
                            <h2>Grandir</h2>
                            <p>
I have gained valuable experience working within a preschool environment, where I have been committed to upholding the principles of safeguarding and promoting healthy developmental outcomes for children as they prepare for the transition to primary school</p>
                            <span class="right-container-arrow"></span>
                        </div>
                    </div>
                     <div class="timeline-container left-container reveal">
                        <img src={niku}></img>
                        <div class="timeline-textbox">
                            <small>2020-2023</small>
                            <h2>Grandir</h2>
                            <p>
I effectively directed the day-to-day operations of a vibrant cocktail bar and restaurant, skillfully navigating a high-energy setting characterized by fast-paced activities, frequent table turnovers, and a significant number of functions and events.</p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div> 
                </div>
            </div>
}

export default Timeline;