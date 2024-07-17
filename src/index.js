import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from './components/Aboutme';
import Footer from "./components/Footer"
import Project from './components/Project';
import Social from './components/Social';
import Timeline from './components/Timeline';

const root = ReactDOM.createRoot(document.getElementById('root'));
window.addEventListener("scroll", reveal);
function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i< reveals.length; i++){
    
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add("active");
    }else{
      reveals[i].classList.remove("active");
    }
    }
}
root.render(
  <React.StrictMode>
    <Navbar/>
    <Social/>
    <Hero/>
    <Aboutme/>
    <Timeline/>
    <Project/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
