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

function HomeScreen() {
  const { isLoading } = useQuery({
    queryKey: ['portfoliolist'],
    queryFn: () => api.get(`/portfolio/`),
  })
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
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default HomeScreen;
