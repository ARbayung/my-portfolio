import React from "react";
import headshot from "./images/headshot.jpg"
import headshot1 from "./images/headshot1.JPG"
import test1 from "./images/test1.JPG"
import test2 from "./images/test2.JPG"

function Hero(){
    return <header id="Home" class="container-hero flex">
        <div class="profile grid">
            <h1 class="hero-h1">ABISKAR RAI</h1>
            <p class="hero-p">Software engineering graduate from Kingston upon thames, certified front-end developer from edX. I carry a passion to impliment creative, and challanging designs.</p>
            <button class="button-hero">DOWNLOAD CV</button>
        </div>
        <div class="h-right flex">
        <h1 class="hero-h2 slogan">FRONTEND DEVELOPER</h1>
        </div>
        <div class="name-absolute">
            <p class="my-name">ABISKAR RAI</p>
        </div>
    </header>
}

export default Hero;