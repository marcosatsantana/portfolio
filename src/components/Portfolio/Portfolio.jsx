import { useEffect, useRef, useState } from "react"
import Button from "./Button";
import { Text } from "./Text";
import { Image } from "./Image";
import "./portfolio.css"
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";
import Modal from 'react-modal';
import { useAnimation, motion, useInView } from "framer-motion";
import { AnimatedText } from "../AnimatedText";
import { useTranslation } from "react-i18next";
import Carousel from "./Carousel";


const customStyles = {
  content: {
    zIndex: 9,
    transition: 'background-color 0.3s ease-in-out', // Add transition for smooth color change
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
  const { t } = useTranslation();
  const [show, setShow] = useState('false')
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const queryClient = useQueryClient()
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  function openModal(project) {
    setSelectedProject(project);
    queryClient.invalidateQueries()
    setIsOpen(true);
  }
  function handleShow(item) {
    if (show === item) {
      return setShow('')
    }
    setShow(item)
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { data } = useQuery({
    queryKey: ['portfolio'],
    queryFn: () => api.get('/portfolio'),
  })

  const { data: dataList } = useQuery({
    queryKey: ['portfolio_list', selectedProject],
    queryFn: () => selectedProject.portfolio.id && api.get(`/portfolio/${selectedProject.portfolio.id ?? 1}`),
  })

  const [activeFilter, setActiveFilter] = useState('all')

  const buttonCaptions = ['all', 'UI/UX', 'Frontend', 'Backend'];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
  }

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
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1
    },
    transition: { type: "spring", stiffness: 900, damping: 40 }
  };
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView])

  return (
    <section className="portfolio section" id="portfolio" ref={ref}>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Portfolio"
        className="w-fit max-w-full dark:bg-zinc-950 mx-8 dark:ring-stone-200 ring-1 ring-zinc-950 bg-white dark:text-stone-200 text-zinc-950 mb-8 rounded-sm p-8"
      >
        <div className="btn__close-modal">
          <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
        </div>
        <div className="portfolio__wrapper w-full">
          <div className="pb-8 mx-auto">
            <Carousel imagesArray={selectedProject.imagesArray} />
          </div>

          <div>
            {selectedProject.portfolio &&
              <>
                <Text as="h5" className="mb-2 text-md font-bold item__title line-clamp-1 dark:text-white text-zinc-950">
                  {selectedProject.portfolio.title}
                </Text>
                <Text as="p" className={`mb-3 text-sm item__body dark:text-stone-300 text-zinc-800 line-clamp-${show === 'desc' ? 9 : 1}`} >
                  <a onClick={() => handleShow('desc')}>

                    {selectedProject.portfolio.description}
                  </a>
                </Text>
                <div className="w-full flex justify-end items-center">
                  <button href="" onClick={() => handleShow('desc')} className="text-xs text-stone-700 pb-2 rounded-sm font-thin">
                    {show === 'desc' ?
                      <p>
                        <i class='text-sm bx bx-chevrons-up'></i>
                        Menos
                      </p>
                      :
                      <p>
                        <i className='text-sm bx bx-chevrons-down'></i>
                        Mais
                      </p>
                    }
                  </button>
                </div>
              </>
            }
            <button className="flex w-full justify-between items-center bg-zinc-950 ring-1 ring-zinc-600 my-2 rounded-md px-2 cursor-pointer hover:bg-zinc-900 hover:transition " onClick={() => handleShow('tec')}>
              <p className="text-xs p-2 font-bold flex gap-1 items-center">
                Tecnologias <p className="text-stone-400 font-thin">({dataList?.data?.length})</p>
              </p>
              {show === 'tec' ?
                <i class='bx bx-chevrons-up'></i>
                :
                <i class='bx bx-chevrons-down'></i>
              }
            </button>
            {show === 'tec' &&
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, padding: 8 }}>

                {dataList?.data.map((item) => {
                  return (
                    <span key={item} className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{item.content}</span>
                  )
                })}
              </div>
            }
            <button className="flex w-full justify-between items-center bg-zinc-950 ring-1 ring-zinc-600 my-2 rounded-md px-2 cursor-pointer hover:bg-zinc-900 hover:transition transition" onClick={() => handleShow('cha')}>
              <p className="text-xs p-2 font-bold flex gap-1 items-center">
                Desafios
                <p className="text-stone-400 font-thin">
                  ({selectedProject?.listArray?.length})
                </p>
              </p>
              {show === 'cha' ?
                <i class='bx bx-chevrons-up'></i>
                :
                <i class='bx bx-chevrons-down'></i>
              }
            </button>
            {show === 'cha' &&
              <ul style={{ padding: 8 }}>
                {
                  selectedProject.listArray && selectedProject.listArray.map((project) => <li className="text-xs font-thin text-stone-400">{project.content}</li>)
                }

              </ul>
            }
            <div className="flex gap-4 w-full justify-end mt-4">
              <button onClick={() => setIsOpen(false)} className='text-zinc-400 text-sm'>
                Fechar
              </button>
              <button className='bg-zinc-950 hover:bg-white hover:font-bold hover:ring-zinc-800 hover:text-zinc-950 font-thin text-sm px-4 py-2 rounded-md ring-1 ring-zinc-600 hover:px-8 flex items-center gap-2 justify-center'>
                Ver projeto <i class='bx bx-link-alt'></i>
              </button>
            </div>
          </div>
        </div>

      </Modal >
      <AnimatedText margin="auto" >
        <h2 className='section__title text-slate-900 dark:text-white'>{t('portfolio.title')}</h2>
      </AnimatedText>
      <AnimatedText margin="auto" isInverse>
        <span className='section__subtitle text-slate-500 dark:text-stone-400'>{t('portfolio.description')}</span>
      </AnimatedText>
      <div className="portfolio__container container">
        <div className="portfolio__options mt-8">
          {
            buttonCaptions.map((filter) => (
              <Button key={filter} onClick={() => handleFilterClick(filter)} type="button"
                className={`focus:outline-none border-2 border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 capitalize
                ${activeFilter === filter ? "bg-zinc-950 dark:bg-zinc-900 text-white" : "dark:text-stone-400 text-zinc-600"}
                `}
              >
                {filter === 'all' ? t('portfolio.all') : filter}
              </Button>
            ))
          }
        </div>
        <motion.ul
          className="portfolio__content"
          initial="hidden"
          variants={container}
          animate={controls}
        >
          {
            data && data.data.map((item, index) => (
              <motion.li variants={itemVariant} transition={{ delay: index / 2 }} onClick={() => openModal(item)} key={index} className={`w-full cursor-pointer transition-all duration-200 rounded-lg shadow dark:bg-zinc-900 bg-white border border-gray-200 ${activeFilter === 'all' || activeFilter === item.portfolio.category ? 'block' : "hidden"}`} >
                <Image className="rounded-t-lg w-full h-[100px] overflow-hidden" image={item.imagesArray[0].url} alt={item.name} objectCover="object-cover" />
                <div className="p-5">
                  <Text as="h5" className="mb-2 text-md font-bold item__title line-clamp-1 text-slate-900 dark:text-white">
                    {item.portfolio.title}
                  </Text>
                  <Text as="p" className="mb-3 text-sm line-clamp-2 item__body text-slate-500 dark:text-stone-400" >
                    {item.portfolio.description}
                  </Text>
                </div>
              </motion.li>
            ))
          }
        </motion.ul>

      </div>
    </section >
  )
}

export default Portfolio