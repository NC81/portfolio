import { useRef } from "react"
import Header from "./components/header/Header"
import Presentation from "./components/presentation/Presentation"
import Competences from "./components/competences/Competences"
import Footer from "./components/footer/Footer"
import Aventure from "./components/aventure/Aventure"
import { biographie } from "./components/presentation/donnees"
import { philosophie } from "./components/presentation/donnees"
import { conclusion } from "./components/presentation/donnees"
import { donneesProjet1 } from "./components/presentation/donnees"
import { donneesProjet2 } from "./components/presentation/donnees"
import { donneesProjet3 } from "./components/presentation/donnees"
import { donneesProjet4 } from "./components/presentation/donnees"
import { donneesProjet5 } from "./components/presentation/donnees"
import { donneesAventure } from "./components/presentation/donnees"

export default function App() {
  const ref = useRef(null)
  const gereClic = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Header gereClic={gereClic} />
      <main>
        <Presentation histoire={true} donnees={biographie} />
        <Competences />
        <Presentation histoire={true} donnees={philosophie} inverse={true} />
        <Presentation ref={ref} donnees={donneesProjet1} />
        <Presentation
          donnees={donneesProjet2}
          inverse={true}
          mobile={{ placement: "gauche", media: "image" }}
        />
        <Aventure donnees={donneesAventure} />
        <Presentation
          donnees={donneesProjet3}
          mobile={{ placement: "droite", media: "image" }}
        />
        <Presentation donnees={donneesProjet4} inverse={true} />
        <Presentation donnees={donneesProjet5} />
        <Presentation histoire={true} donnees={conclusion} />
      </main>
      <Footer />
    </>
  )
}
