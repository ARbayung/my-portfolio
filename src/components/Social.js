import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Social() {
  const [isHeroRightVisible, setIsHeroRightVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById("right");
      const landingPageHeight = window.innerHeight; // Height of the viewport

      if (window.scrollY > landingPageHeight / 3) {
        target.classList.add("hero-right-disappear");
        console.log(target.classList);
      } else {
        target.classList.remove("hero-right-disappear");
        console.log("delete");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isHeroRightVisible && (
        <div className="hero-right flex" id="right">
          <div class="flex center">
            <p class="hero-slogan">FIND ME AT</p>
            <a href="https://www.linkedin.com/in/abiskar-rai/">
              <FontAwesomeIcon
                icon={faLinkedin}
                class="nav-icon"
                alt="LinkedinIcon"
              />
            </a>
            <a href="https://github.com/ARbayung">
              <FontAwesomeIcon
                icon={faGithub}
                class="nav-icon"
                alt="GithubIcon"
              />
            </a>
          </div>
        </div>
      )}

      {/* Other content below the hero-right div */}
    </div>
  );
}

export default Social;
