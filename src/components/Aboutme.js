import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faCss3, faBootstrap, faHtml5 } from "@fortawesome/free-brands-svg-icons";

function Aboutme(){
    return <section id="About" class="section2 flex">
                <div class="about-section flex">
                    <div class="about-text">
                    <h2 class="section-sub2">MY SKILLS</h2>
                    <h1 class="section-title2">EXPERIENCES.</h1>
                        <p class="section-p2 mt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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