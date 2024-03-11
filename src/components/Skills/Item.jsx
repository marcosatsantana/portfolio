import React from "react";
import { useInView, useSpring, animated } from "@react-spring/web";

const Item = (array) => {
  const [ref2, inView2] = useInView({ triggerOnce: true });

  return (
    <div className="skills__content dark:bg-zinc-900 bg-white rounded-sm" >
      <h3 className="skills__title text-slate-900 dark:text-stone-100">{array.data.title}</h3>
      <div className="skills__box" ref={ref2}>
        <div className="skills__group grid grid-cols-2">
          {array.data.data.map((item, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name text-slate-900 dark:text-stone-200">
                  {item.title}
                </h3>
                <span className="skills__level text-slate-500 dark:text-stone-400">{item.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Item;