import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeTab, setActiveTab] = useState('about-me');

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    toggleSectionVisibility(tabId);
  };

  const toggleSectionVisibility = (tabId) => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.style.display = section.id === tabId ? 'block' : 'none';
    });
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <button
            type="button"
            onClick={() => handleNavClick('about-me')}
            style={{ color: activeTab === 'about-me' ? '#FFD700' : '#fff' }}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleNavClick('resume')}
            style={{ color: activeTab === 'resume' ? '#FFD700' : '#fff' }}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            style={{ color: activeTab === 'contact' ? '#FFD700' : '#fff' }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
