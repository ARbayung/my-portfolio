import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub , faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Social(){
    return <div class="hero-right flex">
                <div class="hero-right-sticky flex center">
                    <p class="hero-slogan">FRONTEND DEV</p>
                    <a href="https://www.linkedin.com/in/abiskar-rai/"><FontAwesomeIcon icon={faLinkedin} class="nav-icon"/></a>
                    <a href="https://github.com/ARbayung"><FontAwesomeIcon icon={faGithub} class="nav-icon"/></a>
                </div>
            </div> 
}

export default Social;