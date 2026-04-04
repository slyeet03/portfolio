const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.render("works", {
      projects: projects,
    });
  } catch (err) {
    console.error(err);
    res.send("Internal Error");
  }
});

const projectPath = "/assets/projects/";

const projects = [
  {
    id: 1,
    title: "Driver Behaviour Analysis",
    domain: "ML/ Computer Vision",
    thumbnail: `${projectPath}driver_behaviour_analysis/tumb.jpeg`,
    description:
      "A real-time driver behaviour monitoring system that uses computer vision to detect, track, and score vehicles from a traffic camera feed. It analyses how vehicles move and flags dangerous driving patterns like speeding, aggressive acceleration, and erratic movement.",
    techStack: ["Python", "OpenCV", "YOLOv8"],
    images: [
      `${projectPath}driver_behaviour_analysis/tumb.jpeg`,
      `${projectPath}driver_behaviour_analysis/1.jpg`,
    ],
    link: "https://github.com/slyeet03/driver_behaviour_analysis",
  },
  {
    id: 2,
    title: "spoify",
    domain: "TUI",
    thumbnail: `${projectPath}spoify/thumb.png`,
    description:
      "This is a Rust project that implements a Spotify client within your terminal. It allows you to browse and interact with Spotify directly from the command line.",
    techStack: ["Rust"],
    images: [
      `${projectPath}spoify/thumb.png`,
      `${projectPath}spoify/1.png`,
      `${projectPath}spoify/2.png`,
      `${projectPath}spoify/3.png`,
    ],
    link: "https://github.com/slyeet03/spoify",
  },
  {
    id: 3,
    title: "University Exam System",
    domain: "Web Development",
    thumbnail: `${projectPath}university-exam-system/thumb.png`,
    description:
      "A web-based university examination management system built with Node.js, Express, and MySQL. Developed as a project for an RDBMS class.",
    techStack: ["Node.js", "Express", "MySQL", "EJS", "HTML/CSS"],
    images: [
      `${projectPath}university-exam-system/thumb.png`,
      `${projectPath}university-exam-system/1.png`,
      `${projectPath}university-exam-system/2.png`,
      `${projectPath}university-exam-system/3.png`,
    ],
    link: "https://github.com/slyeet03/university-exam-system",
  },
  {
    id: 4,
    title: "Space Invaders in C",
    domain: "Game Development",
    thumbnail: `${projectPath}space-invaders-in-C/thumb.png`,
    description: "A space invaders clone written in C using SDL3",
    techStack: ["C"],
    images: [
      `${projectPath}space-invaders-in-C/thumb.png`,
      `${projectPath}space-invaders-in-C/1.png`,
      `${projectPath}space-invaders-in-C/2.png`,
      `${projectPath}space-invaders-in-C/3.png`,
    ],
    link: "https://github.com/slyeet03/space-invaders-in-C/tree/main",
  },
];

module.exports = router;
