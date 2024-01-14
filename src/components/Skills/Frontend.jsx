import React from "react";
import { useInView, useSpring, animated } from "@react-spring/web";

const Frontend = () => {
  const [ref2, inView2] = useInView({ triggerOnce: true });

  const spring2 = useSpring({
    from: { scale: 1 },
    to: { scale: inView2 ? 1 : 0 },
  });

  return (
    <animated.div className="skills__content" style={{ ...spring2 }}>
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box" ref={ref2}>
        <div className="skills__group">

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">
                HTML
              </h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">
                CSS
              </h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">
                JavaScript
              </h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>
        </div>
        <div className="skills__group">

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">
                Bootstrap
              </h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">
                Git
              </h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">
                React
              </h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>

        </div>
      </div>
    </animated.div>
  )
}

export default Frontend;