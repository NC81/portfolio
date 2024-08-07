import { useState, forwardRef } from "react"
import cerveau from "../../assets/images/cerveau.jpg"
import vaisseau from "../../assets/images/vaisseau.jpg"
import hero from "../../assets/images/hero.jpg"
import TitreSection from "../titre-section/TitreSection"
import Ciblage from "../ciblage/Ciblage"
import { type GereClicDefilementArg } from "../../App"

type ClicDefilementType = {
  gereClicDefilement: (type: GereClicDefilementArg) => void
}

export default forwardRef<HTMLElement, ClicDefilementType>(function Header(
  { gereClicDefilement },
  ref
) {
  const [verrouillageCiblePetite, etablitVerrouillageCiblePetite] =
    useState(false)
  const [verrouillageCibleMoyenne, etablitVerrouillageCibleMoyenne] =
    useState(false)
  const [verrouillageCibleGrande, etablitVerrouillageCibleGrande] =
    useState(false)

  return (
    <header ref={ref} className="header">
      <div className="section-contenu">
        <h1>
          2024
          <br />
          Portfolio
        </h1>
        <TitreSection couleur={"#dcbc9f"} header={true} />
        <nav className="header__nav">
          <div
            onClick={() => gereClicDefilement("compétences")}
            onMouseEnter={() => etablitVerrouillageCiblePetite(true)}
            onMouseLeave={() => etablitVerrouillageCiblePetite(false)}
            className="header__colonne header__colonne--petit"
          >
            <div className="header__cont-img">
              <img
                className="header__img"
                src={cerveau}
                alt="Le profil d'une tête de couleur turquoise à l'intérieur de laquelle un cerveau orangé rayonne comme une étoile"
              />
            </div>
            <Ciblage verrouillage={verrouillageCiblePetite} couleur="#dcbc9f" />
            <span>COMPÉTENCES</span>
          </div>
          <div
            onClick={() => gereClicDefilement("aventures")}
            onMouseEnter={() => etablitVerrouillageCibleMoyenne(true)}
            onMouseLeave={() => etablitVerrouillageCibleMoyenne(false)}
            className="header__colonne header__colonne--moyen"
          >
            <div className="header__cont-img">
              <img
                className="header__img"
                src={vaisseau}
                alt="Un grand vaisseau spatial avec des cheminées navigue dans un nuage de gaz multicolore en face d'une étoile."
              />
            </div>
            <Ciblage
              verrouillage={verrouillageCibleMoyenne}
              couleur="#dcbc9f"
            />
            <span>AVENTURES</span>
          </div>
          <div
            onClick={() => gereClicDefilement("réalisations")}
            onMouseEnter={() => etablitVerrouillageCibleGrande(true)}
            onMouseLeave={() => etablitVerrouillageCibleGrande(false)}
            className="header__colonne header__colonne--grand"
          >
            <div className="header__cont-img">
              <img
                className="header__img"
                src={hero}
                alt="Un pilote de vaisseau observe attentivement l'espace depuis son cockpit à proximité d'une planète, derrière laquelle brille une étoile."
              />
            </div>
            <Ciblage verrouillage={verrouillageCibleGrande} couleur="#dcbc9f" />
            <span>RÉALISATIONS</span>
          </div>
        </nav>
      </div>
    </header>
  )
})
