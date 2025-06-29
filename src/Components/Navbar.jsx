import React from "react";
import logo from "../assets/logo.png";
// eslint-disable-next-line no-unused-vars
import { animate, delay, motion } from "framer-motion";

const Navbar = () => {
  const navMenu = [
    {
      id: 1,
      title: "Home",
      path: "/",
      delay: 0.1,
    },
    {
      id: 2,
      title: "Projects",
      path: "/projects",
      delay: 0.2,
    },
    {
      id: 3,
      title: "Education",
      path: "/education",
      delay: 0.3,
    },
    {
      id: 4,
      title: "Experience",
      path: "/experience",
      delay: 0.4,
    },
    {
      id: 5,
      title: "About me",
      path: "/aboutMe",
      delay: 0.5,
    },
    {
      id: 6,
      title: "Contact",
      path: "/contact",
      delay: 0.6,
    },
  ];


  return (
    <div className="w-11/12 mx-auto flex justify-between items-center p-4 my-2 sticky top-2">
      <div>
        <motion.img
          initial={{ opacity: 0, x:-50 }}
          animate={{ opacity: 1, x:0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          src={logo}
          alt="logo"
          className="w-20 h-20 rounded-full"
        />
      </div>
      <ul className="flex-1 flex  justify-end space-x-4 mr-10 text-lg">
        {navMenu.map((menu) => (
          <motion.li
          
          key={menu.id}
          initial={{y: -50, opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration: 0.8, delay: `${menu.delay}`}}
          className="nav-menu" data-delay={menu.delay}>
            <a href={menu.path} className="p-2 text-lg inline-block">{menu.title}</a>
          </motion.li>
        ))}
      </ul>
      <div>
        <motion.button
        initial={{ opacity: 0, x:50 }}
          animate={{ opacity: 1, x:0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        className="btn btn-lg">Resume</motion.button>
      </div>
    </div>
  );
};

export default Navbar;
