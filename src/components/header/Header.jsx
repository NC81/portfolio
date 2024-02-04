import { useState, forwardRef } from "react"
import cerveau from "../../assets/images/cerveau.jpg"
import vaisseau from "../../assets/images/vaisseau.jpg"
import hero from "../../assets/images/hero.jpg"
import Ciblage from "../ciblage/Ciblage"

export default forwardRef(function Header({ gereClicDefilement }, ref) {
  const [verrouillageCiblePetite, etablitVerrouillageCiblePetite] =
    useState(false)
  const [verrouillageCibleMoyenne, etablitVerrouillageCibleMoyenne] =
    useState(false)
  const [verrouillageCibleGrande, etablitVerrouillageCibleGrande] =
    useState(false)

  return (
    <header ref={ref} className="section header">
      <div className="section__contenu">
        <h1>
          2024
          <br />
          Portfolio
        </h1>
        <div className="section-titre header__titre">
          <h2>
            Nicolas Candeli, <br />
            Développeur Front-End
          </h2>
        </div>
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
                alt="Un cerveau rayonnant comme une étoile"
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
                alt="Un vaisseau dans un nuage de gas multicolore en face d'une étoile."
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
                alt="Un pilote de vaisseau observe l'espace dans son cockpit à proximité d'une planète, en face d'une étoile."
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
