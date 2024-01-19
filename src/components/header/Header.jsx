import cerveau from "../../assets/images/cerveau.jpg"
import vaisseau from "../../assets/images/vaisseau.jpg"
import hero from "../../assets/images/hero.jpg"

export default function Header({ gereClic }) {
  return (
    <header className="page-conteneur header">
      <div className="page-contenu">
        <h1>
          2024
          <br />
          Portfolio
        </h1>
        <div className="page-titre">
          <h2>
            Nicolas Candeli, <br />
            Développeur Front-End
          </h2>
        </div>
        <div className="header-corps">
          <img
            className="header-corps__img--petit"
            src={cerveau}
            alt="Un cerveau rayonnant comme une étoile"
          />
          <img
            className="header-corps__img--moyen"
            src={vaisseau}
            alt="Un vaisseau dans un nuage de gas multicolore en face d'une étoile."
          />
          <div onClick={() => gereClic()} className="image header-corps__hero">
            <img
              src={hero}
              alt="Un pilote de vaisseau observe l'espace dans son cockpit à proximité d'une planète, en face d'une étoile."
            />
            <span className="header-corps__signe header-corps__signe--gauche">
              {">"}
            </span>
            <span className="header-corps__signe header-corps__signe--droite">
              {"<"}
            </span>
            <span className="header-corps__travail">VOIR MON TRAVAIL</span>
          </div>
        </div>
      </div>
    </header>
  )
}
