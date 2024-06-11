import React from "react";
import EdX from "./images/EdX.png";
import SinclairLondon from "./images/SinclairLondon.jpg";

function Timeline(){
    return <div class="section2">
        <div class="timeline reveal">
                    <div class="timeline-container left-container reveal">
                        <img src={SinclairLondon}></img>
                        <div class="timeline-textbox">
                            <small>Serptember 2023 - December 2023</small>
                            <h2>SinclairLondon</h2>
                            <p>I was offered a fast pace learning environment, with lots of projects with real life impact. Alongside another intern web developer, I was engaged in a rewarding experience where I was trusted to make real impact to an excisting business. I was trusted to redesign their Loyalty scheme, create an SEO strategy, and enchance the UI. SinclairLondon was Shopify based which was a new experience for myself which I found alien at first but quickly adapted to the CMS. Additionally I experienced making custom components using liquid, and using plugins such as Smile.io and Klaviyo. Additionally the director, Alicya Sinclair taught me about important soft skills such as time management and effective communication.</p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>
                
                <div class="timeline reveal">
                    <div class="timeline-container right-container reveal">
                        <img src={EdX}></img>
                        <div class="timeline-textbox">
                            <small>October 2022 - April 2023</small>
                            <h2>EDX</h2>
                            <p>I was lucky enough to have an amazing Mentor who had great positions in big tech companies such as Amazon. I learnt about all of the basics of Web development engaging in interactive lessons with oppertunities to test out theory with practical challanges. I found that having a challange to work on over the weekend was both equally challanging and fun! I had a realisaton that this is something I would love to make into a career. A project I was proud of was the 'recipe finder' app. The idea of the app was to use a opensource API to grab recipes and display for the users accordingly to the prompt. I got to use Github in a group dynamic and was able to experience challanges in managing the version control system giving me valuable knowledge. I am now looking for a position to use my skills and advance in my career as a developer.</p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
}

export default Timeline;