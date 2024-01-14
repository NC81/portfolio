import cerveau from "../../assets/images/cerveau.jpg"
import vaisseau from "../../assets/images/vaisseau.jpg"
import hero from "../../assets/images/hero.jpg"

export default function Intro() {
  return (
    <div className="page-conteneur page-intro">
      <div className="page-contenu">
        <h1>2024 Portfolio</h1>
        <div className="page-titre">
          <h2>Nom de page</h2>
        </div>
        <div className="page-intro-corps">
          <img className="page-intro-corps__img--petit" src={cerveau} alt="" />
          <img className="page-intro-corps__img--moyen" src={vaisseau} alt="" />
          <div className="image page-intro-corps__hero">
            <img src={hero} alt="" />
            <span>VOIR MON TRAVAIL</span>
          </div>
        </div>
      </div>
    </div>
  )
}
