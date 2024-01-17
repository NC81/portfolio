import { motion } from "framer-motion"

export default function Lien({ objet, style }) {
  return (
    <>
      <motion.a
        initial={{ opacity: 0, translateY: -40 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "anticipate" }}
        className="lien-conteneur"
        style={style}
        href={objet.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="lien-contenu">
          <span className="lien-contenu__signe lien-contenu__signe--gauche">{`>`}</span>
          <span className="lien-contenu__texte">{objet.texte}</span>
          <span className="lien-contenu__signe lien-contenu__signe--droite">{`<`}</span>
        </span>
      </motion.a>
    </>
  )
}
