import React from "react";
import headshot from "./images/headshot2.jpg";
import arrow from "./images/—Pngtree—hand drawn arrow_5991030.png";

const Aboutme = () => {
  // const {ref} = useParallax({ speed:10 });

  return (
    <section id="About" class="section2 flex">
      <div class="about-section flex reveal">
        <div class="about-text">
          <h2 class="section-sub2">MY SKILLS</h2>
          <h1 class="section-title2">EXPERIENCE.</h1>
          <p class="section-p2 mt">
            Self-taught web developer passionate about designing and developing
            web applications. Completed a web development bootcamp on edX,
            gaining valuable skills and knowledge. Secured an internship with
            "SinclairLondon," where I redesigned their Loyalty scheme and page,
            contributed to a successful Christmas campaign that garnered over
            100 thousand visitors in a month, and initiated an SEO strategy.
            Love for design fuels my ambition to become a full-stack developer.
            Let's create something extraordinary together!
          </p>
          <img src={arrow} alt="arrow" class="hero-arrrow" />
        </div>
        <img src={headshot} alt="Headshot" class="about-img reveal"></img>
      </div>
    </section>
  );
};

export default Aboutme;
