import React from "react";
import { motion } from "framer-motion";
const MotionHoc = (Component) => {
  return function HOC() {
    return (
      <div>
        <motion.div
          initial={{ y: 500 }}
          animate={{
            y: 0,
            transition: { duration: 0.3, type: "spring" },
          }}
          exit={{
            y: -500,
            transition: { duration: 0.3, type: "spring", ease: "easeInOut" },
          }}
        >
          <Component />
        </motion.div>
      </div>
    );
  };
};

export default MotionHoc;
