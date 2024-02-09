import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./skills.css"

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className='section__title text-slate-900 dark:text-white'>Habilidades</h2>
      <span className='section__subtitle text-slate-500 dark:text-stone-400'>Minhas habilidades técnicas</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills;