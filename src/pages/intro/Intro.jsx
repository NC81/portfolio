import cerveau from "../../assets/cerveau.jpg"
import vaisseau from "../../assets/vaisseau.jpg"
import hero from "../../assets/hero.jpg"

export default function Intro() {
  return (
    <div className="page-conteneur page-intro">
      <div className="page-contenu">
        <h1>2024 Portfolio</h1>
        <div className="page-titre">
          <h2>Nom de page</h2>
        </div>
        <div className="galerie-intro">
          <img className="galerie-intro__img--petit" src={cerveau} alt="" />
          <img className="galerie-intro__img--moyen" src={vaisseau} alt="" />
          <div className="galerie-intro__hero">
            <img src={hero} alt="" />
            <span>VOIR MON TRAVAIL</span>
          </div>
        </div>
      </div>
    </div>
  )
}
