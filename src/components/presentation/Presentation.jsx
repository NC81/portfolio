import { forwardRef } from "react"
import Lien from "../../components/lien/Lien"
import Mobile from "../../components/mobile/Mobile"
import { motion } from "framer-motion"

export default forwardRef(function Presentation(
  { donnees, inverse, projet, epique, mobile },
  ref
) {
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

  const styleDeBordureDimage = !projet
    ? {
        border: `1px solid ${donnees.couleur.texte}`,
      }
    : undefined

  const styleDeLigne = {
    background: `linear-gradient(90deg, ${donnees.couleur.texte}, transparent)`,
  }

  const styleDeFlex = inverse && { flexDirection: "row-reverse" }

  const visuelMobile =
    mobile && mobile.placement === "gauche"
      ? "page-presentation__visuel--mobile--gauche"
      : mobile && mobile.placement === "droite"
      ? "page-presentation__visuel--mobile--droite"
      : ""
  const visuelProjet = projet ? "page-presentation__visuel--projet" : ""

  const texteProjet = projet ? "page-presentation__texte--projet" : ""
  const texteProjetGrand =
    projet && donnees.texte.length >= 3
      ? "page-presentation__texte--grand-projet"
      : ""

  const listeTextesEpique = epique
    ? "page-presentation__liste-textes--epique"
    : ""

  const listeTextesMobile = mobile
    ? "page-presentation__liste-textes--mobile"
    : ""

  return (
    <section
      className="page-conteneur page-presentation"
      style={styleDuConteneurDePage}
      ref={ref}
    >
      <div className="page-contenu">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="page-titre"
        >
          <h2 style={styleDeTexte}>{donnees.titre}</h2>
          <div className="page-titre__ligne" style={styleDeLigne}></div>
        </motion.div>
        <div className="page-presentation__corps" style={styleDeFlex}>
          {donnees.texte.length > 2 ? (
            <motion.div
              initial={{ opacity: 0, translateX: -20 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8 }}
              className="page-presentation__demo"
            >
              <img
                src={donnees.image[0].source}
                style={styleDeBordureDimage}
                alt=""
              />
              {donnees.lien.map((objet, index) => (
                <Lien style={styleDeTexte} objet={objet} key={`${index}`} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`page-presentation__visuel ${visuelMobile} ${visuelProjet}`}
            >
              {mobile && (
                <Mobile
                  media={mobile.media}
                  source={donnees.mobile[0].source}
                  placement={mobile.placement}
                />
              )}
              <img
                className="page-presentation__image "
                src={donnees.image[0].source}
                style={styleDeBordureDimage}
                alt=""
              />
            </motion.div>
          )}

          {epique && (
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className="page-presentation__image--secondaire"
              src={donnees.image[1].source}
              style={styleDeBordureDimage}
              alt=""
            ></motion.img>
          )}
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            className={`page-presentation__liste-textes ${listeTextesMobile} ${listeTextesEpique}`}
            style={styleDeTexte}
          >
            {donnees.texte.map((el, index) => (
              <p
                className={`page-presentation__texte ${texteProjet} ${texteProjetGrand}`}
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
