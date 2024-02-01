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
    <header ref={ref} className="page-conteneur header">
      <div className="page-contenu">
        <h1>
          2024
          <br />
          Portfolio
        </h1>
        <div className="page-titre">
          <h2>
            Nicolas Candeli, <br />
            Développeur Front-End
          </h2>
        </div>
        <div className="header__corps">
          <div className="header__colonne header--petit">
            <div
              onClick={() => gereClicDefilement("compétences")}
              onMouseEnter={() => {
                etablitVerrouillageCiblePetite(true)
              }}
              onMouseLeave={() => {
                etablitVerrouillageCiblePetite(false)
              }}
              className="header__cont-img"
            >
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
            onMouseEnter={() => {
              etablitVerrouillageCibleMoyenne(true)
            }}
            onMouseLeave={() => {
              etablitVerrouillageCibleMoyenne(false)
            }}
            className="header__colonne header--moyen"
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
            onMouseEnter={() => {
              etablitVerrouillageCibleGrande(true)
            }}
            onMouseLeave={() => {
              etablitVerrouillageCibleGrande(false)
            }}
            className="header__colonne header--grand"
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
        </div>
      </div>
    </header>
  )
})
