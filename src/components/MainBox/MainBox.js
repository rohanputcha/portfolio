// MainBox.js

import React from 'react';
import Navbar from '../Navbar/Navbar';
import './MainBox.css'

function MainBox() {
  return (
    <div class="main-container">
            <main class="main-content">
                <article class="portfolio">
                    <Navbar/>
                    <section id="about-me">
                        <h2>About Me</h2>
                    </section>
                    <section id="contact">
                        <h2>Contact</h2>
                    </section>
                </article>
            </main>
        </div>
  );
}

export default MainBox;
