// Projects.js

import React from "react";
import "./Projects.css";
import SkillCardModal from "../Skills/SkillCardModal/SkillCardModal";

function Projects() {
  const hackathonProjects = [
    {
      title: "The Farmer",
      description: [
        "Built an internal socializing tool for State Farm which creates a group chat at a random time of the work day to spark conversation",
        "Worked on a chat bot that creates the group chat with a daily unique AI generated prompt from OpenAI API",
        "Utilized OpenAI API to adjust temperature levels for uniqueness",
        "Created a script that maintains a short-term memory of the past 20 questions to ensure any new generated prompt has a low similarity score with all previous questions",
        "Technologies used: Python, Azure Identity, NLTK, Bash Scripting, Git",
      ],
      skill: "The Farmer",
      type: "SF Hack Day 2024",
    },
    {
      title: "InsureScore",
      description: [
        "Built an application that calculates the risk score of a user for State Farm's yearly hackathon",
        "Trained a multitude of models: Adaboost, Decision Tree, Neural Network, Random Forest, and Ridge Regression",
        "After training on company test data, highest accuracy was found with the Neural Network (NN) model - this model was saved as a pkl",
        "Created a website on Flask with a visually appealing, dynamic user interface to collect required user information",
        "Minimized systemic bias by avoiding user information such as sex, race, etc.",
        "Technologies used: Python, PyTorch, Flask, HTML, CSS, JavaScript, Git",
      ],
      skill: "InsureScore",
      type: "SF Hack Day 2023",
    },
    {
      title: "T2 Timesheet",
      description: [
        "Built an application in React for State Farm's yearly hackathon",
        "Developed with the aim to replace an existing outdated UI for employee timesheets",
        "Designed the UI around a calendar view with drag time selection",
        "Made use of open source React packages to aid customized design",
        "Technologies used: ReactJS, HTML, CSS, JavaScript, Git",
      ],
      skill: "T2 Timesheet",
      type: "SF Hack Day 2022",
    },
    {
      title: "Wind-Meal",
      description: [
        "Built a device used to identify food temperature and cool it appropriately",
        "Food can be left in the device and monitored using an LCD screen displaying its temperature and safety",
        "The device has a fan that cools down the food until it is at an edible temperature",
        "The device was designed using recycled cardboard scraps and leftover wires",
        "Technologies used: Arduino, C++, Java, LiquidCrystal-i2c",
        "See more on the product: https://devpost.com/software/wind-meal",
      ],
      skill: "Wind-Meal",
      type: "MHACKS 12",
    },
    {
      title: "White Cane",
      description: [
        "Developed a messaging app that also serves as a white cane for texters who are temporarily blinded due to lapse in attention",
        "Displays messages over a camera view of the user's surroundings",
        "Text color changes dynamically with the surroundings",
        "Any detected vertical surfaces that could be hazardous cause a phone vibration to notify the user",
        "Technologies used: Android, Java, Google Firebase, ARCore, Sceneform",
        "See more on the product: https://devpost.com/software/white-cane",
      ],
      skill: "White Cane",
      type: "MHACKS 11",
    },
    {
      title: "Darkfire",
      description: [
        "Designed and developed a 2-D multiplayer video game in PyGame",
        "The game is played using 4 console controllers (or keyboards if needed)",
        "This project was further developed after the hackathon and presented a month later",
        "Technologies used: Python (PyGame)",
        "See GitHub repository for more details and download: https://github.com/rohanputcha/Darkfire",
      ],
      skill: "Darkfire",
      type: "NHACKS 4",
    },
    {
      title: "Caloric Intake & Cyfr",
      description: [
        "Designed and developed two applications during the hackathon",
        "Caloric Intake creates a specific balanced diet for you based on an equation that takes numerous body variables into account",
        "Cyfr is an encoding software that combines a few prominent encoding algorithms to encode data",
        "Technologies used: Anroid, Java",
        "See GitHub repository for more details and download: https://github.com/rohanputcha/NHACKS-3",
      ],
      skill: "Caloric Intake & Cyfr",
      type: "NHACKS 3",
    },
  ];

  const otherProjects = [
    {
      title: "Sketch N' Hatch",
      description: [
        "Designed, developed and launched a product in Macy's with a team",
        "Created a children's book that develops their critical thinking",
        "Sold in the Macy's marketplace at Twelve Oaks Mall, Novi, MI",
        "Worked to collaborate with a book manufacturer (C-M Books) in Ann Arbor",
        "Worked with freelance designers over Fiverr to digitize the front cover",
      ],
      skill: "Sketch N' Hatch",
      type: "Incubator Project",
    },
    {
      title: "ColorSwitch",
      description: [
        "Developed an Android game as a month-long project for AP Computer Science A",
        "Designed the game to stimulate reflexes and improve memory using visual cues",
        "Technologies used: Anroid, Java",
        "See GitHub repository for more details and download: https://github.com/rohanputcha/ColorSwitch",
      ],
      skill: "ColorSwitch",
      type: "High School Project",
    },
  ];

  return (
    <div>
      <h1>Hackathon Projects</h1>
      <div className="project-grid">
        {hackathonProjects.map((project, index) => (
          <SkillCardModal
            key={index}
            skill={project.skill}
            type={project.type}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
      <h1>Other Projects</h1>
      <div className="project-grid">
        {otherProjects.map((project, index) => (
          <SkillCardModal
            key={index}
            skill={project.skill}
            type={project.type}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
