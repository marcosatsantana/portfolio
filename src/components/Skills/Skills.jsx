import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";
import "./skills.css"
import { AnimatedText } from "../AnimatedText";
import { useAnimation, motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const { t } = useTranslation();
  const isInView = useInView(ref, { once: true });
  const array = [
    {
      "id": 1,
      "title": t('skills.frontend'),
      "data": [
        {
          "title": t('skills.skills.1.title'),
          "level": t('skills.skills.1.level')
        },
        {
          "title": t('skills.skills.2.title'),
          "level": t('skills.skills.2.level')
        },
        {
          "title": t('skills.skills.3.title'),
          "level": t('skills.skills.3.level')
        }, 
        {
          "title": t('skills.skills.4.title'),
          "level": t('skills.skills.4.level')
        },
        {
          "title": t('skills.skills.5.title'),
          "level": t('skills.skills.5.level')
        },
        {
          "title": t('skills.skills.6.title'),
          "level": t('skills.skills.6.level')
        },
      ]
    },
    {
      "id": 2,
      "title": t('skills.backend'),
      "data": [
        {
          "title": t('skills.skills.7.title'),
          "level": t('skills.skills.7.level')
        },
        {
          "title": t('skills.skills.8.title'),
          "level": t('skills.skills.8.level')
        },
        {
          "title": t('skills.skills.9.title'),
          "level": t('skills.skills.9.level')
        }, 
        {
          "title": t('skills.skills.10.title'),
          "level": t('skills.skills.10.level')
        },
        {
          "title": t('skills.skills.11.title'),
          "level": t('skills.skills.11.level')
        },
        {
          "title": t('skills.skills.12.title'),
          "level": t('skills.skills.12.level')
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
        <h2 className='section__title text-slate-900 dark:text-white'>{t('skills.title')}</h2>
      </AnimatedText>
      <AnimatedText margin="auto" isInverse>
        <span className='section__subtitle text-slate-500 dark:text-stone-400'>{t('skills.description')}</span>
      </AnimatedText>

      <motion.ul
        className="skills__container container grid"
        initial="hidden"
        ref={ref}
        variants={container}
        animate={controls}
      >
        {array.map((item, index) => (
          <motion.li variants={itemVariant} key={item.id} className="item" >
            <Item data={item} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default Skills;