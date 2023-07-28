// Resume.js

import React from "react";
import "./Resume.css";
import EducationTimeline from "./EducationTimeline/EducationTimeline";
import ResumeTopic from "./ResumeTopic/ResumeTopic";
import WorkTimeline from "./WorkTimeline/WorkTimeline";

function Resume() {
  return (
    <div className="div-resume">
      <ResumeTopic title="Education" />
      <EducationTimeline />
      <ResumeTopic title="Work Experience" />
      <WorkTimeline />
    </div>
  );
}

export default Resume;
