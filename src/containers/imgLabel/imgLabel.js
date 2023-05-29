import React from "react";
import { ImgLabelContainer } from "./style";
import { motion } from "framer-motion";

const variant = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 0.7,
      ease: "easeInOut",
      duration: 0.7,
    },
  },
};

export default function ImgLabel({ bgImg, children, height, className }) {
  return (
    <ImgLabelContainer bgImg={bgImg} height={height} className={className}>
      <div className="text-box">
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { delay: 1 },
          }}
          variants={variant}
          className="content"
        >
          {children}
        </motion.div>
      </div>
    </ImgLabelContainer>
  );
}
