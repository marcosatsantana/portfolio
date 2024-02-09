import React from "react";

import { useInView, useSpring, animated } from "@react-spring/web";


const Backend = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });

  const spring1 = useSpring({
    from: { scale: 1 },
    to: { scale: inView1 ? 1 : 0 },
  });


  return (
    <animated.div className="skills__content dark:bg-zinc-900 bg-white" style={{ ...spring1 }}>
      <h3 className="skills__title text-slate-900 dark:text-stone-100">Backend Developer</h3>
      <div className="skills__box" >
        <div className="skills__group" ref={ref1}>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name text-slate-900 dark:text-stone-200">
                PHP
              </h3>
              <span className="skills__level text-slate-500 dark:text-stone-400">Medium</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name text-slate-900 dark:text-stone-200">
                NodeJS
              </h3>
              <span className="skills__level text-slate-500 dark:text-stone-400">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name text-slate-900 dark:text-stone-200">
                Firebase
              </h3>
              <span className="skills__level text-slate-500 dark:text-stone-400">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name text-slate-900 dark:text-stone-200">
                MySql
              </h3>
              <span className="skills__level text-slate-500 dark:text-stone-400">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name text-slate-900 dark:text-stone-200">
                Oracle
              </h3>
              <span className="skills__level text-slate-500 dark:text-stone-400">Medium</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name text-slate-900 dark:text-stone-200">
                Python
              </h3>
              <span className="skills__level text-slate-500 dark:text-stone-400">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default Backend;