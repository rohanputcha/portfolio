// AboutMe.js

import React, { useState, useEffect } from 'react';
import './AboutMe.css';

function AboutMe() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/about_me.txt')
      .then((response) => response.text())
      .then((data) => setContent(data))
      .catch((error) => console.error('Error fetching content:', error));
  }, []);

  return (
    <div>
      <p>{content}</p>
    </div>
  );
}

export default AboutMe;

