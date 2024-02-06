import chevron from "../../assets/icons/icons8-chevron-bas-64.png"

export default function BoutonDefilementHaut({ gereClicDefilement }) {
  return (
    <button
      onClick={() => gereClicDefilement("haut")}
      className="bouton-defilement-haut"
    >
      <img src={chevron} alt="Flèche haut" />
      <img src={chevron} alt="Flèche haut" />
      <img src={chevron} alt="Flèche haut" />
    </button>
  )
}
