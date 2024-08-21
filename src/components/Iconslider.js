import React from "react";
import {
  faHtml5,
  faCss3,
  faReact,
  faGithub,
  faShopify,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icons = [faHtml5, faCss3, faReact, faGithub, faShopify];

const Iconslider = () => {
  return (
    <div className="iconslider-container">
      <div className="iconslider-animate reveal">
        {icons.map((icon, index) => (
          <div key={index} className="slider-icon-wrapper">
            <FontAwesomeIcon icon={icon} className="slider-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Iconslider;
