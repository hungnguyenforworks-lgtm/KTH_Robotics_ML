const machineLearningCourses = [
  // ============================================================
  // YEAR 1 — MANDATORY
  // ============================================================

  {
    code: "DA2205",
    name: "Introduction to the Philosophy of Science and Research Methodology",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "mandatory",
    periods: { "Y1-P1": 3.0, "Y1-P2": 4.5 }
  },
  {
    code: "DD1420",
    name: "Foundations of Machine Learning",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "mandatory",
    periods: { "Y1-P1": 7.5 }
  },
  {
    code: "DD2301",
    name: "Program Integrating Course in Machine Learning",
    totalHP: 3.0,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "mandatory",
    periods: {
      "Y1-P1": 0.5,
      "Y1-P2": 0.5,
      "Y1-P3": 0.5,
      "Y1-P4": 0.5,
      "Y2-P1": 0.5,
      "Y2-P2": 0.5
    }
  },
  {
    code: "DD2380",
    name: "Artificial Intelligence",
    totalHP: 6.0,
    programmeYears: [1, 2],
    category: "mandatory/elective",
    periods: { "Y1-P3": 6.0 }
  },
  {
    code: "DD2434",
    name: "Machine Learning, Advanced Course",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "mandatory",
    periods: { "Y1-P2": 7.5 }
  },

  // ============================================================
  // YEAR 1 — CONDITIONALLY ELECTIVE
  // ============================================================

  {
    code: "DD2257",
    name: "Visualization",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2401",
    name: "Neuroscience",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2402",
    name: "Advanced Individual Course in Computational Biology",
    totalHP: 6.0,
    programmeYears: [1],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2410",
    name: "Introduction to Robotics",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2411",
    name: "Research Project in Robotics, Perception and Learning",
    totalHP: 15.0,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2417",
    name: "Language Engineering",
    totalHP: 7.5,
    programmeYears: [1],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2419",
    name: "Project Course in Robotics and Autonomous Systems",
    totalHP: 9.0,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2420",
    name: "Probabilistic Graphical Models",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2423",
    name: "Image Analysis and Computer Vision",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2424",
    name: "Deep Learning in Data Science",
    totalHP: 7.5,
    programmeYears: [1],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2430",
    name: "Project Course in Data Science",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2435",
    name: "Mathematical Modelling of Biological Systems",
    totalHP: 9.0,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2437",
    name: "Artificial Neural Networks and Deep Architectures",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2438",
    name: "Artificial Intelligence and Multi Agent Systems",
    totalHP: 15.0,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2447",
    name: "Statistical Methods in Applied Computer Science",
    totalHP: 6.0,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2477",
    name: "Search Engines and Information Retrieval Systems",
    totalHP: 7.5,
    programmeYears: [1],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DT2112",
    name: "Speech Technology",
    totalHP: 7.5,
    programmeYears: [1],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DT2119",
    name: "Speech and Speaker Recognition",
    totalHP: 7.5,
    programmeYears: [1],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DT2470",
    name: "Music Informatics",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "EL2320",
    name: "Applied Estimation",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "EL2805",
    name: "Reinforcement Learning",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "EL2810",
    name: "Machine Learning Theory",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "EQ2341",
    name: "Pattern Recognition and Machine Learning",
    totalHP: 7.5,
    programmeYears: [1],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "EQ2425",
    name: "Analysis and Search of Visual Data",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "ID2222",
    name: "Data Mining",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "ID2223",
    name: "Scalable Machine Learning and Deep Learning",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "SF1811",
    name: "Optimization",
    totalHP: 6.0,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "SF2930",
    name: "Regression Analysis",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "SF2940",
    name: "Probability Theory",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "SF2943",
    name: "Time Series Analysis",
    totalHP: 7.5,
    programmeYears: [1],
    category: "conditionallyElective",
    periods: {}
  },
  // ============================================================
  // YEAR 1 — RECOMMENDED
  // ============================================================

  {
    code: "DD1388",
    name: "Program System Construction Using C++",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2352",
    name: "Algorithms and Complexity",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2395",
    name: "Computer Security",
    totalHP: 6.0,
    programmeYears: [1, 2],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2448",
    name: "Foundations of Cryptography",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "recommended",
    periods: {}
  },
  {
    code: "DH2642",
    name: "Interaction Programming and the Dynamic Web",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "recommended",
    periods: {}
  },
  {
    code: "ID2221",
    name: "Data-Intensive Computing",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "recommended",
    periods: {}
  },
  {
    code: "IK2215",
    name: "Advanced Internetworking",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "recommended",
    periods: {}
  },
  {
    code: "IK2221",
    name: "Networked Systems for Machine Learning",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "recommended",
    periods: {}
  },
  {
    code: "IK2227",
    name: "Network Systems with Edge or Cloud Datacenters",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2603",
    name: "Geometric Robot Learning",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "recommended",
    periods: {}
  },

  // ============================================================
  // YEAR 2
  // ============================================================

  {
    code: "DD2601",
    name: "Deep Generative Models and Synthesis",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2610",
    name: "Deep Learning, Advanced Course",
    totalHP: 7.5,
    programmeYears: [1, 2],
    category: "conditionallyElective",
    periods: {}
  },

  {
    code: "DA233X",
    name: "Degree Project in Computer Science and Engineering, specializing in Machine Learning",
    totalHP: 30.0,
    programmeYears: [2],
    category: "mandatory",
    periods: { "Y2-P3": 15.0, "Y2-P4": 15.0 }
  },

  {
    code: "SF2568",
    name: "Parallel Computations for Large-Scale Problems",
    totalHP: 7.5,
    programmeYears: [2],
    category: "recommended",
    periods: {}
  },
];

const roboticsCourses = [

  // ============================================================
  // COMMON — YEAR 1 MANDATORY
  // ============================================================

  {
    code: "DD2410",
    name: "Introduction to Robotics",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "mandatory",
    periods: { "Y1-P1": 7.5 }
  },
  {
    code: "EL2220",
    name: "The Sustainable Systems and Control Engineer",
    totalHP: 3.0,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "mandatory",
    periods: {
      "Y1-P1": 0.4,
      "Y1-P2": 0.4,
      "Y1-P3": 0.3,
      "Y1-P4": 0.4,
      "Y2-P1": 0.4,
      "Y2-P2": 0.4,
      "Y2-P3": 0.3,
      "Y2-P4": 0.4
    }
  },
  {
    code: "EL2820",
    name: "Modelling of Dynamic Systems",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "mandatory",
    periods: { "Y1-P1": 7.5 }
  },
  {
    code: "EL2520",
    name: "Control Theory, Advanced Course",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "mandatory",
    periods: { "Y1-P4": 7.5 }
  },

  // ============================================================
  // COMMON — YEAR 1 RECOMMENDED
  // ============================================================

  {
    code: "DD1388",
    name: "Program System Construction Using C++",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2419",
    name: "Project Course in Robotics and Autonomous Systems",
    totalHP: 9.0,
    programmeYears: [1, 2],
    tracks: ["COMMON", "RASM"],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2420",
    name: "Probabilistic Graphical Models",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2424",
    name: "Deep Learning in Data Science",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["COMMON", "LDCS"],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2438",
    name: "Artificial Intelligence and Multi Agent Systems",
    totalHP: 15.0,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2430",
    name: "Project Course in Data Science",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "DT2140",
    name: "Multimodal Interaction and Interfaces",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "DT2151",
    name: "Project in Conversational Systems",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EG2210",
    name: "Electricity Market Analysis",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EP2520",
    name: "Building Secure Networked Systems",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EQ1220",
    name: "Signal Theory",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EQ2310",
    name: "Digital Communication",
    totalHP: 9.0,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EQ2321",
    name: "Speech and Audio Signal Processing",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON", "RASM"],
    category: "recommended",
    periods: {}
  },
  {
    code: "IL2206",
    name: "Embedded Systems",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "IL2212",
    name: "Software for Embedded Systems",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "LS1452",
    name: "Introduction to Technical Communication in English",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "LS1464",
    name: "Rhetoric - the Art of Persuasion",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "LS2442",
    name: "English for Employment",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "LS2444",
    name: "Technical Communication in English",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "ME1003",
    name: "Industrial Economics, Basic Course",
    totalHP: 6.0,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "MF2007",
    name: "Dynamics and Motion Control",
    totalHP: 9.0,
    programmeYears: [1, 2],
    tracks: ["COMMON", "RASM"],
    category: "recommended",
    periods: {}
  },
  {
    code: "MF2030",
    name: "Mechatronics, Basic Course",
    totalHP: 6.0,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "MF2043",
    name: "Robust Mechatronics",
    totalHP: 6.0,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "SF1691",
    name: "Complex Analysis",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON", "LDCS"],
    category: "recommended",
    periods: {}
  },
  {
    code: "SF1811",
    name: "Optimization",
    totalHP: 6.0,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "SF1861",
    name: "Optimization",
    totalHP: 6.0,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "SF2812",
    name: "Applied Linear Optimization",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "SF2832",
    name: "Mathematical Systems Theory",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON", "LDCS"],
    category: "recommended",
    periods: {}
  },
  {
    code: "SF2842",
    name: "Geometric Control Theory",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON", "LDCS"],
    category: "recommended",
    periods: {}
  },
  {
    code: "SF2940",
    name: "Probability Theory",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "SF2943",
    name: "Time Series Analysis",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "LS1427",
    name: "German for Engineers - Professional Communication",
    totalHP: 5.0,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "LS1437",
    name: "French for Engineers - Professional Communication",
    totalHP: 5.0,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "LS1446",
    name: "Spanish for Engineers - Professional Communication",
    totalHP: 5.0,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EH2030",
    name: "Business Development and Quality",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EH2720",
    name: "Project Management",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EK2370",
    name: "Build Your Own Radar System, Project Course",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EL1010",
    name: "Control Theory, General Course",
    totalHP: 6.0,
    programmeYears: [1],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EL2425",
    name: "Control Theory, Project Course, Smaller Course",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON", "RASM", "LDCS"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EL2620",
    name: "Nonlinear Control",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON", "RASM", "LDCS"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EL2700",
    name: "Model Predictive Control",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON", "LDCS"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EL2805",
    name: "Reinforcement Learning",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON", "RASM", "LDCS"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EL2450",
    name: "Hybrid and Embedded Control Systems",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON", "RASM", "LDCS"],
    category: "recommended",
    periods: {}
  },
  {
    code: "SD2231",
    name: "Applied Vehicle Dynamics Control",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON", "RASM"],
    category: "recommended",
    periods: {}
  },

  // ============================================================
  // COMMON — YEAR 2 MANDATORY
  // ============================================================

  {
    code: "AK2030",
    name: "Theory and Methodology of Science",
    totalHP: 4.5,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "mandatory",
    periods: { "Y2-P1": 4.5 }
  },
  {
    code: "DA236X",
    name: "Degree Project in Computer Science and Engineering, Systems, Control and Robotics",
    totalHP: 30.0,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "mandatory",
    periods: { "Y2-P3": 15.0, "Y2-P4": 15.0 }
  },
  {
    code: "EA236X",
    name: "Degree Project in Electrical Engineering, Systems, Control and Robotics",
    totalHP: 30.0,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "mandatory",
    periods: { "Y2-P3": 15.0, "Y2-P4": 15.0 }
  },

  // ============================================================
  // COMMON — YEAR 2 RECOMMENDED
  // ============================================================

  {
    code: "DD2352",
    name: "Algorithms and Complexity",
    totalHP: 7.5,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2401",
    name: "Neuroscience",
    totalHP: 7.5,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2435",
    name: "Neural Networks and Biomodelling",
    totalHP: 9.0,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2447",
    name: "Statistical Methods in Applied Computer Science",
    totalHP: 6.0,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2459",
    name: "Software Reliability",
    totalHP: 7.5,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD2464",
    name: "Larger Advanced Individual Course in Computer Science",
    totalHP: 9.0,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EG2140",
    name: "Computer Applications and Machine Learning in Electric Power Systems",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EQ2401",
    name: "Adaptive Signal Processing",
    totalHP: 7.5,
    programmeYears: [2],
    tracks: ["COMMON", "LDCS"],
    category: "recommended",
    periods: {}
  },
  {
    code: "EQ2871",
    name: "Network Technology for Cyber-Physical Systems",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "DD1385",
    name: "Software Engineering",
    totalHP: 6.0,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "LS2426",
    name: "German B2 for Engineers",
    totalHP: 7.5,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "LS2436",
    name: "French B2 for Engineers",
    totalHP: 7.5,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "LS2449",
    name: "Spanish B2 for Engineers",
    totalHP: 7.5,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },
  {
    code: "ME2089",
    name: "Leadership in Cross-Cultural and Industrial Contexts",
    totalHP: 6.0,
    programmeYears: [2],
    tracks: ["COMMON"],
    category: "recommended",
    periods: {}
  },

  // ============================================================
  // RASM — YEAR 1
  // ============================================================

  {
    code: "DD2423",
    name: "Image Analysis and Computer Vision",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["RASM"],
    category: "mandatory",
    periods: { "Y1-P2": 7.5 }
  },
  {
    code: "EL2320",
    name: "Applied Estimation",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["RASM"],
    category: "mandatory",
    periods: { "Y1-P2": 7.5 }
  },

  {
    code: "DD2610",
    name: "Deep Learning, Advanced Course",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["RASM"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2411",
    name: "Research Project in Robotics, Perception and Learning",
    totalHP: 15.0,
    programmeYears: [1, 2],
    tracks: ["RASM"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2414",
    name: "Engineering Project in Robotics, Perception and Learning",
    totalHP: 15.0,
    programmeYears: [1],
    tracks: ["RASM"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2421",
    name: "Machine Learning",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["RASM", "LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2437",
    name: "Artificial Neural Networks and Deep Architectures",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["RASM", "LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2438",
    name: "Artificial Intelligence and Multi Agent Systems",
    totalHP: 15.0,
    programmeYears: [1, 2],
    tracks: ["RASM"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DT2119",
    name: "Speech and Speaker Recognition",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["RASM"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "EL2810",
    name: "Machine Learning Theory",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["RASM", "LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2413",
    name: "Social Robotics",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["RASM"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2416",
    name: "Safe Robot Planning and Control",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["RASM", "LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2434",
    name: "Machine Learning, Advanced Course",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["RASM", "LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2600",
    name: "Robot Learning and Embodied AI",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["RASM", "LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "EL2850",
    name: "Cyber-Physical Security in Time-Critical Systems",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["RASM", "LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "EQ2300",
    name: "Digital Signal Processing",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["RASM", "LDCS"],
    category: "conditionallyElective",
    periods: {}
  },

  // ============================================================
  // RASM — YEAR 2
  // ============================================================

  {
    code: "DD2601",
    name: "Deep Generative Models and Synthesis",
    totalHP: 7.5,
    programmeYears: [2],
    tracks: ["RASM"],
    category: "conditionallyElective",
    periods: {}
  },

  // ============================================================
  // LDCS — YEAR 1
  // ============================================================

  {
    code: "EL2450",
    name: "Hybrid and Embedded Control Systems",
    totalHP: 7.5,
    programmeYears: [1],
    tracks: ["LDCS"],
    category: "mandatory",
    periods: { "Y1-P3": 7.5 }
  },

  {
    code: "DD2421",
    name: "Machine Learning",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2424",
    name: "Deep Learning in Data Science",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "DD2437",
    name: "Artificial Neural Networks and Deep Architectures",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "EQ2401",
    name: "Adaptive Signal Processing",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "SF1691",
    name: "Complex Analysis",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "SF2822",
    name: "Applied Nonlinear Optimization",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "SF2842",
    name: "Geometric Control Theory",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["LDCS"],
    category: "conditionallyElective",
    periods: {}
  },

  // ============================================================
  // LDCS — YEAR 2
  // ============================================================

  {
    code: "EL2700",
    name: "Model Predictive Control",
    totalHP: 7.5,
    programmeYears: [2],
    tracks: ["LDCS"],
    category: "mandatory",
    periods: { "Y2-P1": 7.5 }
  },
  {
    code: "EQ2801",
    name: "Optimal Filtering",
    totalHP: 7.5,
    programmeYears: [2],
    tracks: ["LDCS"],
    category: "conditionallyElective",
    periods: {}
  },
  {
    code: "SF2852",
    name: "Optimal Control Theory",
    totalHP: 7.5,
    programmeYears: [1, 2],
    tracks: ["LDCS"],
    category: "conditionallyElective",
    periods: {}
  }
];

const mlOfficialPeriodsByCohort = {
  DA2205: { "Y1-P1": 3.0, "Y1-P2": 4.5 },
  DD1420: { "Y1-P1": 7.5 },
  DD2301: { "Y1-P1": 0.5, "Y1-P2": 0.5, "Y1-P3": 0.5, "Y1-P4": 0.5, "Y2-P1": 0.5, "Y2-P2": 0.5 },
  DD2380: { "Y1-P1": 6.0 },
  DD2434: { "Y1-P2": 7.5 },
  DD2430: { "Y1-P1": 3.5, "Y1-P2": 4.0, "Y2-P1": 3.5, "Y2-P2": 4.0 },
  DD2257: { "Y1-P1": 7.5, "Y2-P1": 7.5 },
  DD2410: { "Y1-P1": 7.5, "Y2-P1": 7.5 },
  DD2423: { "Y1-P2": 7.5, "Y2-P2": 7.5 },
  DD2435: { "Y1-P1": 6.0, "Y1-P2": 3.0, "Y2-P1": 6.0, "Y2-P2": 3.0 },
  DD2447: { "Y1-P2": 6.0, "Y2-P2": 6.0 },
  DD2601: { "Y1-P1": 7.5, "Y2-P1": 7.5 },
  DD2610: { "Y1-P1": 4.5, "Y1-P2": 3.0, "Y2-P1": 4.5, "Y2-P2": 3.0 },
  DT2470: { "Y1-P1": 7.5, "Y2-P1": 7.5 },
  EL2320: { "Y1-P2": 7.5, "Y2-P2": 7.5 },
  EL2805: { "Y1-P2": 7.5, "Y2-P2": 7.5 },
  EQ2425: { "Y1-P1": 7.5, "Y2-P1": 7.5 },
  ID2222: { "Y1-P2": 7.5, "Y2-P2": 7.5 },
  ID2223: { "Y1-P2": 7.5, "Y2-P2": 7.5 },
  SF1811: { "Y1-P2": 6.0, "Y2-P2": 6.0 },
  SF2940: { "Y1-P1": 7.5, "Y2-P1": 7.5 },
  DD2401: { "Y1-P4": 7.5 },
  DD2402: { "Y1-P3": 3.0, "Y1-P4": 3.0 },
  DD2411: { "Y1-P3": 4.0, "Y1-P4": 3.5, "Y2-P3": 4.0, "Y2-P4": 3.5 },
  DD2417: { "Y1-P4": 7.5 },
  DD2419: { "Y1-P3": 4.5, "Y1-P4": 4.5 },
  DD2420: { "Y1-P3": 7.5, "Y2-P3": 7.5 },
  DD2424: { "Y1-P4": 7.5 },
  DD2437: { "Y1-P3": 7.5, "Y2-P3": 7.5 },
  DD2438: { "Y1-P3": 7.0, "Y1-P4": 8.0, "Y2-P3": 7.0, "Y2-P4": 8.0 },
  DD2477: { "Y1-P3": 4.5, "Y1-P4": 3.0 },
  DT2112: { "Y1-P3": 7.5 },
  DT2119: { "Y1-P4": 7.5 },
  EL2810: { "Y1-P3": 7.5 },
  EQ2341: { "Y1-P4": 7.5 },
  SF2930: { "Y1-P3": 7.5, "Y2-P3": 7.5 },
  SF2943: { "Y1-P4": 7.5 },
  DD2395: { "Y1-P1": 6.0, "Y2-P1": 6.0 },
  ID2221: { "Y1-P1": 7.5, "Y2-P1": 7.5 },
  IK2215: { "Y1-P1": 7.5, "Y2-P1": 7.5 },
  DD2603: { "Y1-P2": 7.5, "Y2-P2": 7.5 },
  DD1388: { "Y1-P3": 4.0, "Y1-P4": 3.5, "Y2-P3": 4.0, "Y2-P4": 3.5 },
  DD2352: { "Y1-P3": 3.0, "Y1-P4": 4.5, "Y2-P3": 3.0, "Y2-P4": 4.5 },
  DD2448: { "Y1-P4": 7.5, "Y2-P4": 7.5 },
  DH2642: { "Y1-P3": 4.5, "Y1-P4": 3.0, "Y2-P3": 4.5, "Y2-P4": 3.0 },
  IK2221: { "Y1-P4": 7.5, "Y2-P4": 7.5 },
  IK2227: { "Y1-P3": 7.5, "Y2-P3": 7.5 },
  SF2568: { "Y2-P3": 3.5, "Y2-P4": 4.0 }
};

const roboticsOfficialPeriodsByCohort = {
  DD2410: { "Y1-P1": 7.5 },
  EL2220: {
    "Y1-P1": 0.4, "Y1-P2": 0.4, "Y1-P3": 0.3, "Y1-P4": 0.4,
    "Y2-P1": 0.4, "Y2-P2": 0.4, "Y2-P3": 0.3, "Y2-P4": 0.4
  },
  EL2820: { "Y1-P1": 7.5 },
  EL2520: { "Y1-P4": 7.5 },
  SF2940: { "Y1-P1": 7.5 },
  DD2430: { "Y1-P1": 3.5, "Y1-P2": 4.0 },
  DT2140: { "Y1-P2": 7.5 },
  DT2151: { "Y1-P2": 7.5 },
  EH2030: { "Y1-P2": 7.5 },
  EH2720: { "Y1-P1": 7.5 },
  EK2370: { "Y1-P1": 7.5 },
  EL1010: { "Y1-P2": 6.0 },
  EL2425: { "Y1-P2": 7.5 },
  EL2620: { "Y1-P2": 7.5 },
  EL2700: { "Y1-P1": 7.5, "Y2-P1": 7.5 },
  EL2805: { "Y1-P2": 7.5 },
  EQ1220: { "Y1-P1": 7.5 },
  EQ2310: { "Y1-P2": 8.5, "Y1-P3": 0.5 },
  EG2140: { "Y1-P1": 3.5, "Y1-P2": 4.0 },
  EQ2871: { "Y1-P1": 7.5 },
  SF2852: { "Y1-P1": 7.5 },
  IL2206: { "Y1-P1": 7.5 },
  LS1452: { "Y1-P1": 3.0, "Y1-P2": 4.5 },
  LS1464: { "Y1-P1": 4.0, "Y1-P2": 3.5 },
  LS2442: { "Y1-P2": 7.5 },
  ME1003: { "Y1-P1": 6.0 },
  MF2007: { "Y1-P2": 9.0 },
  MF2030: { "Y1-P1": 6.0 },
  MF2043: { "Y1-P1": 6.0 },
  SF1811: { "Y1-P2": 6.0 },
  SF2832: { "Y1-P2": 7.5 },
  DD1388: { "Y1-P3": 4.0, "Y1-P4": 3.5 },
  DD2419: { "Y1-P3": 4.5, "Y1-P4": 4.5 },
  DD2420: { "Y1-P3": 7.5 },
  DD2424: { "Y1-P4": 7.5 },
  DD2438: { "Y1-P3": 7.0, "Y1-P4": 8.0 },
  EG2210: { "Y1-P3": 7.5 },
  EP2520: { "Y1-P3": 7.5 },
  EQ2321: { "Y1-P3": 7.5 },
  IL2212: { "Y1-P3": 7.5 },
  LS2444: { "Y1-P4": 7.5 },
  SD2231: { "Y1-P4": 7.5 },
  SF2812: { "Y1-P3": 7.5 },
  SF2842: { "Y1-P3": 7.5 },
  SF2943: { "Y1-P4": 7.5 },
  SF1861: { "Y1-P4": 6.0 },
  EL2450: { "Y1-P3": 7.5 },
  SF1691: { "Y1-P3": 3.7, "Y1-P4": 3.8 },
  LS1427: { "Y1-P1": 3.0, "Y1-P2": 2.0 },
  LS1437: { "Y1-P1": 3.0, "Y1-P2": 2.0 },
  LS1446: { "Y1-P1": 3.0, "Y1-P2": 2.0 },
  DD2423: { "Y1-P2": 7.5 },
  EL2320: { "Y1-P2": 7.5 },
  DD2434: { "Y1-P2": 7.5 },
  AK2030: { "Y2-P1": 4.5 },
  DA236X: { "Y2-P3": 15.0, "Y2-P4": 15.0 },
  EA236X: { "Y2-P3": 15.0, "Y2-P4": 15.0 }
};

function applyOfficialPeriodMaps(courses, schedule) {
  courses.forEach(course => {
    if (!Object.prototype.hasOwnProperty.call(schedule, course.code)) return;
    const fullPeriods = {...schedule[course.code]};
    const years = [...new Set(Object.keys(fullPeriods).map(key => key.startsWith('Y1-') ? 1 : 2))];
    const mappedHP = Object.values(fullPeriods).reduce((sum, hp) => sum + hp, 0);
    if (years.length > 1 && !['DD2301', 'EL2220'].includes(course.code)) {
      course.periodsByProgrammeYear = Object.fromEntries(years.map(year => [
        year,
        Object.fromEntries(Object.entries(fullPeriods).filter(([key]) => key.startsWith(`Y${year}-`)))
      ]));
      const preferredYear = course.programmeYears?.[0] || years[0];
      course.periods = course.periodsByProgrammeYear[preferredYear] || {};
      return;
    }
    course.periods = fullPeriods;
  });
}

function coursePeriodsForYear(course, year) {
  return course.periodsByProgrammeYear?.[year] || course.periods || {};
}

applyOfficialPeriodMaps(machineLearningCourses, mlOfficialPeriodsByCohort);
applyOfficialPeriodMaps(roboticsCourses, roboticsOfficialPeriodsByCohort);

// ============================================================
// UTILITIES & LOGIC
// ============================================================

const CATEGORY_MAP = {
    'mandatory': 'Mandatory',
    'conditionallyElective': 'Elective',
    'recommended': 'Recommended'
};

function normalizeCourse(c) {
    let periodStr = null;
    if (c.periods && Object.keys(c.periods).length > 0) {
        periodStr = Object.keys(c.periods)
            .map(p => p.replace('Y1', 'Year 1').replace('Y2', 'Year 2').replace('-', ' '))
            .join(', ');
    }

    return {
        ...c,
        hp: c.totalHP,
        type: CATEGORY_MAP[c.category] || 'Elective',
        year: c.programmeYears && c.programmeYears.length > 0 ? c.programmeYears[0] : null,
        period: periodStr
    };
}

const mlCourses = machineLearningCourses.map(normalizeCourse);
const scrCourses = roboticsCourses.map(normalizeCourse);

function isCourseInPeriod(course, period) {
    if (!course) return false;
  if (course.customPeriod) return course.customPeriod === period;
  const periodKey = period.replace('Year 1', 'Y1').replace('Year 2', 'Y2').replace(' ', '-');
  if (course.selectedPeriods) return course.selectedPeriods[periodKey] !== undefined;

  if (course.periods && Object.keys(course.periods).length > 0) {
    return course.periods[periodKey] !== undefined;
    }

    // Fallback to period string
    if (course.period) {
        const offerings = course.period.split(',').map(o => o.trim());
        return offerings.some(offering => {
            if (offering === period) return true;
            if (offering.includes('-')) {
                const [start, end] = offering.split('-');
                return start.trim() === period || end.trim() === period;
            }
            return false;
        });
    }

    return false;
}

function getCourseHPForPeriod(course, period) {
    if (!course) return 0;
  if (course.customPeriod) {
    return course.customPeriod === period ? course.customPeriodHP : 0;
  }

    const periods = course.selectedPeriods || course.periods;
    if (periods) {
        const periodKey = period.replace('Year 1', 'Y1').replace('Year 2', 'Y2').replace(' ', '-');
      return periods[periodKey] || 0;
    }

    if (isCourseInPeriod(course, period)) {
        const totalPeriods = course.period ? course.period.split(',').length : 1;
        return (parseFloat(course.hp) || 0) / totalPeriods;
    }

    return 0;
}

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
    document.getElementById('tab-' + tabId).classList.remove('hidden');
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('tab-active'));
    document.getElementById('btn-' + tabId).classList.add('tab-active');
}

function getCourseUrl(code) {
    return `https://www.kth.se/student/kurser/kurs/${code}?l=en`;
}

function populateComparison() {
    const container = document.getElementById('comparison-container');
    const mlCodes = new Set(mlCourses.map(c => c.code));
    const scrCodes = new Set(scrCourses.map(c => c.code));
    const allCodes = new Set([...mlCodes, ...scrCodes]);

    const courses = Array.from(allCodes).map(code => {
        const mlC = mlCourses.find(c => c.code === code);
        const scrC = scrCourses.find(c => c.code === code);
        return {
            name: mlC ? mlC.name : scrC.name,
            code: code,
            shared: mlC && scrC,
            prog: mlC && scrC ? "Both" : (mlC ? "ML" : "Robotics"),
            period: mlC ? mlC.period : scrC.period,
            year: mlC ? mlC.year : scrC.year,
            prereqs: (mlC || scrC).prerequisites || [],
            mlRequired: mlC && mlC.type === 'Mandatory',
            scrRequired: scrC && scrC.type === 'Mandatory',
            hp: mlC ? mlC.hp : scrC.hp,
            summary: mlC ? mlC.summary : scrC.summary
        };
    });

    const periods = ["Year 1 P1", "Year 1 P2", "Year 1 P3", "Year 1 P4", "Year 2 P1", "Year 2 P2", "Year 2 P3", "Year 2 P4", "Other"];
    let html = '';

    periods.forEach(p => {
        const periodCourses = courses.filter(c => {
            if (!c.period) return p === "Other";
            const offerings = c.period.split(',').map(o => o.trim());
            const matches = offerings.some(offering => {
                if (offering === p) return true;
                if (offering.includes('-')) {
                    const [start, end] = offering.split('-');
                    if (start.trim() === p || end.trim() === p) return true;
                }
                return false;
            });
            if (matches) return true;
            if (p === "Other") {
                return !["Year 1 P1", "Year 1 P2", "Year 1 P3", "Year 1 P4", "Year 2 P1", "Year 2 P2", "Year 2 P3", "Year 2 P4"].includes(c.period);
            }
            return false;
        });
        if (periodCourses.length === 0) return;

        periodCourses.sort((a, b) => (b.shared ? 1 : 0) - (a.shared ? 1 : 0));

        html += `<div class="period-section">
                <h3 class="text-lg font-bold mb-4 text-blue-800 flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    ${p}
                </h3>
                <div class="overflow-x-auto bg-white rounded-lg shadow-sm overflow-hidden">
                    <table class="w-full text-left border-collapse">
                        <thead class="bg-gray-50 border-b">
                            <tr class="text-xs uppercase tracking-wider text-gray-500">
                                <th class="p-4 font-semibold">Course Name</th>
                                <th class="p-4 font-semibold">Code</th>
                                <th class="p-4 font-semibold text-center">Shared</th>
                                <th class="p-4 font-semibold text-center">ML Req.</th>
                                <th class="p-4 font-semibold text-center">SCR Req.</th>
                                <th class="p-4 font-semibold">HP</th>
                                <th class="p-4 font-semibold">Prerequisites</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${periodCourses.map(c => `
                                <tr class="border-b last:border-0 hover:bg-gray-50 transition-colors ${c.shared ? 'bg-blue-50/30' : ''}"
                                    onmouseenter="showTooltip(event, '${c.summary}')"
                                    onmouseleave="hideTooltip()">
                                    <td class="p-4">
                                        <a href="${getCourseUrl(c.code)}" target="_blank" class="text-sm font-medium cursor-pointer hover:text-blue-600 transition-colors underline decoration-blue-200 underline-offset-2">${c.name}</a>
                                        ${c.shared ? '<span class="ml-2 text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full">Shared</span>' : ''}
                                    </td>
                                    <td class="p-4 font-mono text-xs text-gray-600">
                                        <a href="${getCourseUrl(c.code)}" target="_blank" class="hover:text-blue-600">${c.code}</a>
                                    </td>
                                    <td class="p-4 text-center">${c.shared ? '✅' : '❌'}</td>
                                    <td class="p-4 text-center">${c.mlRequired ? '✅' : '❌'}</td>
                                    <td class="p-4 text-center">${c.scrRequired ? '✅' : '❌'}</td>
                                    <td class="p-4 text-center text-xs">${c.hp}</td>
                                    <td class="p-4 text-xs text-gray-500">${c.prereqs.length ? c.prereqs.join(', ') : 'None'}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                </div>`;
    });
    container.innerHTML = html;
}

function showTooltip(event, text) {
    const tooltip = document.getElementById('tooltip');
    tooltip.innerText = text;
    tooltip.style.opacity = '1';
    tooltip.style.left = (event.pageX + 15) + 'px';
    tooltip.style.top = (event.pageY + 15) + 'px';
}

function hideTooltip() {
    document.getElementById('tooltip').style.opacity = '0';
}

function renderRoadmap(containerId, pathCourses, programType) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const periods = ["Year 1 P1", "Year 1 P2", "Year 1 P3", "Year 1 P4", "Year 2 P1", "Year 2 P2", "Year 2 P3", "Year 2 P4"];

    periods.forEach(p => {
        const periodCourses = pathCourses.filter(c => isCourseInPeriod(c, p));
        const col = document.createElement('div');
        col.className = "flex flex-col gap-6 min-w-[160px] w-full relative";

        const periodHP = pathCourses.reduce((sum, c) => sum + getCourseHPForPeriod(c, p), 0);

        let hpWarning = '';
        if (periodHP > 22.5) {
            hpWarning = `<div class="text-[10px] font-bold text-red-600 mt-1">⚠️ ${periodHP.toFixed(1)} HP - Exceeds Max (22.5)</div>`;
        } else if (periodHP > 15) {
            hpWarning = `<div class="text-[10px] font-bold text-orange-500 mt-1">ℹ️ ${periodHP.toFixed(1)} HP - Above Normal (15)</div>`;
        } else if (periodHP > 0) {
            hpWarning = `<div class="text-[10px] text-gray-400 mt-1">${periodHP.toFixed(1)} HP / 15</div>`;
        } else {
            hpWarning = `<div class="text-[10px] text-gray-300 mt-1">0 HP / 15</div>`;
        }

        col.innerHTML = `
            <div class="text-center">
                <h3 class="font-bold text-gray-500 uppercase text-xs tracking-wider">${p}</h3>
                ${hpWarning}
            </div>`;

        periodCourses.forEach(course => {
            const node = document.createElement('div');
            node.id = `node-${course.code}`;
            node.dataset.pre = (course.dependencies || []).join(',');
            node.dataset.dep = course.code;

            const isShared = programType === 'ml'
                ? scrCourses.some(sc => sc.code === course.code)
                : mlCourses.some(mc => mc.code === course.code);

            const activePeriods = course.selectedPeriods || course.periods;
            const isSpanning = !course.customPeriod && activePeriods && Object.keys(activePeriods).length > 1;
            const statusBadgeClass = course.type === 'Mandatory'
              ? 'bg-red-100 text-red-800'
              : course.type === 'Elective'
                ? 'bg-green-100 text-green-800'
                : 'bg-blue-100 text-blue-800';
            node.className = `flow-node p-4 rounded-lg border shadow-sm ${course.type === 'Mandatory' ? 'mandatory' : course.type === 'Elective' ? 'elective' : 'recommended'} ${isShared ? 'ring-2 ring-blue-400 ring-inset' : ''}`;

            if (isSpanning) {
                node.style.position = 'relative';
                node.style.zIndex = '5';
                node.classList.add('border-l-8', 'border-l-blue-500');
            } else {
                node.style.position = 'relative';
                node.style.zIndex = '20';
            }

            const currentHP = getCourseHPForPeriod(course, p);
            node.innerHTML = `<div class="pr-6 text-sm font-bold">${course.name}<span class="ml-1 rounded px-1 py-0.5 text-[9px] font-bold uppercase ${statusBadgeClass}">${course.type}</span>${isShared ? ' <span class="text-[10px] bg-blue-100 text-blue-600 px-1 rounded-full ml-1">Shared</span>' : ''}</div><div class="text-xs opacity-70">${course.code} • ${isSpanning ? `${currentHP.toFixed(1)} HP this period (Total ${course.hp} HP)` : `${course.hp} HP`}</div>`;

            if (course.type !== 'Mandatory') {
              const removeButton = document.createElement('button');
              removeButton.type = 'button';
              removeButton.className = 'absolute top-1 right-1 flex h-6 w-6 items-center justify-center rounded text-gray-400 hover:bg-red-50 hover:text-red-600';
              removeButton.setAttribute('aria-label', `Remove ${course.code} from this path`);
              removeButton.title = 'Remove course from this path';
              removeButton.innerHTML = '&times;';
              removeButton.onclick = (event) => {
                event.stopPropagation();
                const activePath = programType === 'ml' ? mlActivePath : roboticsActivePath;
                const courseIndex = activePath.indexOf(course);
                if (courseIndex !== -1) {
                  activePath.splice(courseIndex, 1);
                  updateRoadmaps();
                }
              };
              node.appendChild(removeButton);
            }

            node.onclick = (e) => {
                if (e.shiftKey) {
                    openPeriodModal(course);
                } else {
                    window.open(getCourseUrl(course.code), '_blank');
                }
            };
            node.onmouseenter = () => {
                const connectedLines = document.querySelectorAll(`.flow-connector[data-start="${course.code}"], .flow-connector[data-end="${course.code}"]`);
                connectedLines.forEach(line => line.classList.add('highlight'));
                const relatedNodes = document.querySelectorAll(`.flow-node[data-dep="${course.code}"], .flow-node[data-pre="${course.code}"]`);
                relatedNodes.forEach(n => n.classList.add('highlight'));
            };
            node.onmouseleave = () => {
                document.querySelectorAll('.flow-connector.highlight').forEach(line => line.classList.remove('highlight'));
                document.querySelectorAll('.flow-node.highlight').forEach(n => n.classList.remove('highlight'));
            };
            col.appendChild(node);
        });

        const slot = document.createElement('div');
        slot.className = "add-course-slot p-4 rounded-lg border text-gray-400 text-sm font-medium text-center";
        slot.innerHTML = "<span>+ Add Course</span>";
        slot.onclick = () => openAddModal(programType, p);
        col.appendChild(slot);

        container.appendChild(col);
    });

    // Use requestAnimationFrame to ensure nodes are in the DOM and positioned
    requestAnimationFrame(() => {
        drawConnectors(container, pathCourses);
    });
}

function drawConnectors(container, pathCourses) {
    // Clear existing connectors first
    container.querySelectorAll('.flow-connector').forEach(el => el.remove());

    pathCourses.forEach(course => {
        if (course.dependencies) {
            course.dependencies.forEach(depCode => {
                const startEl = document.getElementById(`node-${course.code}`);
                const endEl = document.getElementById(`node-${depCode}`);
                if (startEl && endEl) {
                    const startRect = startEl.getBoundingClientRect();
                    const endRect = endEl.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    const line = document.createElement('div');
                    line.className = 'flow-connector';
                    line.dataset.start = course.code;
                    line.dataset.end = depCode;
                    const x1 = startRect.right - containerRect.left;
                    const y1 = startRect.top + startRect.height/2 - containerRect.top;
                    const x2 = endRect.left - containerRect.left;
                    const y2 = endRect.top + endRect.height/2 - containerRect.top;
                    const length = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
                    const angle = Math.atan2(y2-y1, x2-x1) * 180 / Math.PI;
                    line.style.width = `${length}px`;
                    line.style.left = `${x1}px`;
                    line.style.top = `${y1}px`;
                    line.style.transform = `rotate(${angle}deg)`;
                    container.appendChild(line);
                }
            });
        }
    });
}

let editingCourse = null;
function openPeriodModal(course) {
    editingCourse = course;
    document.getElementById('modal-course-name').innerText = `${course.name} (${course.code})`;
    const optionsContainer = document.getElementById('period-options');
    optionsContainer.innerHTML = '';
  const periods = Object.entries(course.periods || {})
    .filter(([, hp]) => hp > 0)
    .map(([key]) => key.replace('Y1', 'Year 1').replace('Y2', 'Year 2').replace('-', ' '));
  if (periods.length !== 1) {
    optionsContainer.innerHTML = `<p class="col-span-2 text-sm text-gray-500">${periods.length ? 'This course spans multiple periods and cannot be moved as one block.' : 'No verified period offering is recorded for this course.'}</p>`;
    document.getElementById('period-modal').classList.remove('hidden');
    return;
  }
    periods.forEach(p => {
        const btn = document.createElement('button');
    btn.className = `p-2 text-sm rounded border transition-colors ${course.customPeriod === p || isCourseInPeriod(course, p) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 hover:bg-gray-100'}`;
        btn.innerText = p;
        btn.onclick = () => setCoursePeriod(p);
        optionsContainer.appendChild(btn);
    });
    document.getElementById('period-modal').classList.remove('hidden');
}

function setCoursePeriod(newPeriod) {
    if (editingCourse) {
    const periodKey = newPeriod.replace('Year 1', 'Y1').replace('Year 2', 'Y2').replace(' ', '-');
    if (!(editingCourse.periods?.[periodKey] > 0)) return;
    delete editingCourse.customPeriod;
    delete editingCourse.customPeriodHP;
  const targetYearPrefix = periodKey.slice(0, 3);
  editingCourse.selectedPeriods = Object.fromEntries(Object.entries(editingCourse.periods).filter(([key]) =>
    key.startsWith(`${targetYearPrefix}-`)
  ));
    editingCourse.period = newPeriod;
    editingCourse.year = newPeriod.startsWith("Year 1") ? 1 : 2;
    }
    closePeriodModal();
    updateRoadmaps();
}

function closePeriodModal() {
    document.getElementById('period-modal').classList.add('hidden');
    editingCourse = null;
}

function updateRoadmaps() {
    renderRoadmap('ml-roadmap', mlActivePath, 'ml');
    renderRoadmap('robotics-roadmap', roboticsActivePath, 'robotics');
    updateRequirements('ml', mlActivePath);
    updateRequirements('robotics', roboticsActivePath);
}

function updateRequirements(program, activePath) {
    const container = document.getElementById(`${program}-requirements`);
    const roboticsTrack = document.getElementById('robotics-track-select')?.value || 'all';

    const reqs = [
        { id: 'common', label: 'Common Mandatory', target: 30, type: 'common' },
        { id: 'track', label: 'Track Mandatory', target: 15, type: 'mandatory' },
        { id: 'elective', label: 'Conditionally Elective', target: 21, type: 'elective' },
        { id: 'project', label: 'Project Course', target: 1, type: 'project' },
        { id: 'degree', label: 'Degree Project', target: 30, type: 'degree' },
    ];

    let totals = { common: 0, mandatory: 0, elective: 0, project: 0, degree: 0 };

    activePath.forEach(course => {
        const hp = parseFloat(course.hp) || 0;

        if (course.code === 'DA233X' || course.code === 'DA236X' || course.code === 'EA236X') {
          totals.degree = Math.max(totals.degree, hp);
        } else if (course.type === 'Mandatory') {
          const selectedTrack = roboticsTrack === 'control' ? 'LDCS' : roboticsTrack === 'robotics' ? 'RASM' : null;
          const isCommon = course.tracks?.includes('COMMON');
            if (isCommon) {
                totals.common += hp;
          } else if (program !== 'robotics' || !selectedTrack || course.tracks?.includes(selectedTrack)) {
            totals.mandatory += hp;
            }
        } else if (course.type === 'Elective') {
            totals.elective += hp;
        }

        if (course.name.toLowerCase().includes('project course')) {
            totals.project += 1;
        }
    });

    container.innerHTML = reqs.map(req => {
        const current = totals[req.type];
        const isDone = current >= req.target;
        return `
            <div class="req-item flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div class="req-check w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs mr-3 ${isDone ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 text-gray-300'}">
                    ${isDone ? '✓' : ''}
                </div>
                <div class="flex-1">
                    <div class="font-medium text-sm">${req.label}</div>
                    <div class="text-xs text-gray-500">${current} / ${req.target} ${req.type === 'project' ? 'Courses' : 'HP'}</div>
                </div>
            </div>
        `;
    }).join('');
}

let roboticsDegreeProject = 'DA236X';

function isRoboticsDegreeProject(code) {
    return code === 'DA236X' || code === 'EA236X';
}

function changeRoboticsTrack(track) {
    const trackKey = track === 'control' ? 'LDCS' : track === 'robotics' ? 'RASM' : null;
    const mandatoryCourses = scrCourses.filter(course => {
        if (course.type !== 'Mandatory') return false;
        if (isRoboticsDegreeProject(course.code)) return course.code === roboticsDegreeProject;
        return course.tracks?.includes('COMMON') || !trackKey || course.tracks?.includes(trackKey);
    });
    const retainedCourses = roboticsActivePath.filter(course =>
        course.userAdded || !scrCourses.some(source => source.code === course.code && source.type === 'Mandatory')
    );
    roboticsActivePath = [...mandatoryCourses, ...retainedCourses];
    updateRoadmaps();
}

function changeRoboticsDegreeProject(code) {
    if (!isRoboticsDegreeProject(code)) return;
    roboticsDegreeProject = code;
    roboticsActivePath = roboticsActivePath.filter(course => !isRoboticsDegreeProject(course.code));
    const selectedCourse = scrCourses.find(course => course.code === code);
    if (selectedCourse) roboticsActivePath.push({...selectedCourse});
    updateRoadmaps();
}

let currentAddContext = { program: '', period: '' };
function openAddModal(program, period) {
    currentAddContext = { program, period };
  const periodKey = period.replace('Year 1', 'Y1').replace('Year 2', 'Y2').replace(' ', '-');
    document.getElementById('modal-program-name').innerText = program === 'ml' ? 'Machine Learning' : 'Robotics';
    document.getElementById('modal-period-name').innerText = `Add a course to ${period}`;

    const primaryCourses = program === 'ml' ? mlCourses : scrCourses;
    const secondaryCourses = program === 'ml' ? scrCourses : mlCourses;
    const listContainer = document.getElementById('available-courses-list');
    listContainer.innerHTML = '';

    const activePath = program === 'ml' ? mlActivePath : roboticsActivePath;
    const activeCodes = new Set(activePath.map(course => course.code));

    const targetYear = periodKey.startsWith('Y1-') ? 1 : 2;
    const coursesByCode = new Map();
    primaryCourses.forEach(course => {
      const counterpart = secondaryCourses.find(item => item.code === course.code);
      const periods = coursePeriodsForYear(course, targetYear);
      const counterpartPeriods = counterpart ? coursePeriodsForYear(counterpart, targetYear) : {};
      const sourcePeriods = {...counterpartPeriods, ...periods};
      const allowedYears = new Set(course.programmeYears || [1, 2]);
      const targetPeriods = Object.fromEntries(Object.entries(sourcePeriods || {}).filter(([key]) =>
        allowedYears.has(key.startsWith('Y1-') ? 1 : 2)
      ));
      coursesByCode.set(course.code, {...course, periods: targetPeriods});
    });
    secondaryCourses.forEach(course => {
      if (!coursesByCode.has(course.code)) {
        coursesByCode.set(course.code, {...course, periods: coursePeriodsForYear(course, targetYear)});
      }
    });
    const uniqueCourses = [...coursesByCode.values()];
    const available = uniqueCourses.filter(course => {
      if (program === 'robotics' && isRoboticsDegreeProject(course.code)) return false;
      if (!(course.periods?.[periodKey] > 0)) return false;
      if (!activeCodes.has(course.code)) return true;
      const activeCourse = activePath.find(item => item.code === course.code);
      return activeCourse &&
          course.periods?.[periodKey] > 0 &&
          !isCourseInPeriod(activeCourse, period);
    });

    if (available.length === 0) {
      listContainer.innerHTML = '<p class="text-center text-gray-400 py-4">No verified course offerings for this period.</p>';
    } else {
        available.forEach(course => {
          const activeCourse = activePath.find(item => item.code === course.code);
          const offeringLabel = Object.entries(course.periods || {})
              .filter(([, hp]) => hp > 0)
              .map(([key, hp]) => `${key.replace('Y1', 'Year 1').replace('Y2', 'Year 2').replace('-', ' ')} (${hp} HP)`)
              .join(', ');
            const isShared = program === 'ml'
                ? scrCourses.some(sc => sc.code === course.code)
                : mlCourses.some(mc => mc.code === course.code);

            const item = document.createElement('div');
            item.className = `p-3 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors flex justify-between items-center group ${isShared ? 'border-blue-300 bg-blue-50/30' : ''}`;
            item.innerHTML = `<div class="flex flex-col">
                <div class="text-sm font-bold flex items-center">
                    ${course.name}${isShared ? ' <span class="text-[10px] bg-blue-100 text-blue-600 px-1 rounded-full ml-1">Shared</span>' : ''}
                </div>
                <div class="text-xs opacity-60">${course.code} • ${course.hp} HP • ${course.type}</div>
                <div class="text-xs text-blue-700">Offered: ${offeringLabel}</div>
            </div><span class="text-blue-600 opacity-0 group-hover:opacity-100 text-sm font-medium">${activeCourse ? 'Move here' : '+'}</span>`;
            item.onclick = () => addSelectedCourse(course);
            listContainer.appendChild(item);
        });
    }
        const unverifiedCount = uniqueCourses.filter(course => !Object.keys(course.periods || {}).length).length;
        if (unverifiedCount > 0) {
          const note = document.createElement('p');
          note.className = 'text-xs text-gray-500 border-t pt-3 mt-3';
          note.innerText = `${unverifiedCount} catalog courses have no verified period map and are omitted.`;
          listContainer.appendChild(note);
        }
    document.getElementById('add-course-modal').classList.remove('hidden');
}

function addSelectedCourse(course) {
  const { program, period } = currentAddContext;
  const periodKey = period.replace('Year 1', 'Y1').replace('Year 2', 'Y2').replace(' ', '-');
  if (!(course.periods?.[periodKey] > 0)) return;
  const targetYear = periodKey.startsWith('Y1-') ? 1 : 2;
  const activePath = program === 'ml' ? mlActivePath : roboticsActivePath;
  const activeCourse = activePath.find(item => item.code === course.code);

  if (activeCourse) {
    if (!(course.periods?.[periodKey] > 0)) return;
    delete activeCourse.customPeriod;
    delete activeCourse.customPeriodHP;
    activeCourse.selectedPeriods = course.periodsByProgrammeYear
      ? coursePeriodsForYear(course, targetYear)
      : course.periods;
  } else {
    const selectedCourse = {
      ...course,
      userAdded: true,
      selectedPeriods: course.periodsByProgrammeYear
        ? coursePeriodsForYear(course, targetYear)
        : course.periods
    };
    activePath.push(selectedCourse);
  }
    updateRoadmaps();
    openAddModal(program, period);
}

function closeAddModal() {
    document.getElementById('add-course-modal').classList.add('hidden');
}

// Initialization
let mlActivePath = [];
let roboticsActivePath = [];

window.onload = () => {
    mlActivePath = mlCourses.filter(c => c.type === 'Mandatory');
  roboticsActivePath = scrCourses.filter(c =>
    c.type === 'Mandatory' && (!isRoboticsDegreeProject(c.code) || c.code === roboticsDegreeProject)
  );
  document.getElementById('robotics-degree-select').value = roboticsDegreeProject;

    populateComparison();
    updateRoadmaps();
};
