import { useState, useEffect, useRef } from "react"
import BoutonRetour from "./components/bouton-retour/BoutonRetour"
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
  const [boutonRetourVisible, etablitBoutonRetourVisible] = useState(false)
  const ref = useRef(null)
  const refHeader = useRef(null)
  const refCompetences = useRef(null)
  const refAventures = useRef(null)
  const refRealisations = useRef(null)

  function gereClicDefilement(string) {
    if (string === "compétences") {
      ref.current = refCompetences.current
    } else if (string === "aventures") {
      ref.current = refAventures.current
    } else if (string === "réalisations") {
      ref.current = refRealisations.current
    } else if (string === "haut") {
      ref.current = refHeader.current
    }
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  function observeDefilement() {
    const hauteurCachantBouton = 1000
    const defilement =
      document.body.scrollTop || document.documentElement.scrollTop
    if (defilement < hauteurCachantBouton) {
      etablitBoutonRetourVisible(false)
    } else {
      etablitBoutonRetourVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", observeDefilement)
    return () => window.removeEventListener("scroll", observeDefilement)
  }, [])

  return (
    <>
      {boutonRetourVisible && (
        <BoutonRetour gereClicDefilement={gereClicDefilement} />
      )}
      <Header ref={refHeader} gereClicDefilement={gereClicDefilement} />
      <main>
        <Presentation histoire={true} donnees={biographie} />
        <Competences ref={refCompetences} />
        <Presentation histoire={true} donnees={philosophie} inverse={true} />
        <Presentation ref={refRealisations} donnees={donneesProjet1} />
        <Presentation
          donnees={donneesProjet2}
          inverse={true}
          mobile={{ placement: "gauche", media: "image" }}
        />
        <Aventure ref={refAventures} donnees={donneesAventure} />
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
