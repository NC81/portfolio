import { forwardRef } from "react"
import TitreSection from "../titre-section/TitreSection"
import Lien from "../lien/Lien"
import { motion } from "framer-motion"
import { type DonneesPersonnelles } from "../../data/projets"

type PersonnelProps = {
  donnees: DonneesPersonnelles
  inverse?: boolean
}

export default forwardRef<HTMLElement, PersonnelProps>(function Personnel(
  { donnees, inverse },
  ref
) {
  const styleTexte = {
    color: `${donnees.couleur.texte}`,
  }
  const styleConteneurDePage = {
    color: `${donnees.couleur.texte}`,
    background: `linear-gradient(180deg, ${donnees.couleur.fond1} 0%, ${donnees.couleur.fond2} 100%)`,
  }
  const styleBordureDimage = {
    border: `1px solid ${donnees.couleur.texte}`,
  }
  const styleFlex: React.CSSProperties = inverse
    ? { flexDirection: "row-reverse" }
    : { flexDirection: "row" }

  return (
    <section
      className="section-personnel"
      style={styleConteneurDePage}
      ref={ref}
    >
      <div className="section-contenu">
        <TitreSection titre={donnees.titre} couleur={donnees.couleur.texte} />
        <div className="section-personnel__corps" style={styleFlex}>
          <motion.img
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="section-personnel__visuel"
            style={styleBordureDimage}
            {...donnees.image}
          />
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`section-personnel__liste-textes`}
            style={styleTexte}
          >
            {donnees.texte.map((el, index) => (
              <p
                className={`section-personnel__paragr`}
                style={styleTexte}
                key={`${index}`}
              >
                {el}
              </p>
            ))}
            {donnees.lien &&
              donnees.lien.map((objet, index) => (
                <Lien style={styleTexte} objet={objet} key={`${index}`} />
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
})
