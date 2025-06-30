import React from "react";

const projects = [
  {
    name: "Pace Pulse",
    image: "https://i.ibb.co/QFjv075g/Screenshot-2025-06-30-173818.png", // Replace with actual screenshot URL
    description:
      "A marathon registration and event management platform built for seamless participant and organizer experience.",
    technologies: ["React", "Tailwind", "Firebase", "MongoDB", "Express"],
    live: "https://pace-pulse.firebaseapp.com/", // Replace if different
    github: "https://github.com/WasefUllah/b11-a11-pace-pulse-client-side",
  },
  {
    name: "Giglance",
    image: "https://i.ibb.co/pvnHzYJ3/Screenshot-2025-06-30-173636.png", // Replace with actual screenshot URL
    description:
      "A freelancing platform where users can post tasks, place bids, and manage freelance jobs efficiently.",
    technologies: ["React", "Tailwind", "Firebase", "Express", "MongoDB"],
    live: "https://giglance-f9386.firebaseapp.com/",
    github: "https://github.com/WasefUllah/Giglance-client",
  },
  {
    name: "AppStore",
    image: "https://i.ibb.co/pv1vygvL/Screenshot-2025-06-30-173916.png", // Replace with actual screenshot URL
    description:
      "A modern web app store interface to browse and manage apps. Built with clean design and React components.",
    technologies: ["React", "Tailwind", "DaisyUI"],
    live: "https://appstore-b1ea1.firebaseapp.com/", // Replace with your actual link
    github: "https://github.com/WasefUllah/b11a9-appstore",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-4 md:px-10 bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center mt-14">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border border-base-300 rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {project.name}
                </h3>
                <p className="text-sm text-justify mb-3 h-16">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-base-200 text-sm px-2 py-1 rounded-md text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Live Site
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
