import Header from "../../components/Header/Header"
import Home from "../../components/Home/Home"
import About from "../../components/About/About"
import Skills from "../../components/Skills/Skills"
import Services from "../../components/Services/Services"
import Qualification from "../../components/Qualification/Qualification"
import Testimonials from "../../components/Testimonials/Testimonials"
import Portfolio from "../../components/Portfolio/Portfolio"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
import ScrollUp from "../../components/ScrollUp/ScrollUp"
import animation from "../../assets/loadingPage.json"
import { Player } from "@lottiefiles/react-lottie-player"
import { useQuery } from "@tanstack/react-query"
import { api } from "../../services/api"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import { motion } from 'framer-motion';

function HomeScreen() {
  const { i18n } = useTranslation();
  const { isLoading } = useQuery({
    queryKey: ['portfoliolist'],
    queryFn: () => api.get(`/portfolio/`),
  })

  useEffect(() => {
    // Função para identificar o idioma padrão do dispositivo
    const identifyDefaultLanguage = () => {
      const userLanguage = navigator.language.split('-')[0]; // Obtenha o idioma principal (excluindo a região)
      i18n.changeLanguage(userLanguage);
    };

    identifyDefaultLanguage(); // Chamada inicial para definir o idioma padrão
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen bg-zinc-950 flex items-center justify-center">
        <Player
          src={animation}
          className="w-98 h-98"
          loop
          autoplay
        />
      </div>
    )
  }
  return (
    <>
      <Header />
      <main className='main dark:bg-zinc-950 bg-white'>
        <Home />
        <div className="h-screen flex-col justify-center items-center">
          <About />
        </div>
        <div className="h-screen flex-col justify-center items-center">
          <Skills />
        </div>
        <div className="h-screen flex-col justify-center items-center">
          <Services />
        </div>
        <div className="h-screen flex-col justify-center items-center">
          <Qualification />
        </div>
        <div className="h-screen flex-col justify-center items-center">
          <Testimonials />
        </div>
        <div className="h-screen flex-col justify-center items-center">
          <Portfolio />
        </div>
        <div className="h-screen flex-col justify-center items-center">
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default HomeScreen;
