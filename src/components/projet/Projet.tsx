import { useState, forwardRef } from "react"
import TitreSection from "../titre-section/TitreSection"
import Lien from "../lien/Lien"
import Carrousel from "../carrousel/Carrousel"
import Mobile from "../mobile/Mobile"
import { motion } from "framer-motion"
import { type DonneesProjet } from "../../data/projets"

type ProjetProps = {
  donnees: DonneesProjet
  inverse?: true
  mobileCote?: "gauche" | "droite" | "super-droite"
}

export default forwardRef<HTMLElement, ProjetProps>(function Projet(
  { donnees, inverse, mobileCote },
  ref
) {
  const [indexImage, etablitindexImage] = useState<number>(0)
  const [sousIndexImageMobile, etablitSousIndexImageMobile] =
    useState<number>(0)
  const [mobileVisible, etablitMobileVisible] = useState<boolean>(true)

  function transformeTexteEnJSX(texte: string) {
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
    for (let texte of donnees.texte) {
      longueurTexte += texte.split("").length
    }
    return longueurTexte
  }

  const petit =
    mobileCote === "super-droite" ? "section-projet__liste-textes--petit" : ""
  const styleTexte = {
    color: `${donnees.couleur.texte}`,
  }
  const styleConteneurDePage = {
    color: `${donnees.couleur.texte}`,
    background: `linear-gradient(180deg, ${donnees.couleur.fond1} 0%, ${donnees.couleur.fond2} 100%)`,
  }
  const styleFlex: React.CSSProperties = inverse
    ? { flexDirection: "row-reverse" }
    : { flexDirection: "row" }
  const classeLectureGrandTexte =
    donnees.lien && calculeTailleTexte() > 500
      ? "section-projet__paragr--grand-texte"
      : ""
  const classeListeTextesMobile = mobileCote
    ? "section-projet__liste-textes--mobile"
    : ""
  const classeMobileInvisible = mobileVisible
    ? ""
    : "section-projet__liste-textes--mobile-invisible"

  return (
    <section className="section-projet" style={styleConteneurDePage} ref={ref}>
      <div className="section-contenu">
        <TitreSection titre={donnees.titre} couleur={donnees.couleur.texte} />
        <div className="section-projet__corps" style={styleFlex}>
          <motion.div
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`section-projet__visuel`}
          >
            <>
              <Carrousel
                indexImage={indexImage}
                etablitindexImage={etablitindexImage}
                etablitSousIndexImageMobile={etablitSousIndexImageMobile}
                liste={donnees.image}
                mobileCote={mobileCote}
                mobileVisible={mobileVisible}
                etablitMobileVisible={etablitMobileVisible}
              />
              {calculeTailleTexte() >= 500 && (
                <div className="section-projet__grand-cont-liens">
                  {donnees.lien.map((objet, index) => (
                    <Lien style={styleTexte} objet={objet} key={`${index}`} />
                  ))}
                </div>
              )}
            </>
            {mobileCote && mobileVisible && donnees.mobile && (
              <Mobile
                indexImage={indexImage}
                sousIndexImageMobile={sousIndexImageMobile}
                etablitSousIndexImageMobile={etablitSousIndexImageMobile}
                donneesMobile={donnees.mobile}
                donneesDesktop={donnees.image}
                mobileCote={mobileCote}
              />
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`section-projet__liste-textes ${classeListeTextesMobile} ${petit} ${classeMobileInvisible}`}
            style={styleTexte}
          >
            {donnees.texte.map((el, index) => (
              <p
                className={`section-projet__paragr section-projet__paragr--projet ${classeLectureGrandTexte}`}
                style={styleTexte}
                key={`${index}`}
              >
                {transformeTexteEnJSX(el)}
              </p>
            ))}
            {calculeTailleTexte() < 500 &&
              donnees.lien.map((objet, index) => (
                <Lien style={styleTexte} objet={objet} key={`${index}`} />
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
})
