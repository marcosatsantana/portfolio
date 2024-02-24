import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";
import "./skills.css"
import { AnimatedText } from "../AnimatedText";
import { useAnimation, motion, useInView } from "framer-motion";

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const array = [
    {
      "id": 1,
      "title": "Frontend Developer",
      "data": [
        {
          "title": "HTML",
          "level": "Advanced"
        },
        {
          "title": "CSS",
          "level": "Advanced"
        },
        {
          "title": "JavaScript",
          "level": "Medium"
        },
        {
          "title": "Bootstrap",
          "level": "Medium"
        },
        {
          "title": "Git",
          "level": "Basic"
        },
        {
          "title": "React",
          "level": "Medium"
        },
      ]
    },
    {
      "id": 2,
      "title": "Backend Developer",
      "data": [
        {
          "title": "PHP",
          "level": "Medium"
        },
        {
          "title": "NodeJS",
          "level": "Advanced"
        },
        {
          "title": "Firebase",
          "level": "Basic"
        },
        {
          "title": "MySql",
          "level": "Advanced"
        },
        {
          "title": "Oracle",
          "level": "Medium"
        },
        {
          "title": "Python",
          "level": "Basic"
        },
      ]
    },
  ]


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView])

  return (
    <section className="skills section" id="skills" >
      <AnimatedText margin="auto">
        <h2 className='section__title text-slate-900 dark:text-white'>Habilidades</h2>
      </AnimatedText>
      <AnimatedText margin="auto" isInverse>
        <span className='section__subtitle text-slate-500 dark:text-stone-400'>Minhas habilidades técnicas</span>
      </AnimatedText>

      <motion.ul
        className="skills__container container grid"
        initial="hidden"
        ref={ref}
        variants={container}
        animate={controls}
      >
        {array.map((item, index) => (
          <motion.li variants={itemVariant} key={item.id} className="item mt-8" >
            <Item data={item} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default Skills;