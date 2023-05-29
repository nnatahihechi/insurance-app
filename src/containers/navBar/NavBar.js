// import './NavBar.css'
import React from "react";
import { ImSpinner4 } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiKey } from "react-icons/fi";
import { NavBarContainer } from "./style";
import Button from "../../component/button/button";
import { motion } from "framer-motion";

const navBarVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.7,
      duration: 0.7,
    },
  },
  hidden: { opacity: 0 },
};

export const itemVariants = (delay, xH=200) =>( {
  visible: {
    opacity: 1,
    x: 0,
    transition:{
      delay,
      ease: "easeInOut",
      duration: 0.7
    }
  },
  hidden: {
    opacity: 0,
    x: xH,

  },
  rotation: {
    rotate: [0, 180, 360],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
});

function NavBar() {
  return (
    <NavBarContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        className="navbar-motion-wrapper"
        variants={navBarVariants}
      >
        <motion.div
          initial="hidden"
          animate={["visible", "rotation"]}
          variants={itemVariants(0.1)}
          className="d-flex"
        >
          <ImSpinner4 fill="#E37486" size="30px" />
        </motion.div>

        {/* <motion.span></motion.span> */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants(0.3)}
          className="nav-body"
        >
          <span className="nav-links">Home</span>
          <span className="nav-links">
            Services
            <RiArrowDropDownLine />
          </span>
          <span className="nav-links">About us</span>
          <span className="nav-links">Blog</span>
          <span className="nav-links">Career</span>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants(0.5)}
          className="nav-right"
        >
          <Button> Contact Us </Button>
          <div className="login">
            <FiKey />
            <span className="text">Login</span>
          </div>
        </motion.div>
      </motion.div>
    </NavBarContainer>
  );
}

export default NavBar;
