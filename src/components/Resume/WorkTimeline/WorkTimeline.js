// WorkTimeline.js
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import React from "react";
import "./WorkTimeline.css";

function WorkTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="error" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>State Farm Insurance</div>
          <div>Enterprise Technology Intern - Software Developer (Summer)</div>
          <div className="goldText">May 2023 - August 2023</div>
          <div>
            <br></br>
          </div>
          <div>
            <ul>
              <li>Need to update</li>
              <li>info for this internship</li>
              <li>TBD</li>
            </ul>
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
          <div>State Farm Insurance</div>
          <div>Enterprise Technology Intern - Software Developer (Summer)</div>
          <div className="goldText">May 2022 - August 2022</div>
          <div>
            <br></br>
          </div>
          <div>
            <div className="italicsText">
              Project: Branding Updates to Steer Clear (SC) Application
            </div>
            <ul>
              <li>
                Contributed to the redesign of Steer Clear - an application that
                records young drivers' safety<br></br>to reward them with an
                auto insurance discount
              </li>
              <li>
                Developed a complete frontend feature (badges to reward drivers'
                driving milestones) with<br></br>multiple dynamic screens using
                Jetpack Compose and Kotlin in Android
              </li>
              <li>
                Upgraded entire application to Android 13 SDK to support the new
                OS by updating the gallery<br></br>picker UI and requesting
                needed user permissions, to make security, stability, and
                <br></br>user satisfaction changes
              </li>
              <li>
                Acquired skills in Play Store APK deployment, analytic tagging,
                etc.
              </li>
              <li>
                Worked in an Agile/Scrum environment with Digital Enterprise
                Mobile team
              </li>
            </ul>
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
          <div>State Farm Insurance</div>
          <div>Enterprise Technology Intern - Software Developer (Fall)</div>
          <div className="goldText">August 2021 - December 2021</div>
          <div>
            <br></br>
          </div>
          <div>
            <div className="italicsText">
              Project: New Claim Cloner/Retrieval Tool
            </div>
            <ul>
              <li>
                Redesigned and replaced a significant outdated claims tool to
                support new technology using<br></br>Spring Boot/Spring MVC and
                React
              </li>
              <li>
                Worked in an Agile/Scrum environment with Test Automation team
              </li>
            </ul>
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
          <div>State Farm Insurance</div>
          <div>Enterprise Technology Intern - Software Developer (Summer)</div>
          <div className="goldText">May 2021 - July 2021</div>
          <div>
            <br></br>
          </div>
          <div>
            <div className="italicsText">
              Project: Claims Test Support Page (CTSP)
            </div>
            <ul>
              <li>
                Developed an all-inclusive website that serves as a single
                location for all testing needs in<br></br>State Farm's P&C
                Claims department, replacing an obsolete site
              </li>
              <li>
                Designed multiple pages with Hugo, HTML, CSS, and JavaScript
                while maintaining<br></br>version control with GitLab
              </li>
              <li>
                Collaborated in an Agile/Scrum environment with Test Automation
                team
              </li>
            </ul>
          </div>
          <div>
            <br></br>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="info" variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>
          <div>Fiat Chrysler Automobiles (FCA)</div>
          <div>Software Engineering Intern</div>
          <div className="goldText">April 2019 - June 2019</div>
          <div>
            <br></br>
          </div>
          <div>
            <div className="italicsText">
              Project 1: Automatic Report Generation Tool
            </div>
            <ul>
              <li>
                Implemented a report process that parses a large directory of
                files in order to collect,<br></br>compile, and represent data
                with graphs and tables in Python
              </li>
            </ul>
            <div className="italicsText">
              Project 2: Copper Strands Creation Tool
            </div>
            <ul>
              <li>
                Devised an algorithm to calculate copper cable positions in
                vehicle wires and automated a<br></br>daylong manual process to
                an instant one using Python
              </li>
            </ul>
          </div>
          <div>
            <br></br>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default WorkTimeline;
