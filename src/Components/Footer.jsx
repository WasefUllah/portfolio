import React from "react";
import logo from "../assets/logo.png";
import { LuGithub } from "react-icons/lu";
import { CiFacebook, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
      <aside>
        <a href="#navbar">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full"
          />
        </a>

        <p className="font-bold">
          Lobib Wasef Ullah
          <br />
          React web developer
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/WasefUllah" target="blank">
            <LuGithub size={25} className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/lobib-wasef-ullah-664993339/"
            target="blank"
          >
            <CiLinkedin size={25} className="text-white" />
          </a>
          <a href="https://www.facebook.com/lwasef.ullah" target="blank">
            <CiFacebook size={25} className="text-white" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
