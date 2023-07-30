// MainBox.js

import React from "react";
import Navbar from "../Navbar/Navbar";
import "./MainBox.css";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

function MainBox() {
  return (
    <div className="main-container">
      <main className="main-content">
        <article className="portfolio">
          <Navbar />
          <section id="about-me">
            <h2 className="section-title">About Me</h2>
            <hr></hr>
            <AboutMe />
          </section>
          <section id="resume">
            <h2 className="section-title">Resume</h2>
            <hr></hr>
            <Resume />
          </section>
          <section id="skills">
            <h2 className="section-title">Skills</h2>
            <hr></hr>
            <Skills />
          </section>
          <section id="contact">
            <h2 className="section-title">Contact</h2>
            <hr></hr>
            <Contact />
          </section>
        </article>
      </main>
    </div>
  );
}

export default MainBox;
