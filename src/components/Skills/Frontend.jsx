import React from "react";
import { useInView, useSpring, animated } from "@react-spring/web";

const Frontend = () => {
  const [ref2, inView2] = useInView({ triggerOnce: true });

  const spring2 = useSpring({
    from: { scale: 1 },
    to: { scale: inView2 ? 1 : 0 },
  });

  return (
    <animated.div className="skills__content dark:bg-zinc-900 bg-white" style={{ ...spring2 }}>
      <h3 className="skills__title text-slate-900 dark:text-stone-100">Frontend Developer</h3>
      <div className="skills__box" ref={ref2}>
        <div className="skills__group">

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name text-slate-900 dark:text-stone-200">
                HTML
              </h3>
              <span className="skills__level text-slate-500 dark:text-stone-400">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name text-slate-900 dark:text-stone-200">
                CSS
              </h3>
              <span className="skills__level text-slate-500 dark:text-stone-400">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name text-slate-900 dark:text-stone-200">
                JavaScript
              </h3>
              <span className="skills__level text-slate-500 dark:text-stone-400">Medium</span>
            </div>
          </div>
        </div>
        <div className="skills__group">

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name text-slate-900 dark:text-stone-200">
                Bootstrap
              </h3>
              <span className="skills__level text-slate-500 dark:text-stone-400">Medium</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name text-slate-900 dark:text-stone-200">
                Git
              </h3>
              <span className="skills__level text-slate-500 dark:text-stone-400">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name text-slate-900 dark:text-stone-200">
                React
              </h3>
              <span className="skills__level text-slate-500 dark:text-stone-400">Medium</span>
            </div>
          </div>

        </div>
      </div>
    </animated.div>
  )
}

export default Frontend;