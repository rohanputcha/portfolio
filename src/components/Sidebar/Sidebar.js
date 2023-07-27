// Sidebar.js

import React from 'react';
import './Sidebar.css'
import profilepic from '../../assets/images/profile-pic.jpg'

function Sidebar() {
  return (
    <div className="sidebar-container">
        <aside className="sidebar">
            <div className="profile-picture">
                <img src={profilepic} alt="Profile" />
            </div>
            <h2>Rohan Putcha</h2>
            <hr></hr>
            <h3>University of Michigan - Ann Arbor</h3>
            <h3>Email: &nbsp;<a href='mailto:rputcha@umich.edu'>rputcha@umich.edu</a></h3>
            <h3>Phone: <a href="tel:+17343557742">(734) 355-7742</a></h3>
        </aside>
    </div>
  );
}

export default Sidebar;
