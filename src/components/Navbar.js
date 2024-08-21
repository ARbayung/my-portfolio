import React from "react";

function Navbar() {
  return (
    <nav>
      <h1 class="logo">AR</h1>
      <hr class="hr-nav"></hr>
      <ul class="navbar flex">
        <li>
          <a class="nav-item" href="#Home">
            HOME
          </a>
        </li>

        <li>
          <a class="nav-item" href="#About">
            ABOUTME
          </a>
        </li>

        <li>
          <a class="nav-item" href="#Project">
            {" "}
            PROJECTS
          </a>
        </li>

        <li>
          <a class="nav-item" href="#Footer">
            CONTACTME
          </a>
        </li>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
