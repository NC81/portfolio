import emetteur from "../../assets/images/emetteur.jpg"
import recepteur from "../../assets/images/recepteur.jpg"

export default function Contact() {
  return (
    <div className="page-conteneur page-contact">
      <div className="page-contenu">
        <h2 className="page-contact__titre">Contactez-moi</h2>
        <div className="page-contact__corps">
          <img src={emetteur} alt=""></img>{" "}
          <div className="page-contact__ligne"></div>
          <img src={recepteur} alt=""></img>
        </div>
        <footer>
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
        </footer>
      </div>
    </div>
  )
}
