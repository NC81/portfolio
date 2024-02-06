import { useState, forwardRef } from "react"
import { motion } from "framer-motion"
import TitreSection from "../titre-section/TitreSection"
import chevron from "../../assets/icons/icons8-chevron-bas-64.png"
import recharger from "../../assets/icons/icons8-recharger-50.png"

export default forwardRef(function Aventures({ donnees }, ref) {
  const [indexListeImages, etablitIndexListeImages] = useState(0)
  const [etape, etablitEtape] = useState(1)

  const lieu = indexListeImages === 0 ? "Le Temple" : "L'Arbre sacré"
  const styleDuConteneurDePage = {
    color: `${donnees.couleur.texte}`,
    background: `linear-gradient(180deg, ${donnees.couleur.fond1} 0%, ${donnees.couleur.fond2} 100%)`,
  }
  const styleDeBordureDimage = !donnees.lien
    ? {
        border: `1px solid ${donnees.couleur.texte}`,
      }
    : undefined
  const deuxiemeAventure = indexListeImages === 1 ? "deuxieme-aventure" : ""

  return (
    <section ref={ref} style={styleDuConteneurDePage}>
      <div className="section-contenu">
        {etape > 1 && (
          <button className="bouton--recharger">
            <img
              onClick={() => etablitEtape(1)}
              className="header-section__icone-recharger"
              src={recharger}
              alt="Recharger"
            />
          </button>
        )}
        <TitreSection titre={donnees.titre} />
        {etape === 1 && (
          <div className={`aventure-etape aventure-etape--1`}>
            <motion.div
              initial={{ opacity: 0, translateX: -10 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="aventure-etape__colonne aventure-etape--1__relative"
            >
              <img
                className="aventure-etape__icone aventure-etape__icone--haut"
                src={chevron}
                alt="Flèche bas"
              />
              <img
                className="aventure-etape__icone aventure-etape__icone--bas"
                src={chevron}
                alt="Flèche haut"
              />
              <div
                className="aventure-etape--1__cont-img"
                style={styleDeBordureDimage}
              >
                <img
                  onClick={() => {
                    etablitIndexListeImages(0)
                    etablitEtape(2)
                  }}
                  className="aventure-etape--1__visuel"
                  src={donnees.image[0][0].source}
                  alt=""
                />
                <h3>Le Temple</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: 10 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="aventure-etape__colonne aventure-etape--1__relative"
            >
              <img
                className="aventure-etape__icone aventure-etape__icone--haut"
                src={chevron}
                alt="Flèche bas"
              />
              <img
                className="aventure-etape__icone aventure-etape__icone--bas"
                src={chevron}
                alt="flèche haut"
              />
              <div
                className="aventure-etape--1__cont-img"
                style={styleDeBordureDimage}
              >
                <img
                  onClick={() => {
                    etablitIndexListeImages(1)
                    etablitEtape(2)
                  }}
                  className="aventure-etape--1__visuel"
                  src={donnees.image[1][0].source}
                  alt=""
                />
                <h3>L'Arbre sacré</h3>
              </div>
            </motion.div>
          </div>
        )}
        {etape === 2 && (
          <div
            className={`aventure-etape aventure-etape--2 ${deuxiemeAventure}`}
          >
            <div className="aventure-etape__colonne aventure-etape--2__relative">
              <img
                className="aventure-etape__icone aventure-etape__icone--haut"
                src={chevron}
                alt="Flèche bas"
              />
              <img
                className="aventure-etape__icone aventure-etape__icone--bas"
                src={chevron}
                alt="flèche haut"
              />
              <div
                className="aventure-etape--2__cont-img"
                style={styleDeBordureDimage}
              >
                <img
                  className={`aventure-etape--2__visuel ${deuxiemeAventure}`}
                  onClick={() => etablitEtape(3)}
                  src={donnees.image[indexListeImages][1].source}
                  alt=""
                />
              </div>
            </div>

            <div className="aventure-etape__colonne aventure-etape--2__description">
              <h3>{lieu}</h3>
              <p> {donnees.texte[indexListeImages][0]}</p>
            </div>
          </div>
        )}
        {etape === 3 && (
          <div className={`aventure-etape aventure-etape--3`}>
            <div
              className={`aventure-etape__colonne aventure-etape--3--gauche ${deuxiemeAventure}`}
            >
              <p>{donnees.texte[indexListeImages][1]} ...</p>
              <img
                className={deuxiemeAventure}
                style={styleDeBordureDimage}
                src={donnees.image[indexListeImages][2].source}
                alt=""
              />
            </div>
            <div
              className={`aventure-etape__colonne aventure-etape--3--droite ${deuxiemeAventure}`}
            >
              <img
                className={deuxiemeAventure}
                style={styleDeBordureDimage}
                src={donnees.image[indexListeImages][3].source}
                alt=""
              />
              <p>... {donnees.texte[indexListeImages][2]}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
})
