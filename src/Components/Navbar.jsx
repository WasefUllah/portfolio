import React from "react";
import logo from "../assets/logo.png";
// eslint-disable-next-line no-unused-vars
import { animate, delay, motion } from "framer-motion";

const Navbar = () => {
  const navMenu = [
    {
      id: 1,
      title: "Projects",
      path: "/projects",
      delay: 0.2,
    },
    {
      id: 2,
      title: "Education",
      path: "/education",
      delay: 0.4,
    },
    {
      id: 3,
      title: "Experience",
      path: "/experience",
      delay: 0.6,
    },
  ];

  return (
    <div className="w-11/12 mx-auto flex justify-between items-center p-1 md:p-2 lg:p-4 my-2 sticky top-0 bg-base-100 z-10 ">
      <div>
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          src={logo}
          alt="logo"
          className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full"
        />
      </div>
      <ul className="md:flex-1 flex justify-end space-x-0.5 md:space-x-2.5 lg:space-x-4 mr-2 md:mr-6 lg:mr-10 text-xs md:text-md lg:text-lg">
        {navMenu.map((menu) => (
          <motion.li
            key={menu.id}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: `${menu.delay}` }}
            className="nav-menu"
            data-delay={menu.delay}
          >
            <a
              href={menu.path}
              className="p-1 md:p-2 lg:p-4 text-center inline-block"
            >
              {menu.title}
            </a>
          </motion.li>
        ))}
      </ul>
      <div>
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="btn btn-xs md:btn-md lg:btn-lg btn-primary"
        >
          Resume
        </motion.button>
      </div>
    </div>

    // <div className="navbar bg-base-100 shadow-sm">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           {" "}
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />{" "}
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    //       >
    //         {navMenu.map((menu) => (
    //           <motion.li
    //             key={menu.id}
    //             initial={{ y: -50, opacity: 0 }}
    //             animate={{ y: 0, opacity: 1 }}
    //             transition={{ duration: 0.8, delay: `${menu.delay}` }}
    //             className="nav-menu"
    //             data-delay={menu.delay}
    //           >
    //             <a href={menu.path} className="p-1 md:p-2 lg:p-4 text-center ">
    //               {menu.title}
    //             </a>
    //           </motion.li>
    //         ))}
    //       </ul>
    //     </div>
    //     <motion.img
    //       initial={{ opacity: 0, x: -50 }}
    //       animate={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.8, delay: 0.4 }}
    //       src={logo}
    //       alt="logo"
    //       className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full"
    //     />
    //   </div>
    //   <div className="navbar-center hidden md:flex md:justify-end">
    //     <ul className=" px-1  md:flex justify-end">
    //       {navMenu.map((menu) => (
    //         <motion.li
    //           key={menu.id}
    //           initial={{ y: -50, opacity: 0 }}
    //           animate={{ y: 0, opacity: 1 }}
    //           transition={{ duration: 0.8, delay: `${menu.delay}` }}
    //           className="nav-menu"
    //           data-delay={menu.delay}
    //         >
    //           <a
    //             href={menu.path}
    //             className="p-1 md:p-2 lg:p-4 text-center inline-block"
    //           >
    //             {menu.title}
    //           </a>
    //         </motion.li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <a className="btn">Button</a>
    //   </div>
    // </div>
  );
};

export default Navbar;
