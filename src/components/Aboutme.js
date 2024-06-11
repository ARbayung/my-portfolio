import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faCss3, faBootstrap, faHtml5, faShopify, faGithub, } from "@fortawesome/free-brands-svg-icons";

function Aboutme(){
    return <section id="About" class="section2 flex">
                <div class="about-section flex reveal">
                    <div class="about-text">
                    <h2 class="section-sub2">MY SKILLS</h2>
                    <h1 class="section-title2">EXPERIENCES.</h1>
                        <p class="section-p2 mt">
                            
Self-taught web developer passionate about designing and developing web applications. Completed a web development bootcamp on edX, gaining valuable skills and knowledge. Secured an internship with "SinclairLondon," where I redesigned their Loyalty scheme and page, contributed to a successful Christmas campaign that garnered over 100 thousand visitors in a month, and initiated an SEO strategy. Love for design fuels my ambition to become a full-stack developer. Let's create something extraordinary together!
                        </p>
                    </div>
                    <div className="about-icons">
                        <FontAwesomeIcon class="about-icon react spin" icon={faReact}></FontAwesomeIcon>
                        <FontAwesomeIcon class="about-icon css bounce2" icon={faCss3}></FontAwesomeIcon>
                        <FontAwesomeIcon class="about-icon bootstrap hithere" icon={faBootstrap}></FontAwesomeIcon>
                        <FontAwesomeIcon class="about-icon html flip" icon={faHtml5}></FontAwesomeIcon>
                        <FontAwesomeIcon class="about-icon" icon={faShopify}></FontAwesomeIcon>
                        <FontAwesomeIcon class="about-icon" icon={faGithub}></FontAwesomeIcon>
                    </div>
                </div>
            </section>
}

export default Aboutme;