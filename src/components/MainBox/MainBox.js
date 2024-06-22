// MainBox.js

import React from "react";
import Navbar from "../Navbar/Navbar";
import "./MainBox.css";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Coursework from "../Coursework/Coursework";
import profilepic from "../../assets/images/profile-pic.jpg";

const MOBILE_SCREEN_WIDTH = 1350;

function MainBox() {
  const isMobile = window.screen.width < MOBILE_SCREEN_WIDTH;
  const element = isMobile ? (
    <div className="main-container">
      <div className="topbar main-content">
        <div className="profile-picture">
          <img src={profilepic} alt="Profile" />
        </div>
        <h1>Rohan Putcha</h1>
        <hr></hr>
        <h3>University of Michigan - Ann Arbor</h3>
        <h3>
          Email: &nbsp;<a href="mailto:rputcha@umich.edu">rputcha@umich.edu</a>
        </h3>
        <h3>
          Phone: <a href="tel:+17343557742">(734) 355-7742</a>
        </h3>
      </div>
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
          <section id="projects">
            <h2 className="section-title">Projects</h2>
            <hr></hr>
            <Projects />
          </section>
          <section id="coursework">
            <h2 className="section-title">Coursework</h2>
            <hr></hr>
            <Coursework />
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
  ) : (
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
          <section id="projects">
            <h2 className="section-title">Projects</h2>
            <hr></hr>
            <Projects />
          </section>
          <section id="coursework">
            <h2 className="section-title">Coursework</h2>
            <hr></hr>
            <Coursework />
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

  return element;
}

export default MainBox;
