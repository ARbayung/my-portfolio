import React from "react";
import project from "./images/project.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Project(){
    return<section class="section">
        <div id="Project" class="project-section reveal flex">
            <div class="project-text flex">
                <h2 class="section-sub">MY WORK</h2>
                <h1 class="section-title">MY PROJECTS.</h1>
                <p class="section-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            </div>
            <ul class="project-container flex">
                <li class="project-item">
                    <img src={project} class="project-img"></img>
                    <div class="project-details">
                        <h3 class="card-title">Project1</h3>
                        <p class="card-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="project-item-bottom flex">
                        <button class="project-button">Link to project</button>
                        </div>
                    </div>
                </li>
                <li class="project-item">
                    <img src={project} class="project-img"></img>
                    <div class="project-details">
                        <h3 class="card-title">Project1</h3>
                        <p class="card-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="project-item-bottom flex">
                        <button class="project-button">Link to project</button>
                        </div>
                    </div>
                </li>
                <li class="project-item">
                    <img src={project} class="project-img"></img>
                    <div class="project-details">
                        <h3 class="card-title">Project1</h3>
                        <p class="card-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="project-item-bottom flex">
                        <button class="project-button">Link to project</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}

export default Project