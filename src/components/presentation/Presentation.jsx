import { useState, forwardRef } from "react"
import Lien from "../../components/lien/Lien"
import Mobile from "../../components/mobile/Mobile"
import { motion } from "framer-motion"
import Carrousel from "../carrousel/Carrousel"

export default forwardRef(function Presentation(
  { donnees, histoire, inverse, mobile },
  ref
) {
  const [indexImage, etablitindexImage] = useState(0)
  const [sousIndexImageMobile, etablitSousIndexImageMobile] = useState(0)

  function formateTexteGras(texte) {
    return texte.replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>")
  }

  const styleDeTexte = {
    color: `${donnees.couleur.texte}`,
  }
  const styleDuConteneurDePage = {
    color: `${donnees.couleur.texte}`,
    background: `linear-gradient(180deg, ${donnees.couleur.fond1} 0%, ${donnees.couleur.fond2} 100%)`,
  }
  const styleDeBordureDimage = histoire
    ? {
        border: `1px solid ${donnees.couleur.texte}`,
      }
    : undefined
  const styleDeLigne = {
    background: `linear-gradient(90deg, ${donnees.couleur.texte}, transparent)`,
  }
  const styleDeFlex = inverse && { flexDirection: "row-reverse" }

  const visuelProjet = !histoire ? "section-presentation__visuel--projet" : ""
  const texteProjet = !histoire ? "section-presentation__paragr--projet" : ""
  const lectureGrandTexte =
    donnees.lien && donnees.texte.length >= 3
      ? "section-presentation__paragr--grand-texte"
      : ""
  const listeTextesMobile = mobile
    ? "section-presentation__liste-textes--mobile"
    : ""

  return (
    <section
      className="section section-presentation"
      style={styleDuConteneurDePage}
      ref={ref}
    >
      <div className="section__contenu">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-titre"
        >
          <h2 style={styleDeTexte}>{donnees.titre}</h2>
          <div className="section-titre__ligne" style={styleDeLigne}></div>
        </motion.div>
        <div className="section-presentation__corps" style={styleDeFlex}>
          <motion.div
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`section-presentation__visuel ${visuelProjet}`}
          >
            {donnees.lien && !histoire ? (
              <>
                <Carrousel
                  indexImage={indexImage}
                  etablitindexImage={etablitindexImage}
                  etablitSousIndexImageMobile={etablitSousIndexImageMobile}
                  liste={donnees.image}
                  style={styleDeBordureDimage}
                />

                {donnees.texte.length >= 3 && (
                  <div className="section-presentation__grand-cont-liens">
                    {donnees.lien.map((objet, index) => (
                      <Lien
                        style={styleDeTexte}
                        objet={objet}
                        key={`${index}`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <img
                className="section-presentation__img-histoire"
                src={donnees.image[0].source}
                style={styleDeBordureDimage}
                alt={donnees.image[0].description}
              />
            )}
            {mobile && (
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
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            className={`section-presentation__liste-textes ${listeTextesMobile}`}
            style={styleDeTexte}
          >
            {donnees.texte.map((el, index) => (
              <p
                className={`section-presentation__paragr ${texteProjet} ${lectureGrandTexte}`}
                style={styleDeTexte}
                key={`${index}`}
                dangerouslySetInnerHTML={{
                  __html: formateTexteGras(el),
                }}
              ></p>
            ))}

            {donnees.lien &&
              donnees.texte.length <= 2 &&
              donnees.lien.map((objet, index) => (
                <Lien style={styleDeTexte} objet={objet} key={`${index}`} />
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
})
