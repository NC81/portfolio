import { motion } from "framer-motion"

export default function TitreSection({ titre, couleur, header }) {
  const styleTexteHeader = couleur
    ? {
        color: `${couleur}`,
      }
    : { color: "white" }
  const styleLigneHeader = couleur
    ? { background: `linear-gradient(90deg, ${couleur}, transparent)` }
    : { background: `linear-gradient(90deg, white, transparent)` }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="section-titre"
    >
      {header ? (
        <h2 style={styleTexteHeader}>
          Nicolas Candeli, <br />
          Développeur Front-End
        </h2>
      ) : (
        <h2 style={styleTexteHeader}>{titre}</h2>
      )}
      <div className="section-titre__ligne" style={styleLigneHeader}></div>
    </motion.div>
  )
}
