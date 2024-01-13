import reveur from "../../assets/reveur.jpg"

export default function Presentation() {
  return (
    <div className="page-conteneur page-presentation">
      <div className="page-contenu">
        <div className="page-titre">
          <h2>Ma présentation</h2>
        </div>
        <div className="page-presentation__corps">
          <img className="image" src={reveur} alt="" />
          <div>
            <p>
              Après un long parcours qui m’a mené dans l’horticulture, j’ai
              décidé de reprendre le fil de ma vie en m’engageant dans le
              développement informatique pour lequel j’ai toujours nourri de
              grands rêves.
            </p>
            <p>
              À force de persévérance, je suis aujourd’hui à l’aune de récolter
              les fruits de mon travail. Certains outils restent à aiguiser,
              mais d’ores et déjà, les idées de projets germent dans mon esprit.
              Toujours tourné vers le ciel.
            </p>
            <p className="lien">{"> mon cv"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
