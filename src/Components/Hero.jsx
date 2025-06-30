import React from "react";
import herobg2 from "../assets/bgremovewasef.png";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
// eslint-disable-next-line no-unused-vars
import { animate, delay, motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="w-11/12 mx-auto  flex flex-col md:flex-row justify-center gap-10 items-center my-4  py-4">
      <div className=" flex items-center h-52">
        <div className="flex-1/2 ">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary"
          >
            Lobib Wasef Ullah
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-3xl lg:text-4xl my-2"
          >
            React Web developer
          </motion.p>
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-start gap-2"
          >
            <a href="https://github.com/WasefUllah">
              <LuGithub size={25} className="text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/lobib-wasef-ullah-664993339/">
              <CiLinkedin size={25} className="text-primary" />
            </a>
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="rounded-full border-primary  border-4 h-96 w-96 relative "
      >
        <img
          src={herobg2}
          alt=""
          className="absolute bottom-0 h-[500px] rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
