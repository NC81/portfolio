import cerveau from "../../assets/images/cerveau.jpg"
import vaisseau from "../../assets/images/vaisseau.jpg"
import hero from "../../assets/images/hero.jpg"

export default function Header({ gereClic }) {
  return (
    <header className="page-conteneur page-intro">
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
        <div className="page-intro-corps">
          <img className="page-intro-corps__img--petit" src={cerveau} alt="" />
          <img className="page-intro-corps__img--moyen" src={vaisseau} alt="" />
          <div
            onClick={() => gereClic()}
            className="image page-intro-corps__hero"
          >
            <img src={hero} alt="" />
            <span className="page-intro-corps__signe page-intro-corps__signe--gauche">
              {">"}
            </span>
            <span className="page-intro-corps__signe page-intro-corps__signe--droite">
              {"<"}
            </span>
            <span className="page-intro-corps__travail">VOIR MON TRAVAIL</span>
          </div>
        </div>
      </div>
    </header>
  )
}
