// Sidebar.js

import React from 'react';
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar-container">
        <aside className="sidebar">
            <div className="profile-picture">
                <img src="https://raw.githubusercontent.com/rohanputcha/portfolio/content/assets/images/profile-pic.jpg" alt="Profile" />
            </div>
            <h2>Rohan Putcha</h2>
            <p>University of Michigan - Ann Arbor</p>
            <p>Email: rputcha@umich.edu</p>
        </aside>
    </div>
  );
}

export default Sidebar;
