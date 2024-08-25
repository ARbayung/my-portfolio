import React from "react";

function Hero() {
  return (
    <header id="Home" class="container-hero flex">
      <div class="profile">
        <h1 class="hero-h1">RAI</h1>
        <h1 class="hero-h1">ABISKAR.</h1>
        <hr></hr>
        <div class="flex hero-sub">
          <a
            href="https://drive.google.com/file/d/1-S3Z8w6Fh8PgznO9UVQeDwr6mxEbOHOq/view?usp=sharing"
            class="button-hero"
          >
            DOWNLOAD CV
          </a>
          <hr></hr>
          <div>
            <h2 class="hero-h2">FRONT- END DEVELOPER</h2>
          </div>
        </div>
        <hr></hr>
      </div>
      {/* <div class="name-absolute">
            <p class="my-name">ABISKAR RAI</p>
        </div> */}
    </header>
  );
}

export default Hero;
