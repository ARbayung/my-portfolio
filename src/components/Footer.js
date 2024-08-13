import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowUp } from "@fortawesome/free-solid-svg-icons";

function Footer(){
    return <footer id="Footer" class="footer flex">
            <ul>
                <h3>LETS WORK TOGETHER</h3>
                <hr></hr>
                <p>Designed and Developed by Abiskar Rai</p>
                <hr></hr>
                <li>Email: a.bayung28@gmail.com</li>
                <li>Phone: 07845011585</li>
                <hr></hr>
            </ul>
            <div class="arrow-container reveal">
                <a href="#Home"><FontAwesomeIcon class="arrow-up bounce" icon={faLongArrowUp}></FontAwesomeIcon></a>
            </div>
    </footer>
}

export default Footer;