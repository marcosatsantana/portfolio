import React, { useState } from "react";
import "./services.css"

const Services = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="services section" id="services">
      <h2 className='section__title text-zinc-900 dark:text-white'>Serviços</h2>
      <span className='section__subtitle text-slate-500 dark:text-stone-400'>Veja meus serviços oferecidos</span>

      <div className="services__container container grid">
        <div className="services__content dark:bg-zinc-900">
          <div>
            <i className="uil uil-web-grid services__icon dark:text-white"></i>
            <h3 className="services__title dark:text-white">
              Designer <br /> Produtos
            </h3>
          </div>
          <span className="services__button dark:text-white" onClick={() => toggleTab(1)}>
            Veja Mais
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"} >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">Designer Produtos</h3>
              <p className="services__modal-description">Serviço oferecido com mais de 3 anos de experiencia, satisfação garantida e recomendada por todos os clientes</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Desenvolvimento de interfaces.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Desenvolvo de Lading Pages.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Desenvolvimento Android/IOS.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="services__content dark:bg-zinc-900">
          <div>
            <i className="uil uil-arrow services__icon dark:text-white"></i>
            <h3 className="services__title dark:text-white">Ui/Ux <br /> Designer</h3>
          </div>
          <span className="services__button dark:text-white" onClick={() => toggleTab(2)}>
            Veja Mais
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">Ui/Ux</h3>
              <p className="services__modal-description">Serviço oferecido com mais de 3 anos de experiencia, satisfação garantida e recomendada por todos os clientes</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Desenvolvimento de interfaces.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Desenvolvo de Lading Pages.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Desenvolvimento Android/IOS.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content dark:bg-zinc-900">
          <div>
            <i className="uil uil-edit services__icon dark:text-white"></i>
            <h3 className="services__title dark:text-white">Visual <br /> Designer</h3>
          </div>
          <span className="services__button dark:text-white" onClick={() => toggleTab(3)}>
            Veja Mais
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">Serviço oferecido com mais de 3 anos de experiencia, satisfação garantida e recomendada por todos os clientes</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Desenvolvimento de interfaces.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Desenvolvo de Lading Pages.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Desenvolvimento Android/IOS.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;