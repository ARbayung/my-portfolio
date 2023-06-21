import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub , faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Social(){
    return <div class="hero-right">
        <div class="hero-right-sticky flex center">
            <p class="hero-slogan">FRONTEND DEV</p>
            <FontAwesomeIcon icon={faLinkedin} class="nav-icon"/>
            <FontAwesomeIcon icon={faGithub} class="nav-icon"/>
        </div>
    </div> 
}

export default Social;