import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page-div">
      <div className="contact-card">
        <h2>Email</h2>
        <p>
          Email me at: <a href="mailto:rputcha@umich.edu">rputcha@umich.edu</a>
        </p>
      </div>
      <div className="contact-card">
        <h2>Phone</h2>
        <p>
          Call me at: <a href="tel:+17343557742">+1 (734) 355-7742</a>
        </p>
      </div>
      <div className="contact-card">
        <h2>Address</h2>
        <p>1888 Heron View Dr, West Bloomfield, MI 48324, USA</p>
      </div>
      <div className="contact-card">
        <h2>Social Media</h2>
        <p>Connect with me on:</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/rohan-putcha-b640b0197/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/rohanputcha/">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
