import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "../app/globals.css";
export const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInview]);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--customBlack)",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};
