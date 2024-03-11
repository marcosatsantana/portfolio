import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"


export const AnimatedText = ({ children, showBar = true, margin, isInverse = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  const variantsLeft = {
    hidden: { left: 0 },
    visible: { left: "100%" }
  }
  const variantsRight = {
    hidden: { right: 0 },
    visible: { right: "100%" }
  }
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView])


  return (
    <div ref={ref} style={{ position: "relative", width: "fit-content", overflow: "hidden", margin }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25
        }}
      >
        {children}
      </motion.div>
      {showBar && <motion.div
        variants={isInverse ? variantsRight : variantsLeft}
        style={{
          background: 'rgb(168 162 158 / var(--tw-bg-opacity))',
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 0.5,
          ease: "easeIn"
        }}
      >

      </motion.div>}
    </div>
  )
}