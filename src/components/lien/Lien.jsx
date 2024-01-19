import { motion } from "framer-motion"

export default function Lien({ objet, style }) {
  return (
    <>
      <motion.a
        initial={{ opacity: 0, translateY: -40 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "anticipate" }}
        className="lien"
        style={style}
        href={objet.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="lien__signe lien__signe--gauche">{`>`}</span>
        <span className="lien__texte">{objet.texte}</span>
        <span className="lien__signe lien__signe--droite">{`<`}</span>
      </motion.a>
    </>
  )
}
