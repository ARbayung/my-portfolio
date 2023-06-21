import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

function Navbar(){
    return <nav>
        <div class="container-nav flex">
            <h1 class="logo">AR</h1>
            <hr class="hr-nav"></hr>
            <ul class=" navbar flex">
                
                <li><a class="nav-item" href="#Home">HOME</a></li>
    
                <li><a class="nav-item" href="#Project"> PROJECTS</a></li>
               
                <li><a class="nav-item" href="" >CONTACTME</a></li>

                <li><a class="nav-item" href="#About" >ABOUTME</a></li>
                
            </ul>
        </div>
    </nav>
}

export default Navbar;