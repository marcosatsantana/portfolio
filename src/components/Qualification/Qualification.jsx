import React, { useState } from "react";
import { AnimatedText } from "../AnimatedText";
import "./qualification.css"
import { useTranslation } from "react-i18next";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)
  const { t } = useTranslation();
  const toggleTab = (index) => {
    setToggleState(index)
  }


  return (
    <section className="qualification section" id="qualification">
      <AnimatedText margin="auto">
        <h2 className='section__title text-zinc-900 dark:text-white'>{t('qualification.title')}</h2>
      </AnimatedText>
      <AnimatedText margin="auto" isInverse>
        <span className='section__subtitle text-slate-500 dark:text-stone-400'>{t('qualification.description')}</span>
      </AnimatedText>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 2 ? "qualification__button button--flex qualification__button-active text-zinc-900 border-zinc-950 dark:text-white dark:border-stone-200" : "dark:text-stone-600 qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-graduation-cap qualification__icon "></i> {t('qualification.education')}
          </div>
          <div className={toggleState === 1 ? "qualification__button button--flex qualification__button-active text-zinc-900 border-zinc-950 dark:text-white dark:border-stone-200" : "dark:text-stone-600 qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-briefcase-alt qualification__icon "></i> {t('qualification.experience')}
          </div>
        </div>
        <div className="qualification__sessions">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"} >

            <div className="qualification__data">
              <div>
                <AnimatedText>
                  <h3 className="qualification__title dark:text-stone-400">{t('qualification.jobs.1')}</h3>
                </AnimatedText>
                <AnimatedText>
                  <span className="qualification__subtitle dark:text-white">Carpal Tratores LTDA</span>
                </AnimatedText>
                <div className="qualification__calender dark:text-stone-400">
                  <AnimatedText isInverse>
                    <i className="uil uil-calendar-alt dark:text-stone-400"></i> 2023 - Atual
                  </AnimatedText>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <AnimatedText>
                  <h3 className="qualification__title dark:text-stone-400">{t('qualification.jobs.2')}</h3>
                </AnimatedText>
                <AnimatedText>
                  <span className="qualification__subtitle dark:text-white">Drogaria Santa Marta - LTDA</span>
                </AnimatedText>
                <div className="qualification__calender dark:text-stone-400">
                  <AnimatedText isInverse>
                    <i className="uil uil-calendar-alt dark:text-stone-400"></i> 2021 - 2023
                  </AnimatedText>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <AnimatedText>
                  <h3 className="qualification__title dark:text-stone-400">{t('qualification.jobs.3')}</h3>
                </AnimatedText>
                <AnimatedText>
                  <span className="qualification__subtitle dark:text-white">Thato LTDA</span>
                </AnimatedText>
                <div className="qualification__calender dark:text-stone-400">
                  <AnimatedText isInverse>
                    <i className="uil uil-calendar-alt dark:text-stone-400"></i> 2018 - 2020
                  </AnimatedText>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"} >

            <div className="qualification__data">
              <div>
                <AnimatedText>
                  <h3 className="qualification__title dark:text-stone-400">{t('qualification.educations.1')}</h3>
                </AnimatedText>
                <AnimatedText>
                  <span className="qualification__subtitle dark:text-white">UniGoias</span>
                </AnimatedText>
                <div className="qualification__calender dark:text-stone-400">
                  <AnimatedText isInverse>
                    <i className="uil uil-calendar-alt dark:text-stone-400"></i> 2022 - Atual
                  </AnimatedText>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <AnimatedText>
                  <h3 className="qualification__title dark:text-stone-400">{t('qualification.educations.2')}</h3>
                </AnimatedText>
                <AnimatedText>
                  <span className="qualification__subtitle dark:text-white">Rocketseat</span>
                </AnimatedText>
                <div className="qualification__calender dark:text-stone-400">
                  <AnimatedText isInverse>
                    <i className="uil uil-calendar-alt dark:text-stone-400"></i> 2022 - 2024
                  </AnimatedText>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <AnimatedText>
                  <h3 className="qualification__title dark:text-stone-400">{t('qualification.educations.3')}</h3>
                </AnimatedText>
                <AnimatedText>
                  <span className="qualification__subtitle dark:text-white">Sesc</span>
                </AnimatedText>
                <div className="qualification__calender dark:text-stone-400">
                  <AnimatedText isInverse>
                    <i className="uil uil-calendar-alt dark:text-stone-400"></i> 2022 - 2022
                  </AnimatedText>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification;