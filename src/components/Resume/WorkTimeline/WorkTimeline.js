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
          <div className="goldText">May 2024 - August 2024</div>
          <div>
            <br></br>
          </div>
          <div>
            <div className="italicsText">
              Project: Integration of Claims Media with Media Event Publisher
              (MEP) and Infrastructure Enhancements
            </div>
            <ul>
              <li>
                Developed a full service from scratch for Claims Media in
                TypeScript to post events<br></br>to MEP, including
                comprehensive unit tests.
              </li>
              <li>
                Integrated MEP API calls (subscribing to my service) in critical
                user journey points<br></br>within Claims Media, monitored via
                Datadog and AWS CloudWatch.
              </li>
              <li>
                Created and configured three new Azure applications (dev, test,
                prod environments)<br></br>for Claims Media to publish events,
                integrating them using Terraform.
              </li>
              <li>
                Implemented secrets rotation within Azure with AWS Secrets
                Manager and stored<br></br>configurations in Vault and Scalr for
                security.
              </li>
              <li>
                Contributed to team transition to ID token authentication by
                updating Claims Media <br></br>Infrastructure application.
              </li>
              <li>
                Provided technical insights in UI decision meetings, influencing
                design improvements<br></br>for the Emergency Roadside Service
                (ERS) application.
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
          <div className="goldText">May 2023 - August 2023</div>
          <div>
            <br></br>
          </div>
          <div>
            <div className="italicsText">
              Project: Text File Upload Feature to File Upload Library (FUL)
              application
            </div>
            <ul>
              <li>
                Enhanced State Farm's File Upload Library Angular application,
                enabling the attachment<br></br>of text files to customers’
                claims
              </li>
              <li>
                Improved web and mobile UI screens incorporating new features
              </li>
              <li>
                Conducted comprehensive unit and end-to-end tests in TypeScript
              </li>
              <li>
                Gained experience adding CI/CD pipeline jobs and running Snyk
                vulnerability scans
              </li>
              <li>
                Orchestrated successful production deployment of new feature
                enhancements to the<br></br>primary client-facing website,
                Claims Hub
              </li>
              <li>
                Collaborated with Agile (Scrumban) methodologies in the Media
                Innovation Team
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
