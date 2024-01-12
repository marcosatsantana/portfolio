import React, { useState } from "react";
import "./qualification.css"

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className="qualification section" id="portfolio">
      <h2 className='section__title'>Qualificações</h2>
      <span className='section__subtitle'>Minha jornada pessoal</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 2 ? "qualification__button qualification__content-active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Educação
          </div>
          <div className={toggleState === 1 ? "qualification__button qualification__content-active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experiencia
          </div>
        </div>
        <div className="qualification__sessions">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"} >

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ass. T.I.</h3>
                <span className="qualification__subtitle">Carpal Tratores LTDA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Atual
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
                <h3 className="qualification__title">Analista de Sistemas</h3>
                <span className="qualification__subtitle">Drogaria Santa Marta - LTDA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Suporte Tecnico</h3>
                <span className="qualification__subtitle">Thato LTDA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Eng de Software</h3>
                <span className="qualification__subtitle">Uni- cesumar</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Atual
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
                <h3 className="qualification__title">Explorer e Ignite</h3>
                <span className="qualification__subtitle">Rocketseat</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Anl. de Banco de Dados</h3>
                <span className="qualification__subtitle">Sesc</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2022
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