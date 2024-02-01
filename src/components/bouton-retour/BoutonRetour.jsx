import chevron from "../../assets/icons/icons8-chevron-bas-64.png"

export default function BoutonRetour({ gereClicDefilement }) {
  return (
    <button
      onClick={() => gereClicDefilement("haut")}
      className="bouton-retour"
    >
      <img src={chevron} alt="Flèche haut" />
      <img src={chevron} alt="Flèche haut" />
      <img src={chevron} alt="Flèche haut" />
    </button>
  )
}
