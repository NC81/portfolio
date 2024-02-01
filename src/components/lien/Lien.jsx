import { motion } from "framer-motion"
import { useState } from "react"
import Ciblage from "../ciblage/Ciblage"

export default function Lien({ objet, style }) {
  const [verrouillageLien, etablitVerrouillageLien] = useState(false)

  return (
    <>
      <motion.a
        onMouseEnter={() => {
          etablitVerrouillageLien(true)
        }}
        onMouseLeave={() => {
          etablitVerrouillageLien(false)
        }}
        initial={{ opacity: 0, translateY: -40 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "anticipate" }}
        className="lien"
        style={style}
        href={objet.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        {objet.texte}
        <Ciblage verrouillage={verrouillageLien} couleur="white" petit={true} />
      </motion.a>
    </>
  )
}
