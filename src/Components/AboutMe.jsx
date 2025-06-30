import React from "react";

const AboutMe = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          About Me
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify">
          I'm{" "}
          <span className="font-semibold text-primary">Lobib Wasef Ullah</span>,
          an enthusiastic
          <span className="font-medium text-secondary">
            {" "}
            ICT student at Bangladesh University of Professionals (BUP)
          </span>
          , deeply passionate about turning ideas into digital reality. I
          specialize in crafting responsive and user-friendly web and mobile
          apps using <span className="font-medium">React</span>,{" "}
          <span className="font-medium">Tailwind CSS</span>, and{" "}
          <span className="font-medium">React Native</span>.
        </p>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4 text-justify">
          From building functional platforms like{" "}
          <span className="font-semibold">PacePulse</span> to experimenting with
          full-stack tools, I'm on a mission to become a well-rounded developer.
          I'm also preparing to pursue higher studies abroad to enhance my
          skills, collaborate globally, and build tech that solves real-world
          problems.
        </p>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4 text-justify">
          I believe in continuous learning, meaningful collaboration, and using
          technology to create lasting value. Let’s connect and build something
          impactful together!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
