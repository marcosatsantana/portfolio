import { useEffect, useRef } from "react";
import { Text } from "./Text";
import "./portfolio.css";
import { useAnimation, motion, useInView } from "framer-motion";
import { AnimatedText } from "../AnimatedText";
import FerramentaVideo from '../../assets/ferramentaria.mp4';
import ChamadosVideo from '../../assets/Chamados.mp4';

const Portfolio = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const videoRefs = useRef([]);

  const handleFullScreen = (index) => {
    const video = videoRefs.current[index];
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Safari
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen(); // IE11
    }
  };

  const projects = [
    {
      portfolio: {
        id: 1,
        title: "Ferramentaria Carpal",
        description: `Sistema desenvolvido para gerenciar empréstimos de ferramentas na oficina da empresa, sendo possível cadastrar ferramentas, técnicos e empréstimos.`,
        skills: ['ReactJS', 'NodeJS', 'TailwindCSS', 'Datefns', 'ShadcnUI']
      },
      videoUrl: FerramentaVideo,
    },
    {
      portfolio: {
        id: 2,
        title: "Dashboard Chamados",
        description: `Desenvolvi um dashboard de desempenho para que seja monitorada a porcentagem de chamados por atendente e o tempo de atendimento.`,
        skills: ['ReactJS', 'NodeJS', 'TailwindCSS', 'Datefns', 'ShadcnUI']
      },
      videoUrl: ChamadosVideo,
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="portfolio section" id="portfolio" ref={ref}>
      <AnimatedText margin="auto">
        <h2 className='section__title text-slate-900 dark:text-white'>Portfólio</h2>
      </AnimatedText>
      <AnimatedText margin="auto" isInverse>
        <span className='section__subtitle text-slate-500 dark:text-stone-400'>Alguns de meus projetos</span>
      </AnimatedText>

      <div className="portfolio__container container">
        <motion.div className="portfolio__content" initial="hidden" animate={controls}>
          {projects.map((item, index) => {
            return (
              <motion.div
                key={index}
                className={`portfolio__item bg-zinc-900 border rounded-md my-2 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 mb-12`}
              >
                <div className="portfolio__media w-1/2">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    onClick={() => handleFullScreen(index)}
                    className="cursor-pointer rounded-lg w-full h-auto max-h-[300px] object-cover"
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                <div className="portfolio__info w-1/2 p-5">
                  <Text
                    as="h5"
                    className="mb-2 text-2xl font-bold item__title text-slate-900 dark:text-white"
                  >
                    {item.portfolio.title}
                  </Text>
                  <Text
                    as="p"
                    className="text-lg item__body text-slate-500 dark:text-stone-400"
                  >
                    {item.portfolio.description}
                  </Text>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.portfolio.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="bg-zinc-950 p-3 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            )
          }
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;