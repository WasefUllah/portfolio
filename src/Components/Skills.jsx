import React from "react";
import Marquee from "react-fast-marquee";
// eslint-disable-next-line no-unused-vars
import { animate, delay, motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    logo: "https://i.ibb.co/Z6yGqjZB/tailwindbgremoved.png",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      id="skills"
      className="py-12 px-4 md:px-10 bg-base-100 text-base-content w-11/12 mx-auto"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">My Skills</h2>
        <Marquee
          direction="left"
          speed={40}
          pauseOnHover={true}
          className="overflow-hidden"
        >
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center mx-6 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mb-2"
              />
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </motion.section>
  );
};

export default Skills;
