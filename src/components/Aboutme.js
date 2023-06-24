import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faCss3, faBootstrap, faHtml5 } from "@fortawesome/free-brands-svg-icons";

function Aboutme(){
    return <section id="About" class="section2 flex">
                <div class="about-section flex reveal">
                    <div class="about-text">
                    <h2 class="section-sub2">MY SKILLS</h2>
                    <h1 class="section-title2">EXPERIENCES.</h1>
                        <p class="section-p2 mt">Hi, 
                            I'm a software engineering Graduate, recently 
                            completed a Frontend development Boot Camp with EdX. In my spare time, I like going to the gym, 
                            taking big walks, or having a spontanious day!
                            Searching for an internship/entry-level position in web development. I pride myself on being positive
                            and always looking to uplift and encourage the work environment. I have a high level of experience 
                            with HTML, CSS, and moderate experience with vanilla JS, node.js, and React.js! A knowledge-hungry motivated individual who is ready to give more 
                            than a 100%
                        </p>
                    </div>
                    <div className="about-icons">
                        <FontAwesomeIcon class="about-icon react spin" icon={faReact}></FontAwesomeIcon>
                        <FontAwesomeIcon class="about-icon css bounce2" icon={faCss3}></FontAwesomeIcon>
                        <FontAwesomeIcon class="about-icon bootstrap hithere" icon={faBootstrap}></FontAwesomeIcon>
                        <FontAwesomeIcon class="about-icon html flip" icon={faHtml5}></FontAwesomeIcon>
                    </div>
                </div>
            </section>
}

export default Aboutme;