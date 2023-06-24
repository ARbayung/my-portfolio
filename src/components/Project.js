import React from "react";
import project from "./images/project.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Furnishly from "./images/furnishly.png"
import Recipe from "./images/recipe-finder.png"
import ReadME from "./images/readme.png"

function Project(){
    return<section id="Project" class="section">
        <div class="project-section reveal flex">
            <div class="project-text flex">
                <h2 class="section-sub">MY WORK</h2>
                <h1 class="section-title">MY PROJECTS.</h1>
                <p class="section-p">During my tenure in a comprehensive web development bootcamp, I have actively engaged in a multitude of projects, adeptly navigating the challenges presented both independently and collaboratively within group settings. </p>
            </div>
            <ul class="project-container flex">
                <li class="project-item">
                    <img src={Furnishly} class="project-img"></img>
                    <div class="project-details">
                        <h3 class="card-title">FURNITURE SHOP</h3>
                        <p class="card-p">This project showcased developing a dynamic website 
                        application that makes use of React’s ability to utilize 
                        components.</p>
                        <div class="project-item-bottom flex">
                        <a href="https://furniture-store-jade.vercel.app/Landing" class="project-button">LINK</a>
                        </div>
                    </div>
                </li>
                <li class="project-item">
                    <img src={Recipe} class="project-img"></img>
                    <div class="project-details">
                        <h3 class="card-title">RECIPE FINDER</h3>
                        <p class="card-p">A web application that renders food recipes from 
                        multiple APIs depending on the user’s input. </p>
                        <div class="project-item-bottom flex">
                        <a href="https://adammbnitro.github.io/Recipe-API-Instructions/" class="project-button">LINK</a>
                        </div>
                    </div>
                </li>
                <li class="project-item">
                    <img src={ReadME} class="project-img"></img>
                    <div class="project-details">
                        <h3 class="card-title">README GENERATOR</h3>
                        <p class="card-p">This project aimed to create a program that aids 
                        developers with generating ReadMe files through the 
                        terminal.</p>
                        <div class="project-item-bottom flex">
                        <a href="https://github.com/ARbayung/README-Generator" type="button" class="project-button">LINK</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}

export default Project