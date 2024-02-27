import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const AnimatedTypewriter = ({ children, showBar = true, margin, isInverse = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width: "fit-content", overflow: "hidden", margin }}>
      <motion.div
        style={{ display: "inline-block" }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.75, delay: 0.25, ease: "easeInOut" },
          transitionEnd: { display: "inline-block" }
        }}
        transition={{ type: "tween", duration: 0.75 }}
      >
        {children}
      </motion.div>
      {showBar && (
        <motion.div
          variants={isInverse ? { hidden: { right: "100%" }, visible: { right: 0 } } : { hidden: { left: "100%" }, visible: { left: 0 } }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            background: "#FFF",
            zIndex: 20
          }}
          initial="hidden"
          animate={slideControls}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  );
};
