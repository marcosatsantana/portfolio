import React from "react";

import { useInView, useSpring, animated } from "@react-spring/web";


const Backend = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });

  const spring1 = useSpring({
    from: { scale: 1 },
    to: { scale: inView1 ? 1 : 0 },
  });


  return (
    <animated.div className="skills__content" style={{ ...spring1 }}>
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box" >
        <div className="skills__group" ref={ref1}>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">
                PHP
              </h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">
                NodeJS
              </h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">
                Firebase
              </h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">
                MySql
              </h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">
                Oracle
              </h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">
                Python
              </h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default Backend;