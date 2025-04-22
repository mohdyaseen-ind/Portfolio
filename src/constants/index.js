const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Started Learning and Building 2d Games and Published my first game on PlayStore. ",
    imgPath: "/images/trex.png",
    logoPath: "/images/dps.jpg",
    title: "Delhi Public School",
    date: "2015-2022",
    responsibilities: [
      "Built Many Games Like T-rex, Maze-Game, 2D Spaceship Battle.",
      "Published My first Game on Play Store.",
      "Implemented core game mechanics using JavaScript, including collision detection, scoring systems, and smooth animations.",
    ],
  },
  {
    review: "Learnt HTML, CSS, JavaScript, React.js and Python. Mentoring peers and helping them debug code.",
    imgPath: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2x6bzU1aTZqbTV6OTFkcHhzbzlzcWlyczR2dDdqdWQ2MXEzYjNheSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/q6RoNkLlFNjaw/giphy.gif",
    logoPath: "/images/nst.png",
    title: "Newton School of Technology",
    date: "August 2024 - Present",
    responsibilities: [
      "Completed a front-end development program covering HTML, CSS, JavaScript, React, and Python.",
      "Actively mentored peers, helping them debug code, understand core concepts, and build confidence in development.",
      "Collaborated on projects, participated in code reviews, and developed a strong foundation in frontend technologies.",
    ],
  },
  {
    review: "Contributing to Impactful Open Source Projects, Learning Backend Development, Solving DSA... Life is Going on.",
    logoPath: "/images/globe.png",
    title: "Front End Developer",
    date: "Present",
    responsibilities: [
      "Transforming sleek designs into responsive, pixel-perfect websites using Next.js, React, and Tailwind CSS.",
      "Focused on creating smooth user experiences with clean layouts, fast performance, and intuitive interactions.",
      "Always building, learning, and exploring modern frontend tech to bring ideas to life on the web.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
