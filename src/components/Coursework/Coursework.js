import React from "react";
import SkillCardModal from "../Skills/SkillCardModal/SkillCardModal";
import "./Coursework.css";

function Coursework() {
  const michiganCoursework = [
    {
      skill: "Data Structures and Algorithms",
      type: "EECS 281",
      title: "Data Structures and Algorithms",
      description: [
        "Fundamental data structures including lists, stacks, queues, priority queues, hash tables, binary trees, search trees, balanced, trees, and graphs; searching and sorting algorithms",
        "Algorithm analysis and O-notation",
        "Recursive algorithms and Dynamic Programming",
        "Introduction to graph algorithms, greedy algorithms, divide & conquer algorithms",
        "Multiple major programming projects",
      ],
    },
    {
      skill: "Foundations of Computer Science",
      type: "EECS 376",
      title: "Foundations of Computer Science",
      description: [
        "Provides an introduction to the theory of computation",
        "Topics include models of computation, finite state machines, dynamic programming, Turing machines, decidable and undecidable problems, polynomial time computability, and paradigms of algorithm design",
        "The course also teahces computational complexity emphasizing NP-hardness, coping with intractability, exploiting intractability, and cryptography",
      ],
    },
    {
      skill: "Introduction to Computer Organization",
      type: "EECS 370",
      title: "Introduction to Computer Organization",
      description: [
        "This course teaches concepts of computer organization and hardware",
        "Topics include instructions executed by a processor and how to use these instructions in simple assembly-language programs",
        "Topics also include the stored-program concept, data-path and control for multiple implementations of a processor, performance evaluation, pipelining, caches, virtual memory, input/output, and more",
        "The course included multiple major projects focused on simulating different low-level concepts (e.g., data-paths and pipelining)",
      ],
    },
    {
      skill: "Introduction to ML",
      type: "EECS 445",
      title: "Introduction to Machine Learning",
      description: [
        "Theory and implementation of state-of-the-art machine learning algorithms for large-scale real-world applications",
        "Topics include supervised learning (regression, classification, kernel methods, neural networks, and regularization) and unsupervised learning (clustering, HMMs, density estimation, and dimensionality reduction)",
        "For each topic, mathematical principles, key algorithmic ideas, and implementation will be highlighted",
        "Database design, integrity, normalization, access methods, query optimization, transaction management and currency control and recovery",
      ],
    },
    {
      skill: "Web Systems",
      type: "EECS 485",
      title: "Web Systems",
      description: [
        "This course teaches concepts surrounding web systems, applications, and internet scale distributed systems",
        "Topics covered include client/server protocols, security, information retrieval and search engines, scalable data processing, and fault tolerant systems",
        "The course has substantial projects (using frameworks such as ReactJS) involving development of web applications and web systems",
      ],
    },
    {
      skill: "Introduction to AI",
      type: "EECS 492",
      title: "Introduction to Artificial Intelligence",
      description: [
        "Introduction to the core concepts of AI, organized around building computational agents",
        "This course emphasizes the application of AI techniques",
        "Topics include search, logic, knowledge representation, reasoning, planning, decision making under the uncertainty, and machine learning",
      ],
    },
    {
      skill: "Database Management Systems",
      type: "EECS 484",
      title: "Database Management Systems",
      description: [
        "Concepts and methods for the design, creation, query and management of large enterprise databases",
        "Functions and characteristics of the leading database management systems",
        "Query languages such as SQL, forms, embedded SQL, and application development tools",
        "Database design, integrity, normalization, access methods, query optimization, transaction management and currency control and recovery",
      ],
    },
    {
      skill: "Programming and Intro Data Structures",
      type: "EECS 280",
      title: "Programming and Introductory Data Structures",
      description: [
        "This course teaches concepts of algorithm development and effective programming, top-down analysis, structured programming, testing, and program correctness",
        "Some topics include program language syntax, static/runtime semantics, scope, procedure instantiation, recursion, abstract data types, and parameter passing methods",
        "Some data structures covered are structured data types, pointers, linked data structures, stacks, queues, arrays, records, and trees.",
        "This course includes five substantial projects in C++, ensuring a deep understanding of the language",
      ],
    },
    {
      skill: "Human-Centered Software Development",
      type: "EECS 497",
      title: "Human-Centered Software Development",
      description: [
        "Team-based, user-centered design and development of complex software systems incorporating effective design strategies and project management methodologies",
        "Topics include customer discovery, contextual inquiry, prototyping, process models, creative problem solving, inclusive thinking, team dynamics, social concerns, and testing strategies",
        "Semester-long senior design project - developed a recipe website that has specific accomodations for those with dietary preferences and allergies",
      ],
    },
  ];

  const wisconsinCoursework = [
    {
      skill: "Programming III",
      type: "CS 400",
      title: "Programming III",
      description: [
        "This course introduces balanced search trees, graphs, graph traversal algorithms, hash tables and sets, and complexity analysis",
        "Students are required to design and implement using high quality professional code, a medium sized program, that demonstrates knowledge and use of latest language features, tools, and conventions",
        "Additional topics introduced will include inheritance and polymorphism; anonymous inner classes; lambda functions; and performance analysis to discover and optimize critical code blocks",
        "Students will design a more advanced user-interface design, such as a web or mobile application with a GUI and event-driven implementation",
        "This course also introduces UNIX commands, basic web development, and version control",
      ],
    },
    {
      skill: "Discrete Mathematics",
      type: "CS 240",
      title: "Discrete Mathematics",
      description: [
        "This course introduces basic concepts of logic, sets, partial order and other relations (and functions)",
        "Also introduced are basic concepts of mathematics (definitions, proofs, sets, functions, and relations) with a focus on discrete structures: integers, bits, strings, trees, and graphs",
        "Other topics include propositional logic; boolean algebra; predicate logic; mathematical induction and recursion; invariants and algorithmic correctness; recurrences and asymptotic growth analysis; and fundamentals of counting",
      ],
    },
    {
      skill: "Programming II",
      type: "CS 300",
      title: "Programming II",
      description: [
        "Teaches object-oriented programming using classes and objects to solve more complex problems",
        "Topics include abstract data types (List, Stack, Queue, PriorityQueue(Heap), Binary Search Tree) and generic interfaces (parametric polymorphism)",
        "Programming assignments require writing and developing multi-class (file) programs using interfaces, generics, test methods, and exception handling to solve challenging real world problems",
        "This course introduces complexity analysis and recursion",
      ],
    },
    {
      skill: "Computer Engineering",
      type: "ECE 252",
      title: "Intro to Computer Engineering",
      description:
        "Topics include logic components built with transistors; rudimentary boolean algebra; basic combinational logic design; basic synchronous sequential logic design; basic computer organization and design; and introductory machine and assembly language programming in LC3",
    },
  ];

  return (
    <div>
      <h1>University of Michigan</h1>
      <div className="project-grid">
        {michiganCoursework.map((course, index) => (
          <SkillCardModal
            key={index}
            skill={course.skill}
            type={course.type}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
      <h1>University of Wisconsin - Madison</h1>
      <div className="project-grid">
        {wisconsinCoursework.map((course, index) => (
          <SkillCardModal
            key={index}
            skill={course.skill}
            type={course.type}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Coursework;
