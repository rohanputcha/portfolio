// Skills .js

import React from "react";
import "./Skills.css";
import SkillCardModal from "./SkillCardModal/SkillCardModal";
import Grid from "@mui/material/Unstable_Grid2";

function Skills() {
  const lang = "Programming Language";
  const frame = "Software Framework";
  const prac = "Software Development Practice";

  return (
    <Grid container spacing={2}>
      <Grid xs={4}>
        <SkillCardModal
          skill="C++"
          type={lang}
          title="C++"
          description={[
            "7 years of experience",
            "Used in EECS 280: Programming and Data Structures",
            "Used in EECS 281: Data Structures and Algorithms",
            "Used in EECS 484: Database Management Systems",
            "Used in EECS 376: Foundations of Computer Science",
          ]}
        />
      </Grid>
      <Grid xs={4}>
        <SkillCardModal
          skill="Python"
          type={lang}
          title="Python"
          description={[
            "6 years of experience",
            "Used in EECS 445: Intro to Machine Learning",
            "Used in multiple hackathon projects",
            "Used in EECS 484: Database Management Systems",
            "Work experience in 2019 internship",
          ]}
        />
      </Grid>
      <Grid xs={4}>
        <SkillCardModal
          skill="Java"
          type={lang}
          title="Java"
          description={[
            "6 years of experience",
            "Used in CS 300: Programming II",
            "Used in CS 400: Programming III",
            "Used in EECS 484: Database Management Systems",
            "Work experience in 2021 Fall Internship",
            "Work experience in 2022 Summer Internship",
          ]}
        />
      </Grid>
      <Grid xs={4}>
        <SkillCardModal
          skill="Angular"
          type={frame}
          title="Angular"
          description={[
            "Work experience in Summer 2023 Internship",
            "Learned TypeScript and contributed to multiple large Angular applications",
          ]}
        />
      </Grid>
      <Grid xs={4}>
        <SkillCardModal
          skill="Android"
          type={frame}
          title="Android"
          description={[
            "Multiple personal projects and hackathon projects",
            "Work experience in 2022 Summer Internship",
            "Developed a complete flow within a customer-facing application",
          ]}
        />
      </Grid>
      <Grid xs={4}>
        <SkillCardModal
          skill="Kotlin"
          type={lang}
          title="Kotlin"
          description={[
            "Work experience in 2022 Summer Internship",
            "Used Jetpack Compose framework for Android application",
          ]}
        />
      </Grid>
      <Grid xs={4}>
        <SkillCardModal
          skill="React"
          type={frame}
          title="React"
          description={[
            "Work experience in 2021 Fall Internship",
            "This project!",
          ]}
        />
      </Grid>
      <Grid xs={4}>
        <SkillCardModal
          skill="SQL"
          type={lang}
          title="SQL"
          description={[
            "Used in EECS 484: Database Management Systems",
            "Work experience in 2022 Summer Internship",
          ]}
        />
      </Grid>
      <Grid xs={4}>
        <SkillCardModal
          skill="Hugo"
          type={frame}
          title="Hugo"
          description={[
            "Work experience in 2021 Summer Internship",
            "Worked on multiple major pages within a major internal application",
          ]}
        />
      </Grid>
      <Grid xs={4}>
        <SkillCardModal
          skill="Agile/Scrum"
          type={prac}
          title="Agile/Scrum"
          description={[
            "Work experience in 3 different teams",
            "Experience with Scrum, Kanban, and Scrumban in different teams",
          ]}
        />
      </Grid>
      <Grid xs={4}>
        <SkillCardModal
          skill="CI/CD Pipelines"
          type={prac}
          title="CI/CD Pipelines"
          description={[
            "Work experience in 3 different teams",
            "Experience with creating pipeline stages and jobs",
          ]}
        />
      </Grid>
    </Grid>
  );
}

export default Skills;
