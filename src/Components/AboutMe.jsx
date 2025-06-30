import React from "react";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="py-12 px-4 md:px-10 bg-base-100  text-base-content">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center pt-14">
         About Me
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-justify">
          Hey there! I'm{" "}
          <span className="font-semibold text-primary">Lobib Wasef Ullah</span>,
          an enthusiastic
          <span className="text-secondary font-medium">
            {" "}
            ICT student at Bangladesh University of Professionals
          </span>
          . My journey into programming began with C and C++, where I discovered
          my love for problem-solving and logical thinking. Over time, I
          transitioned into web and mobile development, diving into technologies
          like{" "}
          <span className="font-medium">
            React, Tailwind CSS, Firebase,
          </span>{" "}
          and <span className="font-medium">React Native</span>.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mt-4 text-justify">
          I enjoy building meaningful and user-friendly apps—whether it's a
          full-stack freelancing platform or a hall management system for
          students. Clean UI, seamless UX, and solving real-life problems
          through code are what excite me the most.
        </p>

        <p className="text-base sm:text-lg leading-relaxed mt-4 text-justify">
          Outside of coding, I’m a big fan of football ⚽—both watching and
          playing when I get the chance. I also love exploring tech gadgets and
          occasionally dive into digital design. I believe in lifelong learning
          and aim to pursue higher studies abroad to grow as a global developer.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
