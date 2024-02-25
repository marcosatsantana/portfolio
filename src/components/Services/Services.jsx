import React, { useEffect, useRef, useState } from "react";
import "./services.css"
import { useAnimation, motion, useInView } from "framer-motion";
import { AnimatedText } from "../AnimatedText";

const Services = () => {
  const [toggleState, setToggleState] = useState(0)
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const toggleTab = (index) => {
    setToggleState(index)
  }

  const servicesData = [
    {
      title: "Designer Produtos",
      icon: "uil uil-web-grid",
      description:
        "Crio produtos digitais intuitivos e centrados no usuário, com foco em pesquisa, design de interação e design visual. Tenho mais de 3 anos de experiência e meus projetos resultaram em um aumento de 20% na conversão de usuários.",
      services: [
        "Desenvolvimento de interfaces.",
        "Desenvolvimento de Landing Pages.",
        "Desenvolvimento de Apps.",
      ],
    },
    {
      title: "Ui/Ux Designer",
      icon: "uil uil-arrow",
      description:
        "Crio interfaces atraentes e fáceis de usar, aplicando design de interfaces, prototipagem e testes de usabilidade. Meus projetos resultaram em um aumento de 30% no engajamento dos usuários.",
      services: [
        "Design de Interfaces.",
        "Prototipagem.",
        "Testes de Usabilidade.",
      ],
    },
    {
      title: "Visual Designer",
      icon: "uil uil-edit",
      description:
        "Crio elementos visuais que comunicam e engajam, com expertise em identidade visual, design de marca, ilustração e tipografia. Meus projetos contribuíram para um aumento de 40% na retenção de usuários.",
      services: [
        "Identidade Visual.",
        "Design de Marca.",
        "Ilustração.",
        "Tipografia.",
      ],
    },
  ];
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
    <section className="services section" id="services">
      <AnimatedText margin="auto">
        <h2 className="section__title text-zinc-900 dark:text-white">Serviços</h2>
      </AnimatedText>
      <AnimatedText margin="auto" isInverse>
        <span className="section__subtitle text-slate-500 dark:text-stone-400">
          Veja meus serviços oferecidos
        </span>
      </AnimatedText>


      <motion.ul
        className="services__container container grid"
        initial="hidden"
        ref={ref}
        variants={container}
        animate={controls}
      >
        {servicesData.map((service, index) => (
          <motion.li variants={itemVariant} key={index} className=" services__content dark:bg-zinc-900" >
            <div>
              <i className={`uil ${service.icon} services__icon dark:text-white`}></i>
              <h3 className="services__title dark:text-white">{service.title}</h3>
            </div>
            <span
              className="services__button dark:text-white"
              onClick={() => toggleTab(index + 1)}
            >
              Veja Mais
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === index + 1 ? "services__modal active-modal" : "services__modal"
              }
            >
              <div className="services__modal-background" onClick={() => toggleTab(0)}></div>
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title">{service.title}</h3>
                <p className="services__modal-description">{service.description}</p>
                <ul className="services__modal-services grid">
                  {service.services.map((serviceItem, serviceIndex) => (
                    <li className="services__modal-service" key={serviceIndex}>
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{serviceItem}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default Services;