// EducationTimeline.js
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import React from "react";
import "./EducationTimeline.css";

function EducationTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="info" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>University of Michigan - Ann Arbor</div>
          <div className="goldText">2024 - 2025</div>
          <div>
            <br></br>
          </div>
          <div>MS | Major: Computer Science & Engineering | GPA: 4.0</div>
          <div>
            <br></br>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="info" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>University of Michigan - Ann Arbor</div>
          <div className="goldText">2021 - 2024</div>
          <div>
            <br></br>
          </div>
          <div>BS | Major: Computer Science | GPA: 3.85</div>
          <div className="italicsText">
            University Honors - Winter 2022, Fall 2022, Winter 2023, Fall 2023
          </div>
          <div className="italicsText">James B. Angell Scholar</div>
          <div>
            Student Orgs: Chess Club (USCF affiliated), Michigan Algorithmic
            Trading (MAT)
          </div>
          <div>
            <br></br>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="error" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>University of Wisconsin - Madison</div>
          <div className="goldText">2020-2021</div>
          <div>
            <br></br>
          </div>
          <div>BS | Major: Computer Sciences | GPA: 4.0</div>
          <div>
            <span className="italicsText">Dean's List - Fall 2020</span> |{" "}
            <span className="italicsText">Dean's List - Spring 2021</span>
          </div>
          <div>
            Student Orgs: Chess Club (USCF affiliated), Software Development
            Club
          </div>
          <div>
            <br></br>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>
          <div>Novi High School</div>
          <div className="goldText">2017-2020</div>
          <div>GPA: 4.0</div>
          <div>
            <span className="italicsText">Summa Cum Laude</span> |{" "}
            <span className="italicsText">
              Presidential Award for Educational Excellence
            </span>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default EducationTimeline;
