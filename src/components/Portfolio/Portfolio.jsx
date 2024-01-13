import { useState } from "react"
import { filterableData } from "../../Data";
import Button from "./Button";
import { Text } from "./Text";
import { Image } from "./Image";
import "./portfolio.css"

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const buttonCaptions = ['all', 'UI/UX', 'Frontend', 'Backend'];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
  }
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className='section__title'>Portfolio</h2>
      <span className='section__subtitle'>Veja alguns de meus projetos</span>

      <div className="portfolio__container container">
        <div className="portfolio__options">
          {
            buttonCaptions.map((filter) => (
              <Button key={filter} onClick={() => handleFilterClick(filter)} type="button"
                className={`focus:outline-none border-2 border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 capitalize`}
                style={{ backgroundColor: activeFilter === filter ? "#333" : "transparent", color: activeFilter === filter ? "#fff" : "#333" }}
              >
                {filter === 'all' ? 'Todos' : filter}
              </Button>
            ))
          }
        </div>
        {/* filtered cards display */}
        <main className="portfolio__content">
          {
            filterableData.map((item, index) => (

              <div key={index} className={`w-full cursor-pointer transition-all duration-200 rounded-lg shadow bg-white border border-gray-200 ${activeFilter === 'all' || activeFilter === item.name ? 'block' : "hidden"}`}>
                <Image className="rounded-t-lg w-full h-[100px] overflow-hidden" image={item.src} alt={item.name} objectCover="object-cover" />
                <div className="p-5">
                  <Text as="h5" className="mb-2 text-md font-bold item__title line-clamp-1">
                    {item.title}
                  </Text>
                  <Text as="p" className="mb-3 text-sm line-clamp-2 item__body" >
                    {item.text}
                  </Text>
                </div>
              </div>

            ))
          }
        </main>

      </div>
    </section >
  )
}

export default Portfolio