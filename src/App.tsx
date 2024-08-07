import { useState, useEffect, useRef } from "react"
import BoutonDefilementHaut from "./components/bouton-defilement-haut/BoutonDefilementHaut"
import Header from "./components/header/Header"
import Presentation from "./components/presentation/Presentation"
import Competences from "./components/competences/Competences"
import Footer from "./components/footer/Footer"
import Aventure from "./components/aventure/Aventure"
import { donneesCompetences } from "./data/competences"
import {
  biographie,
  philosophie,
  conclusion,
  donneesProjet1,
  donneesProjet2,
  donneesProjet3,
  donneesProjet4,
  donneesProjet5,
  donneesAventure,
} from "./data/projets"

export type GereClicDefilementArg =
  | "compétences"
  | "aventures"
  | "réalisations"
  | "haut"

export default function App() {
  const [boutonDefilementHautVisible, etablitBoutonDefilementHautVisible] =
    useState<boolean>(false)
  const refHeader = useRef<HTMLElement>(null)
  const refCompetences = useRef<HTMLElement>(null)
  const refAventures = useRef<HTMLElement>(null)
  const refRealisations = useRef<HTMLElement>(null)
  const refDefilement = useRef<HTMLElement | null>(null)

  function gereClicDefilement(type: GereClicDefilementArg) {
    if (type === "compétences") {
      refDefilement.current = refCompetences.current
    } else if (type === "aventures") {
      refDefilement.current = refAventures.current
    } else if (type === "réalisations") {
      refDefilement.current = refRealisations.current
    } else if (type === "haut") {
      refDefilement.current = refHeader.current
    }
    refDefilement.current?.scrollIntoView({ behavior: "smooth" })
  }

  function observeDefilement() {
    const hauteurCachantBoutonDefilement = 1000
    const defilement =
      document.body.scrollTop || document.documentElement.scrollTop
    if (defilement < hauteurCachantBoutonDefilement) {
      etablitBoutonDefilementHautVisible(false)
    } else {
      etablitBoutonDefilementHautVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", observeDefilement)
    return () => window.removeEventListener("scroll", observeDefilement)
  }, [])

  return (
    <>
      {boutonDefilementHautVisible && (
        <BoutonDefilementHaut gereClicDefilement={gereClicDefilement} />
      )}
      <Header ref={refHeader} gereClicDefilement={gereClicDefilement} />
      <main>
        <Presentation histoire={true} donnees={biographie} />
        <Competences ref={refCompetences} donnees={donneesCompetences} />
        <Presentation histoire={true} donnees={philosophie} inverse={true} />
        <Presentation
          ref={refRealisations}
          donnees={donneesProjet1}
          mobile={{ placement: "super-droite" }}
        />
        <Presentation
          donnees={donneesProjet2}
          inverse={true}
          mobile={{ placement: "gauche" }}
        />
        <Aventure ref={refAventures} donnees={donneesAventure} />
        <Presentation
          donnees={donneesProjet3}
          mobile={{ placement: "droite" }}
        />
        <Presentation donnees={donneesProjet4} inverse={true} />
        <Presentation donnees={donneesProjet5} />
        <Presentation histoire={true} donnees={conclusion} />
      </main>
      <Footer />
    </>
  )
}
