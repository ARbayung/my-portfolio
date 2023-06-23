import React from "react";
import niku from "./images/nikubar.png";
import grandir from "./images/grandir.png";

function Timeline(){
    return <div class="section2">
                <div class="timeline reveal">
                    <div class="timeline-container left-container">
                        <img src={niku}></img>
                        <div class="timeline-textbox">
                            <h2>Grandir</h2>
                            <small>2020-2023</small>
                            <p>Successfully transitioned over 100 children into primary school through nurturing and supportive teaching methods. Coordinated engaging extracurricular activities such as P.E and forest school to enhance children's learning experiences</p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>
                    <div class="timeline-container right-container">
                        <img src={grandir}></img>
                        <div class="timeline-textbox">
                            <h2>Grandir</h2>
                            <small>2020-2023</small>
                            <p>Successfully transitioned over 100 children into primary school through nurturing and supportive teaching methods. Coordinated engaging extracurricular activities such as P.E and forest school to enhance children's learning experiences</p>
                            <span class="right-container-arrow"></span>
                        </div>
                    </div>
                     <div class="timeline-container left-container">
                        <img src={grandir}></img>
                        <div class="timeline-textbox">
                            <h2>Grandir</h2>
                            <small>2020-2023</small>
                            <p>Successfully transitioned over 100 children into primary school through nurturing and supportive teaching methods. Coordinated engaging extracurricular activities such as P.E and forest school to enhance children's learning experiences</p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div> 
                </div>
            </div>
}

export default Timeline;