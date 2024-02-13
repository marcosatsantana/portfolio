import { useState } from "react"
import Button from "./Button";
import { Text } from "./Text";
import { Image } from "./Image";
import "./portfolio.css"
import { useInView, useSpring, animated } from "@react-spring/web";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";
import Modal from 'react-modal';
import { Player } from '@lottiefiles/react-lottie-player';
import loading from "../../assets/loading.json"


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-45%',
    flex: 1,
    zIndex: 9,
    borderRadius: 25,
    backgroundColor: 'white',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
};



const Portfolio = () => {
  const queryClient = useQueryClient()
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  function openModal(project) {
    setSelectedProject(project);
    queryClient.invalidateQueries()
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { data } = useQuery({
    queryKey: ['portfolio'],
    queryFn: () => api.get('/portfolio'),
  })


  const { data: dataList, isLoading } = useQuery({
    queryKey: ['portfoliolist', selectedProject.id],
    queryFn: () => api.get(`/portfolio/${selectedProject.id ?? 1}`),
  })

  const [activeFilter, setActiveFilter] = useState('all')

  const buttonCaptions = ['all', 'UI/UX', 'Frontend', 'Backend'];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
  }

  const [ref, inView] = useInView({ triggerOnce: true });

  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 }
  });

  return (
    <section className="portfolio section" id="portfolio">
      <Modal
        overlayElement={(props, contentElement) => <div style={{ backgroundColor: 'red' }} {...props}>{contentElement}</div>}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Portfolio"
      >
        <div className="btn__close-modal">
          <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
        </div>
        <div className="portfolio__wrapper" >
          <Image className="portfolio__image-modal" image={selectedProject.image_url} alt={selectedProject.name} objectCover="object-cover" />
          <div>
            <Text as="h5" className="mb-2 text-md font-bold item__title line-clamp-1">
              {selectedProject.title}
            </Text>
            <Text as="p" className="mb-3 text-sm item__body" >
              {selectedProject.description}
            </Text>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {dataList?.data.map((item) => {
                return (
                  <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{item.content}</span>
                )
              })}
            </div>
          </div>
        </div>

      </Modal >
      <h2 className='section__title text-slate-900 dark:text-white'>Portfolio</h2>
      <span className='section__subtitle text-slate-500 dark:text-stone-400'>Veja alguns de meus projetos</span>
      <div className="portfolio__container container">
        <div className="portfolio__options">
          {
            buttonCaptions.map((filter) => (
              <Button key={filter} onClick={() => handleFilterClick(filter)} type="button"
                className={`focus:outline-none border-2 border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 capitalize
                ${activeFilter === filter ? "bg-zinc-950 dark:bg-zinc-900 text-white" : "dark:text-stone-400 text-zinc-600"}
                `}
              >
                {filter === 'all' ? 'Todos' : filter}
              </Button>
            ))
          }
        </div>
        {/* filtered cards display */}
        <main className="portfolio__content" ref={ref}>
          {
            data?.data.map((item, index) => (
              <animated.div onClick={() => openModal(item)} style={{ ...spring }} key={index} className={`w-full cursor-pointer transition-all duration-200 rounded-lg shadow dark:bg-zinc-900 bg-white border border-gray-200 ${activeFilter === 'all' || activeFilter === item.category ? 'block' : "hidden"}`}>
                <Image className="rounded-t-lg w-full h-[100px] overflow-hidden" image={item.image_url} alt={item.name} objectCover="object-cover" />
                <div className="p-5">
                  <Text as="h5" className="mb-2 text-md font-bold item__title line-clamp-1 text-slate-900 dark:text-white">
                    {item.title}
                  </Text>
                  <Text as="p" className="mb-3 text-sm line-clamp-2 item__body text-slate-500 dark:text-stone-400" >
                    {item.description}
                  </Text>
                </div>
              </animated.div>

            ))
          }
        </main>

      </div>
    </section >
  )
}

export default Portfolio