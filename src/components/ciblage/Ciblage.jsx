export default function Ciblage({ verrouillage, couleur, petit }) {
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
