import { motion } from "framer-motion";


export const itemVariants = (delay, xH=-30) => ({
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      ease: "easeInOut",
      duration: 0.7,
    },
  },
  hidden: {
    opacity: 0,
    x: xH,
  },
});

const TextAnimation = ({ delay, children }) => (
  <motion.div initial="hidden" animate="visible" variants={itemVariants(delay)}>
    {children}
  </motion.div>
);

export default TextAnimation;