import { useState, useEffect, useRef } from "react"
import BoutonDefilementHaut from "./components/bouton-defilement-haut/BoutonDefilementHaut"
import Header from "./components/header/Header"
import Projet from "./components/projet/Projet"
import Competences from "./components/competences/Competences"
import Footer from "./components/footer/Footer"
import Aventure from "./components/aventure/Aventure"
import Personnel from "./components/personnel/Personnel"
import { donneesCompetences } from "./data/competences"
import {
  donneesBiographie,
  donneesPhilosophie,
  donneesConclusion,
  donneesProjetDebut,
  donneesProjetSass,
  donneesProjetBesoins,
  donneesProjetRecharts,
  donneesProjetMigration,
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
        <Personnel donnees={donneesBiographie} />
        <Competences ref={refCompetences} donnees={donneesCompetences} />
        <Personnel donnees={donneesPhilosophie} inverse={true} />
        <Projet
          ref={refRealisations}
          donnees={donneesProjetDebut}
          mobileCote={"super-droite"}
        />
        <Projet
          donnees={donneesProjetSass}
          inverse={true}
          mobileCote={"gauche"}
        />
        <Aventure ref={refAventures} donnees={donneesAventure} />
        <Projet donnees={donneesProjetBesoins} mobileCote={"droite"} />
        <Projet donnees={donneesProjetRecharts} inverse={true} />
        <Projet donnees={donneesProjetMigration} />
        <Personnel donnees={donneesConclusion} />
      </main>
      <Footer />
    </>
  )
}
