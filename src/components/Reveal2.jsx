import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "../app/globals.css";

export const Reveal2 = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { triggerOnce: false });

  // Initialize the animation controls
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      // Start the animation when the section is in view
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInview, mainControls, slideControls]);

  // Reset the animation controls when the section is out of view
  useEffect(() => {
    if (!isInview) {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isInview, mainControls, slideControls]);

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
    </div>
  );
};
