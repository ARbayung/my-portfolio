import React from "react";
import EdX from "./images/EdX.png";
import SinclairLondon from "./images/SinclairLondon.jpg";

function Timeline() {
  return (
    <div class="section2">
      <div class="timeline reveal">
        <div class="timeline-container left-container reveal">
          <img src={SinclairLondon} alt="SL logo"></img>
          <div class="timeline-textbox">
            <small>Serptember 2023 - December 2023</small>
            <h2>SinclairLondon</h2>
            <p>
              I was offered a fast pace learning environment, with lots of
              projects with real life impact. Alongside another intern web
              developer, I was engaged in a rewarding experience where I was
              trusted to make real impact to an excisting business. I was
              trusted to redesign their Loyalty scheme, create an SEO strategy,
              and enchance the UI.
            </p>
            <span class="left-container-arrow"></span>
          </div>
        </div>

        <div class="timeline reveal">
          <div class="timeline-container right-container reveal">
            <img src={EdX} alt="Edx"></img>
            <div class="timeline-textbox">
              <small>October 2022 - April 2023</small>
              <h2>EDX</h2>
              <p>
                I was lucky enough to have an amazing Mentor who had great
                positions in big tech companies such as Amazon. I learnt about
                all of the basics of Web development engaging in interactive
                lessons with oppertunities to test out theory with practical
                challanges. I found that having a challange to work on over the
                weekend was both equally challanging and fun!
              </p>
              <span class="right-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
