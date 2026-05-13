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
    title: "SVM from scratch",
    domain: "",
    thumbnail: `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1778692899/plot2_qnk8wi.jpg`,
    description:
      "A Support Vector Machine implementation in Rust, built from scratch. It includes the SMO optimizer, kernel functions, cross-validation, grid search, PCA, and visualization utilities.",
    techStack: ["Rust"],
    images: [
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1778692900/plot1_vkpl88.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1778692899/plot2_qnk8wi.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1778692900/plot3_irbgfx.jpg`,
    ],
    link: "https://github.com/slyeet03/svm-from-scratch",
  },
  {
    id: 2,
    title: "Driver Behaviour Analysis",
    domain: "ML/Computer Vision",
    thumbnail: `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407720/tumb_g5gaee.jpg`,
    description:
      "A real-time driver behaviour monitoring system that uses computer vision to detect, track, and score vehicles from a traffic camera feed. It analyses how vehicles move and flags dangerous driving patterns like speeding, aggressive acceleration, and erratic movement.",
    techStack: ["Python", "OpenCV", "YOLOv8"],
    images: [
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407720/tumb_g5gaee.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407721/1_afsiip.jpg`,
    ],
    link: "https://github.com/slyeet03/driver_behaviour_analysis",
  },
  {
    id: 3,
    title: "spoify",
    domain: "TUI",
    thumbnail: `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407760/thumb_y1p5qu.png`,
    description:
      "This is a Rust project that implements a Spotify client within your terminal. It allows you to browse and interact with Spotify directly from the command line.",
    techStack: ["Rust"],
    images: [
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407760/thumb_y1p5qu.png`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407760/2_bxarim.png`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407759/1_xiuqp8.png`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407759/3_ueuza9.png`,
    ],
    link: "https://github.com/slyeet03/spoify",
  },
  {
    id: 4,
    title: "University Exam System",
    domain: "Web Development",
    thumbnail: `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407763/thumb_aiu1fm.png`,
    description:
      "A web-based university examination management system built with Node.js, Express, and MySQL. Developed as a project for an RDBMS class.",
    techStack: ["Node.js", "Express", "MySQL", "EJS", "HTML/CSS"],
    images: [
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407762/1_fvvtmq.png`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407761/3_ikltdc.png`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407761/3_ikltdc.png`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407761/2_lprj5v.png`,
    ],
    link: "https://github.com/slyeet03/university-exam-system",
  },
  {
    id: 5,
    title: "Space Invaders in C",
    domain: "Game Development",
    thumbnail: `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407774/thumb_rsy9dj.png`,
    description: "A space invaders clone written in C using SDL3",
    techStack: ["C"],
    images: [
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407774/thumb_rsy9dj.png`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407771/3_lsxzeu.png`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407768/1_t7zo6x.png`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407768/2_snp3sl.png`,
    ],
    link: "https://github.com/slyeet03/space-invaders-in-C/tree/main",
  },
  {
    id: 6,
    title: "Face2Emote",
    domain: "ML/Computer Vision",
    thumbnail: `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407728/thumb_jif6cr.jpg`,
    description:
      "Face2Emote is a real-time emotion and gesture recognition system that detects your facial expressions and hand gestures using a webcam, then displays the corresponding emoji and plays matching sound effects",
    techStack: ["Python", "Tensorflow", "OpenCV", "Mediapipe"],
    images: [
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407728/thumb_jif6cr.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407728/2_tmbhsb.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407727/1_gvafiw.jpg`,
    ],
    link: "https://github.com/slyeet03/face2emote",
  },
  {
    id: 7,
    title: "Portfolio",
    domain: "Web Development",
    thumbnail: `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407750/thumb_mi2hb9.jpg`,
    description:
      "A minimal, personal portfolio built with Node.js, Express, and EJS. Features a home page with an about section and skills breakdown, and a works page with a project grid and image carousel modal.",
    techStack: ["Node.js", "Express", "EJS", "HTML/CSS"],
    images: [
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407750/thumb_mi2hb9.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407748/1_qquw2y.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407751/3_znuido.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407752/2_mzimpa.jpg`,
    ],
    link: "https://github.com/slyeet03/portfolio",
  },
  {
    id: 8,
    title: "Smart Spray",
    domain: "ML/Electronics/App Development",
    thumbnail: `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407758/thumb_ffemki.jpg`,
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
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407758/thumb_ffemki.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407757/3_q9bthv.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407757/1_qydjhl.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407755/2_tf9zpm.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407755/4_ck6r9b.jpg`,
    ],
    link: "https://github.com/slyeet03/SmartSpray",
  },
  {
    id: 9,
    title: "LEVELS",
    domain: "Game Development",
    thumbnail: `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407740/thumb_hwff9u.jpg`,
    description:
      "LEVELS is a chaotic, goofy puzzle-platformer developed during the Evoque Game Jam hosted by ACM. Created by a 2-person team called 'We Can't Code', the game embraces bugs, randomness, and intentional design flaws to make you laugh, rage, and maybe even question reality.",
    techStack: ["Godot", "GDScript"],
    images: [
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407740/thumb_hwff9u.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407739/1_hfgx18.png`,
    ],
    link: "https://github.com/slyeet03/LEVELS",
  },
  {
    id: 10,
    title: "Linkee",
    domain: "App Development",
    thumbnail: `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407746/thumb_uutrgr.jpg`,
    description:
      "A cross-platform remote control application that turns your mobile device into a wireless mouse, keyboard, and media controller for your computer.",
    techStack: ["Rust", "FLutter"],
    images: [
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407746/thumb_uutrgr.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407746/3_mhp4f6.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407744/2_hcr9ga.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407743/5_ywwxse.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407743/4_wmi5uv.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407741/1_z9qked.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407741/6_nlhndo.jpg`,
    ],
    link: "https://github.com/slyeet03/Linkee",
  },

  {
    id: 11,
    title: "Handwritten Digit Classification",
    domain: "ML/Computer Vision",
    thumbnail: `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407740/output_ytybop.png`,
    description:
      "A CNN-based deep learning model trained on the MNIST dataset to classify handwritten digits (0–9), achieving 98.66% test accuracy. Includes a prediction script for running inference on custom images.",
    techStack: ["Python", "Tensorflow"],
    images: [
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407740/output_ytybop.png`,
    ],
    link: "https://github.com/slyeet03/handwritten-digit-classification/",
  },
  {
    id: 12,
    title: "Live ASCII Shader",
    domain: "Computer Vision",
    thumbnail: `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407750/1_s2qjz0.jpg`,
    description:
      "A real-time webcam feed rendered as ASCII art directly in your terminal.",
    techStack: ["Python", "OpenCV"],
    images: [
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407750/1_s2qjz0.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407749/thumb_dydf2o.jpg`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407749/thumb_dydf2o.jpg`,
    ],
    link: "https://github.com/slyeet03/live-ascii-shader/",
  },
  {
    id: 13,
    title: "RecycleUs",
    domain: "Web Development",
    thumbnail: `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407755/thumb_rqnxkq.png`,
    description:
      "RecycleUs is a web application developed for the 'Hack to the Future Hackathon'. It aims to promote and simplify recycling habits by providing users with recycling guides, a recycling center locator, and personal recycling tracking features. Basically gamefying the process of recycling.",
    techStack: ["HTML/CSS", "Javascript", "Python(Flask)", "Firebase"],
    images: [
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407755/thumb_rqnxkq.png`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407753/3_wxunuq.png`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407752/4_p9qyjg.png`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407752/2_x8tatw.png`,
      `https://res.cloudinary.com/dolgll6n7/image/upload/q_auto/f_auto/v1775407752/5_l3o1hn.png`,
    ],
    link: "https://github.com/slyeet03/recycle-us",
  },
];

module.exports = router;
