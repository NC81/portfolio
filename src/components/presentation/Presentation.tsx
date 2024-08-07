import { useState, forwardRef } from "react"
import TitreSection from "../titre-section/TitreSection"
import Lien from "../lien/Lien"
import Carrousel from "../carrousel/Carrousel"
import Mobile from "../mobile/Mobile"
import { motion } from "framer-motion"
import {
  type DonneesPhilosophie,
  type DonneesProjet,
  type DonneesAventure,
} from "../../data/projets"

type PresentationProps = {
  donnees: DonneesPhilosophie | DonneesProjet | DonneesAventure
  histoire?: true
  inverse?: true
  mobile?: { placement: "gauche" | "droite" | "super-droite" }
}

export default forwardRef<HTMLElement, PresentationProps>(function Presentation(
  { donnees, histoire, inverse, mobile },
  ref
) {
  const [indexImage, etablitindexImage] = useState<number>(0)
  const [sousIndexImageMobile, etablitSousIndexImageMobile] =
    useState<number>(0)
  const [mobileVisible, etablitMobileVisible] = useState<boolean>(true)

  const transformeTexteEnJSX = (texte: string) => {
    const parts = texte.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((morceau, index) => {
      if (morceau.startsWith("**") && morceau.endsWith("**")) {
        return <strong key={index}>{morceau.slice(2, -2)}</strong>
      }
      return morceau
    })
  }

  function calculeTailleTexte(): number {
    let longueurTexte = 0
    if (donnees.type !== "aventure") {
      for (let texte of donnees.texte) {
        longueurTexte += texte.split("").length
      }
    }
    return longueurTexte
  }

  const petit =
    mobile?.placement === "super-droite"
      ? "section-presentation__liste-textes--petit"
      : ""
  const styleTexte = {
    color: `${donnees.couleur.texte}`,
  }
  const styleConteneurDePage = {
    color: `${donnees.couleur.texte}`,
    background: `linear-gradient(180deg, ${donnees.couleur.fond1} 0%, ${donnees.couleur.fond2} 100%)`,
  }
  const styleBordureDimage = histoire
    ? {
        border: `1px solid ${donnees.couleur.texte}`,
      }
    : undefined

  const styleFlex: React.CSSProperties = inverse
    ? { flexDirection: "row-reverse" }
    : { flexDirection: "row" }

  const classeVisuelProjet = !histoire
    ? "section-presentation__visuel--projet"
    : ""
  const classeTexteProjet = !histoire
    ? "section-presentation__paragr--projet"
    : ""
  const classeLectureGrandTexte =
    donnees.lien && calculeTailleTexte() > 500
      ? "section-presentation__paragr--grand-texte"
      : ""
  const classeListeTextesMobile = mobile
    ? "section-presentation__liste-textes--mobile"
    : ""
  const classeMobileInvisible = mobileVisible
    ? ""
    : "section-presentation__liste-textes--mobile-invisible"

  return (
    <section
      className="section-presentation"
      style={styleConteneurDePage}
      ref={ref}
    >
      <div className="section-contenu">
        <TitreSection titre={donnees.titre} couleur={donnees.couleur.texte} />
        <div className="section-presentation__corps" style={styleFlex}>
          {histoire && donnees.type === "philosophie" ? (
            <motion.img
              initial={{ opacity: 0, translateY: -10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="section-presentation__visuel"
              src={donnees.image[0].source}
              style={styleBordureDimage}
              alt={donnees.image[0].description}
            />
          ) : (
            donnees.type === "projet" && (
              <motion.div
                initial={{ opacity: 0, translateY: -10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`section-presentation__visuel ${classeVisuelProjet}`}
              >
                <>
                  <Carrousel
                    indexImage={indexImage}
                    etablitindexImage={etablitindexImage}
                    etablitSousIndexImageMobile={etablitSousIndexImageMobile}
                    liste={donnees.image}
                    style={styleBordureDimage}
                    mobile={mobile}
                    mobileVisible={mobileVisible}
                    etablitMobileVisible={etablitMobileVisible}
                  />

                  {calculeTailleTexte() >= 500 &&
                    !histoire &&
                    donnees.type === "projet" && (
                      <div className="section-presentation__grand-cont-liens">
                        {donnees.lien.map((objet, index) => (
                          <Lien
                            style={styleTexte}
                            objet={objet}
                            key={`${index}`}
                          />
                        ))}
                      </div>
                    )}
                </>

                {mobile && mobileVisible && donnees.mobile && (
                  <Mobile
                    indexImage={indexImage}
                    sousIndexImageMobile={sousIndexImageMobile}
                    etablitSousIndexImageMobile={etablitSousIndexImageMobile}
                    donneesMobile={donnees.mobile}
                    donneesDesktop={donnees.image}
                    mobile={mobile}
                  />
                )}
              </motion.div>
            )
          )}
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`section-presentation__liste-textes ${classeListeTextesMobile} ${petit} ${classeMobileInvisible}`}
            style={styleTexte}
          >
            {donnees.type !== "aventure" &&
              donnees.texte.map((el, index) => (
                <p
                  className={`section-presentation__paragr ${classeTexteProjet} ${classeLectureGrandTexte}`}
                  style={styleTexte}
                  key={`${index}`}
                >
                  {transformeTexteEnJSX(el)}
                </p>
              ))}

            {donnees.lien &&
              (calculeTailleTexte() < 500 || histoire) &&
              donnees.lien.map((objet, index) => (
                <Lien style={styleTexte} objet={objet} key={`${index}`} />
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
})
