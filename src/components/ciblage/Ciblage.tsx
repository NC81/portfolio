type CiblageProps = {
  verrouillage: boolean
  couleur: string
  petit?: string
}

export default function Ciblage({
  verrouillage,
  couleur,
  petit,
}: CiblageProps) {
  const style = {
    borderColor: `${couleur}`,
  }
  const classeVerrouillage = verrouillage ? "verrouillage" : ""
  const classePetit = petit ? "petit" : ""

  return (
    <>
      <div
        style={style}
        className={`angle angle--haut-gauche ${classeVerrouillage} ${classePetit}`}
      ></div>
      <div
        style={style}
        className={`angle angle--haut-droite ${classeVerrouillage} ${classePetit}`}
      ></div>
      <div
        style={style}
        className={`angle angle--bas-gauche ${classeVerrouillage} ${classePetit}`}
      ></div>
      <div
        style={style}
        className={`angle angle--bas-droite ${classeVerrouillage} ${classePetit}`}
      ></div>
    </>
  )
}
