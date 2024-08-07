import chevron from "../../assets/icons/icons8-chevron-bas-64.png"
import { type GereClicDefilementArg } from "../../App"

type BoutonDefilementHautProps = {
  gereClicDefilement: (type: GereClicDefilementArg) => void
}

export default function BoutonDefilementHaut({
  gereClicDefilement,
}: BoutonDefilementHautProps) {
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
