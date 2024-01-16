import { motion } from "framer-motion"
import emetteur from "../../assets/images/emetteur.jpg"
import recepteur from "../../assets/images/recepteur.jpg"

export default function Contact() {
  return (
    <div className="page-conteneur page-contact">
      <div className="page-contenu">
        <motion.h2
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="page-contact__titre"
        >
          Contactez-moi
        </motion.h2>
        <div className="page-contact__corps">
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
            transition={{ duration: 1, delay: 0.3, ease: "anticipate" }}
            className="page-contact__ligne"
          ></motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "backInOut" }}
            src={recepteur}
            alt=""
          />
        </div>
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <div>
            <p>ADRESSE</p>
            <p>75010 Paris</p>
          </div>
          <div>
            <p>TÉLÉPHONE</p>
            <p>00 00 00 00 00</p>
          </div>
          <div>
            <p>EMAIL</p>
            <p>www.domain.com</p>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}
