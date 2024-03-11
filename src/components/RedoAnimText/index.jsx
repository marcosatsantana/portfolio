import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


export default function RedoAnimText() {
  const textIndex = useMotionValue(0);
  const { t } = useTranslation();
  const texts = [
    t('home.description_01'),
    t('home.description_02'),
    t('home.description_03'),
    t('home.description_04'),
    t('home.description_05'),
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => {
    return baseText.get().slice(0, latest)
  });
  const updatedThisRound = useMotionValue(true);

  const array = Array.from({ length: 6 }, (_, index) => index);

  useEffect(() => {
    animate(count, 660, {
      type: "tween",
      duration: 4,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
        // Show the bar when the text animation is about to finish
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-22 w-full relative ring-1 dark:ring-zinc-400 ring-zinc-400 rounded-sm transition-all">
      <div className="w-full dark:bg-zinc-950 bg-stone-200 opacity-30 rounded-t-sm flex justify-between items-center px-2">
        <p className="text-xs text-black dark:text-white">
          aLittleAboutMe.jsx
        </p>
        <div className="">
          <i className="bx bx-space-bar"></i>
          <i className="bx bx-expand-horizontal"></i>
          <i className="bx bx-x"></i>
        </div>
      </div>
      <div className="gap-2 flex p-2">
        <div className="w-2 h-full text-sm line leading-6 font-thin	">

          {array.map((index) => {
            return (
              <p key={index}>{index + 1}</p>
            )
          })}
        </div>
        <motion.p style={{ whiteSpace: "pre-wrap" }} className="text-xs tracking-wider leading-6 home__description text-zinc-950 dark:text-gray-200 ">
          {displayText}
        </motion.p>
      </div>
    </div>
  );
}
