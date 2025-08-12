import React from "react";
import logo from "../assets/logo.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Navbar = () => {
  const navMenu = [
    { id: 1, title: "Home", path: "#home", delay: 0.2 },
    { id: 2, title: "About Me", path: "#aboutMe", delay: 0.4 },
    { id: 3, title: "Skills", path: "#skills", delay: 0.6 },
    { id: 4, title: "Education", path: "#education", delay: 0.8 },
    { id: 5, title: "Projects", path: "#projects", delay: 1 },
    // { id: 4, title: "Experience", path: "#experience", delay: 0.8 },
    { id: 6, title: "Contact", path: "#contact", delay: 1.2 },
  ];

  return (
    <div id="navbar" className="drawer z-50">
      {/* Drawer toggle */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main navbar */}
      <div className="drawer-content">
        <div className="w-11/12 mx-auto flex justify-between items-center p-2 lg:p-4 my-2 sticky top-0 bg-base-100 z-50 shadow">
          {/* Left side: logo + drawer button for small/medium */}
          <div className="flex items-center gap-2">
            <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              src={logo}
              alt="logo"
              className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full"
            />
          </div>

          {/* Center: nav links for large screens */}
          <ul className="hidden lg:flex lg:space-x-6 text-lg">
            {navMenu.map((menu) => (
              <motion.li
                key={menu.id}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: menu.delay }}
              >
                <a href={menu.path} className="hover:text-primary">
                  {menu.title}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Right: Resume button always visible */}
          <motion.a
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="/wasef_resume.pdf"
            download="Lobib-Wasef-Ullah-Resume.pdf"
            className="btn btn-sm lg:btn-lg btn-primary"
          >
            Resume
          </motion.a>
        </div>
      </div>

      {/* Drawer content for small/medium */}
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 bg-base-200 text-base-content">
          {navMenu.map((menu) => (
            <li key={menu.id}>
              <a href={menu.path}>{menu.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
