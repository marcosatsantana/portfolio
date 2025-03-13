import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { Text } from "./Text";
import { Image } from "./Image";
import "./portfolio.css";
import Modal from 'react-modal';
import { useAnimation, motion, useInView } from "framer-motion";
import { AnimatedText } from "../AnimatedText";
import Carousel from "./Carousel";
import { AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import Ferramenta01 from '../../assets/ferramentaria/01.png';
import Ferramenta02 from '../../assets/ferramentaria/02.png';
import Ferramenta03 from '../../assets/ferramentaria/03.png';
import Ferramenta04 from '../../assets/ferramentaria/04.png';
import Chamados01 from '../../assets/chamados/dashboard1.png';
import Chamados02 from '../../assets/chamados/dashboard2.png';
import Chamados03 from '../../assets/chamados/dashboard3.png';

const customStyles = {
  content: {
    zIndex: 9,
    overflow: 'hidden',
    transition: 'background-color 0.3s ease-in-out',
  },
  overlay: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
};

const Portfolio = () => {
  const [show, setShow] = useState('false');
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const projects = [
    {
      portfolio: {
        id: 1,
        title: "Ferramentaria Carpal",
        description: `Desenvolvi um projeto utilizando ReactJS no front-end e Node.js no back-end, com ferramentas como TailwindCSS para estilização, React Query para gerenciamento de dados assíncronos, Puppeteer para automação de tarefas, Date-fns para manipulação de datas e Shadcn UI para criação de interfaces modernas. O projeto oferece uma interface responsiva, alta performance e integração eficiente entre front-end e back-end, refletindo boas práticas de desenvolvimento e design.`,
        time_start: new Date(2023, 0, 1),
        time_end: new Date(2023, 11, 31),
      },
      imagesArray: [{ url: Ferramenta01 }, { url: Ferramenta02 }, { url: Ferramenta03 }, { url: Ferramenta04 }],
      listArray: [{ content: "Chamados Carpal" }],
    },
    {
      portfolio: {
        id: 1,
        title: "Dashboard Chamados",
        description: `Desenvolvi um dashboard de desempenho para que seja monitorada a porcentagem de chamados por atendente e o tempo de atendimento.`,
        time_start: new Date(2024, 12, 1),
        time_end: new Date(2024, 12, 20),
      },
      imagesArray: [{ url: Chamados01 }, { url: Chamados02 }, { url: Chamados03 }],
      listArray: [{ content: "Dashboard Chamados" }],
    }
  ];

  function openModal(project) {
    setSelectedProject(project);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="portfolio section" id="portfolio" ref={ref}>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Portfolio"
        className="mx-auto p-100 ring-1 ring-zinc-400 rounded-sm mt-[5%]"
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 dark:bg-zinc-950 dark:ring-stone-200 bg-white dark:text-stone-200 text-zinc-950 rounded-sm"
            transition={{
              duration: ".5",
              ease: "easeIn",
            }}
          >
            <div className="portfolio__wrapper">
              <div className="pb-8 mx-auto">
                <Carousel imagesArray={selectedProject.imagesArray} />
              </div>

              <div>
                {selectedProject.portfolio && (
                  <>
                    <div className="max-sm:flex-col flex items-start justify-between my-2">
                      <AnimatedText>
                        <p className="text-md font-bold item__title line-clamp-1 dark:text-white text-zinc-950">
                          {selectedProject.portfolio.title}
                        </p>
                      </AnimatedText>
                      <p className="text-xs text-stone-400">
                        <i className="bx bx-calendar"></i> {format(selectedProject.portfolio.time_start, 'dd/MM/yyyy')} a {format(selectedProject.portfolio.time_end, 'dd/MM/yyyy')}
                      </p>
                    </div>
                    <Text as="p" className={`mb-3 text-sm item__body dark:text-stone-300 text-zinc-800 line-clamp-${show === 'desc' ? 9 : 1}`} >
                      <a onClick={() => setShow(show === 'desc' ? '' : 'desc')}>
                        {selectedProject.portfolio.description}
                      </a>
                    </Text>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Modal >

      <AnimatedText margin="auto">
        <h2 className='section__title text-slate-900 dark:text-white'>Portfólio</h2>
      </AnimatedText>
      <AnimatedText margin="auto" isInverse>
        <span className='section__subtitle text-slate-500 dark:text-stone-400'>Alguns de meus projetos</span>
      </AnimatedText>

      <div className="portfolio__container container">
        <motion.ul
          className="portfolio__content"
          initial="hidden"
          animate={controls}
        >
          {projects.map((item, index) => (
            <motion.li
              key={index}
              className="w-full cursor-pointer transition-all duration-200 rounded-lg shadow dark:bg-zinc-900 bg-white border border-gray-200"
              onClick={() => openModal(item)}
            >
              <Image
                className="rounded-t-lg w-full h-[100px] overflow-hidden"
                image={item.imagesArray[0].url}
                alt={item.portfolio.title}
                objectCover="object-cover"
              />
              <div className="p-5">
                <Text
                  as="h5"
                  className="mb-2 text-md font-bold item__title line-clamp-1 text-slate-900 dark:text-white"
                >
                  {item.portfolio.title}
                </Text>
                <Text
                  as="p"
                  className="mb-3 text-sm line-clamp-2 item__body text-slate-500 dark:text-stone-400"
                >
                  {item.portfolio.description}
                </Text>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Portfolio;