import { useState, forwardRef } from "react"
import TitreSection from "../titre-section/TitreSection"
import Lien from "../../components/lien/Lien"
import Carrousel from "../carrousel/Carrousel"
import Mobile from "../../components/mobile/Mobile"
import { motion } from "framer-motion"

export default forwardRef(function Presentation(
  { donnees, histoire, inverse, mobile },
  ref
) {
  const [indexImage, etablitindexImage] = useState(0)
  const [sousIndexImageMobile, etablitSousIndexImageMobile] = useState(0)
  const [mobileVisible, etablitMobileVisible] = useState(true)

  function formateTexteGras(texte) {
    return texte.replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>")
  }

  function calculeTailleTexte() {
    let longueurTexte = 0
    for (let texte of donnees.texte) {
      longueurTexte += texte.split("").length
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
  const styleFlex = inverse && { flexDirection: "row-reverse" }

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
          {histoire ? (
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

                {calculeTailleTexte() >= 500 && !histoire && (
                  <div className="section-presentation__grand-cont-liens">
                    {donnees.lien.map((objet, index) => (
                      <Lien style={styleTexte} objet={objet} key={`${index}`} />
                    ))}
                  </div>
                )}
              </>

              {mobile && mobileVisible && (
                <Mobile
                  indexImage={indexImage}
                  sousIndexImageMobile={sousIndexImageMobile}
                  etablitSousIndexImageMobile={etablitSousIndexImageMobile}
                  donneesMobile={donnees.mobile}
                  donneesDesktop={donnees.image}
                  placement={mobile.placement}
                />
              )}
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`section-presentation__liste-textes ${classeListeTextesMobile} ${petit} ${classeMobileInvisible}`}
            style={styleTexte}
          >
            {donnees.texte.map((el, index) => (
              <p
                className={`section-presentation__paragr ${classeTexteProjet} ${classeLectureGrandTexte}`}
                style={styleTexte}
                key={`${index}`}
                dangerouslySetInnerHTML={{
                  __html: formateTexteGras(el),
                }}
              ></p>
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
