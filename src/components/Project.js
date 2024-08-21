import React from "react";
import Recipe from "./images/recipe-finder1.png";
import SinclairLondon from "./images/sinclairlondon.png";
import { Outlet, Link } from "react-router-dom";

function Project() {
  return (
    <section id="Project" class="section">
      <div class="project-container reveal">
        <div id="project-title">
          <h2 class="section-sub">MY WORK</h2>
          <h1 class="section-title">PROJECTS.</h1>
        </div>
        <div class="project-item reveal" id="project1">
          <div class="project-button">
            <Link to="/SinclairLondon">
              <img
                src={SinclairLondon}
                alt="SinclairLondonimg"
                class="project-img"
              />
            </Link>
          </div>
          <hr></hr>
          <div class="project-details flex">
            <h3>01</h3>
            <div class="project-info">
              <h4 class="card-title">Loyalty Program</h4>
              <p>
                2023 - SinclairLondon - Research / Redesign / Develop / Shopify
              </p>
            </div>
          </div>
          <hr></hr>
        </div>
        <div class="project-item reveal" id="project2">
          <a
            href="https://adammbnitro.github.io/Recipe-API-Instructions"
            class="project-button"
          >
            <img src={Recipe} alt="RecipeFinderApp" class="project-img"></img>
          </a>
          <hr></hr>
          <div class="project-details flex">
            <h3>02</h3>
            <div class="project-info">
              <h4 class="card-title">RECIPE FINDER</h4>
              <p>2023 - EdX - RestAPI / Jquery /Github </p>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
      <Outlet />
    </section>
  );
}

export default Project;
