import React, { useEffect, useRef, useState } from "react";
import "./services.css"
import { useAnimation, motion, useInView } from "framer-motion";
import { AnimatedText } from "../AnimatedText";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [toggleState, setToggleState] = useState(0)
  const controls = useAnimation();
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const toggleTab = (index) => {
    setToggleState(index)
  }

  const servicesData = [
    {
      title: t('services.service1.title'),
      icon: "uil uil-web-grid",
      description:
        t('services.service1.description'),
      services: [
        t('services.service1.1'),
        t('services.service1.2'),
        t('services.service1.3'),
      ],
    },
    {
      title: t('services.service2.title'),
      icon: "uil uil-arrow",
      description:
        t('services.service2.description'),
      services: [
        t('services.service2.1'),
        t('services.service2.2'),
        t('services.service2.3'),
      ],
    },
    {
      title: t('services.service3.title'),
      icon: "uil uil-edit",
      description:
        t('services.service3.description'),
      services: [
        t('services.service3.1'),
        t('services.service3.2'),
        t('services.service3.3'),
        t('services.service3.4'),
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
        <h2 className="section__title text-zinc-900 dark:text-white">{t('services.title')}</h2>
      </AnimatedText>
      <AnimatedText margin="auto" isInverse>
        <span className="section__subtitle mb-4 text-slate-500 dark:text-stone-400">
          {t('services.description')}
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
          <motion.li whileHover={{ translateY: -20 }}
          whileTap={{ translateY: 0.8, borderRadius: "100%" }} variants={itemVariant} key={index} className=" services__content dark:bg-zinc-900 hover:ring-white hover:ring-1 hover:transition" >
            <div>
              <i className={`uil ${service.icon} services__icon dark:text-white`}></i>
              <h3 className="services__title dark:text-white">{service.title}</h3>
            </div>
            <span
              className="services__button dark:text-white"
              onClick={() => toggleTab(index + 1)}
            >
              {t('services.btn')}
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