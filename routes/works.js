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
    domain: "ML/Computer Vision",
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
  {
    id: 5,
    title: "Face2Emote",
    domain: "ML/Computer Vision",
    thumbnail: `${projectPath}face2emote/thumb.jpeg`,
    description:
      "Face2Emote is a real-time emotion and gesture recognition system that detects your facial expressions and hand gestures using a webcam, then displays the corresponding emoji and plays matching sound effects",
    techStack: ["Python", "Tensorflow", "OpenCV", "Mediapipe"],
    images: [
      `${projectPath}face2emote/thumb.jpeg`,
      `${projectPath}face2emote/1.jpeg`,
      `${projectPath}face2emote/2.jpeg`,
    ],
    link: "https://github.com/slyeet03/face2emote",
  },
  {
    id: 6,
    title: "Portfolio",
    domain: "Web Development",
    thumbnail: `${projectPath}portfolio/thumb.jpeg`,
    description:
      "A minimal, personal portfolio built with Node.js, Express, and EJS. Features a home page with an about section and skills breakdown, and a works page with a project grid and image carousel modal.",
    techStack: ["Node.js", "Express", "EJS", "HTML/CSS"],
    images: [
      `${projectPath}portfolio/thumb.jpeg`,
      `${projectPath}portfolio/1.jpeg`,
      `${projectPath}portfolio/2.jpeg`,
      `${projectPath}portfolio/3.jpeg`,
    ],
    link: "",
  },
  {
    id: 7,
    title: "Smart Spray",
    domain: "ML/Electronics/App Development",
    thumbnail: `${projectPath}smart spray/thumb.JPG`,
    description:
      "An IoT integrated precision agriculture system that detects tomato plant diseases from images using a deep learning model and automatically triggers pesticide spraying via an ESP32-controlled hardware system.",
    techStack: [
      "Python",
      "Tensorflow",
      "OpenCV",
      "Flask",
      "ESP32",
      "Flutter(Dart)",
    ],
    images: [
      `${projectPath}smart spray/thumb.JPG`,
      `${projectPath}smart spray/1.JPG`,
      `${projectPath}smart spray/2.JPG`,
      `${projectPath}smart spray/3.JPG`,
      `${projectPath}smart spray/4.JPG`,
    ],
    link: "https://github.com/slyeet03/SmartSpray",
  },
  {
    id: 8,
    title: "LEVELS",
    domain: "Game Development",
    thumbnail: `${projectPath}LEVELS/thumb.jpg`,
    description:
      "LEVELS is a chaotic, goofy puzzle-platformer developed during the Evoque Game Jam hosted by ACM. Created by a 2-person team called 'We Can't Code', the game embraces bugs, randomness, and intentional design flaws to make you laugh, rage, and maybe even question reality.",
    techStack: ["Godot", "GDScript"],
    images: [`${projectPath}LEVELS/thumb.jpg`, `${projectPath}LEVELS/1.png`],
    link: "https://github.com/slyeet03/LEVELS",
  },
  {
    id: 9,
    title: "Linkee",
    domain: "App Development",
    thumbnail: `${projectPath}Linkee/thumb.JPG`,
    description:
      "A cross-platform remote control application that turns your mobile device into a wireless mouse, keyboard, and media controller for your computer.",
    techStack: ["Rust", "FLutter"],
    images: [
      `${projectPath}Linkee/thumb.JPG`,
      `${projectPath}Linkee/1.jpeg`,
      `${projectPath}Linkee/2.jpeg`,
      `${projectPath}Linkee/3.jpeg`,
      `${projectPath}Linkee/4.jpeg`,
      `${projectPath}Linkee/5.jpeg`,
      `${projectPath}Linkee/6.jpeg`,
    ],
    link: "https://github.com/slyeet03/Linkee",
  },

  {
    id: 10,
    title: "Handwritten Digit Classification",
    domain: "ML/Computer Vision",
    thumbnail: `${projectPath}handwritten digit classification/output.png`,
    description:
      "A CNN-based deep learning model trained on the MNIST dataset to classify handwritten digits (0–9), achieving 98.66% test accuracy. Includes a prediction script for running inference on custom images.",
    techStack: ["Python", "Tensorflow"],
    images: [`${projectPath}handwritten digit classification/output.png`],
    link: "https://github.com/slyeet03/handwritten-digit-classification/",
  },
  {
    id: 11,
    title: "Live ASCII Shader",
    domain: "Computer Vision",
    thumbnail: `${projectPath}live ascii shader/thumb.jpeg`,
    description:
      "A real-time webcam feed rendered as ASCII art directly in your terminal.",
    techStack: ["Python", "OpenCV"],
    images: [
      `${projectPath}live ascii shader/thumb.jpeg`,
      `${projectPath}live ascii shader/1.jpeg`,
      `${projectPath}live ascii shader/2.jpeg`,
    ],
    link: "https://github.com/slyeet03/live-ascii-shader/",
  },
  {
    id: 12,
    title: "RecycleUs",
    domain: "Web Development",
    thumbnail: `${projectPath}recycleus/thumb.png`,
    description:
      "RecycleUs is a web application developed for the 'Hack to the Future Hackathon'. It aims to promote and simplify recycling habits by providing users with recycling guides, a recycling center locator, and personal recycling tracking features. Basically gamefying the process of recycling.",
    techStack: ["HTML/CSS", "Javascript", "Python(Flask)", "Firebase"],
    images: [
      `${projectPath}recycleus/2.png`,
      `${projectPath}recycleus/3.png`,
      `${projectPath}recycleus/4.png`,
      `${projectPath}recycleus/5.png`,
    ],
    link: "https://github.com/slyeet03/recycle-us",
  },
];

module.exports = router;
