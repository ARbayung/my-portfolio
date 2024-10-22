import React from "react";
import Navbar from "./Navbar";
import Social from "./Social";
import Hero from "./Hero";
import Project from "./Project";
import Aboutme from "./Aboutme";
import Timeline from "./Timeline";
import Footer from "./Footer";
import Contactme from "./Contactme";

function Home() {
  return (
    <div>
      <Navbar />
      <Social />
      <Hero />
      <Project />
      <Aboutme />
      <Timeline />
      <Contactme />
      <Footer />
    </div>
  );
}

export default Home;
