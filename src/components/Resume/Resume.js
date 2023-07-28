// Resume.js

import React from 'react';
import './Resume.css'
import EducationTimeline from './EducationTimeline/EducationTimeline';
import ResumeTopic from './ResumeTopic/ResumeTopic';


function Resume() {
  return (
    <div className='div-resume'>
        <ResumeTopic title="Education" />
        <EducationTimeline />
        <ResumeTopic title="Work Experience" />
        
    </div>
  );
}

export default Resume;
