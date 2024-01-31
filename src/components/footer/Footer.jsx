import { useState } from "react"
import emetteur from "../../assets/images/emetteur.jpg"
import recepteur from "../../assets/images/recepteur.jpg"
import pressePapierVide2 from "../../assets/icones/iconmonstr-paste-clipboard-lined.svg"
import pressePapierPlein2 from "../../assets/icones/iconmonstr-paste-clipboard-filled.svg"
import { motion } from "framer-motion"

export default function Footer() {
  const [survol, etablitSurvol] = useState(false)
  const [confirmation, afficheConfirmation] = useState(false)

  function gereClic() {
    navigator.clipboard.writeText("nicolas.candeli@outlook.fr")
    afficheConfirmation(true)
    setTimeout(() => {
      afficheConfirmation(false)
    }, 3000)
  }

  return (
    <footer className="page-conteneur footer">
      <div className="page-contenu">
        <motion.h2
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="footer__titre"
        >
          Contactez-moi
        </motion.h2>
        <div className="footer__corps">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "backInOut" }}
            src={emetteur}
            alt=""
          />
          <motion.div
            style={{ originX: 0 }}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: "anticipate" }}
            className="footer__ligne"
          ></motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "backInOut" }}
            src={recepteur}
            alt=""
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <ul className="footer__liste">
            <li>
              <p>ADRESSE</p>
              <p>78000 Versailles</p>
            </li>
            <li>
              <p>TÉLÉPHONE</p>
              <p>06 18 30 06 08</p>
            </li>
            <li>
              <p>EMAIL</p>
              <p
                onMouseEnter={() => {
                  etablitSurvol(true)
                }}
                onMouseLeave={() => {
                  etablitSurvol(false)
                }}
                onClick={() => {
                  gereClic()
                }}
                className="footer__email"
              >
                {survol ? (
                  <img src={pressePapierPlein2} alt="" />
                ) : (
                  <img src={pressePapierVide2} alt="" />
                )}
                {!confirmation ? (
                  <span className="footer__email-texte">
                    nicolas.candeli@outlook.fr
                  </span>
                ) : (
                  <span className="footer__email-confirmation">
                    email copié!
                  </span>
                )}
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </footer>
  )
}
