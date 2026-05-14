import clsx from "clsx"

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
  return (
    <>
      <div
        style={style}
        className={clsx("angle angle--haut-gauche", verrouillage && "verrouillage", petit && "petit")}
      ></div>
      <div
        style={style}
        className={clsx("angle angle--haut-droite", verrouillage && "verrouillage", petit && "petit")}
      ></div>
      <div
        style={style}
        className={clsx("angle angle--bas-gauche", verrouillage && "verrouillage", petit && "petit")}
      ></div>
      <div
        style={style}
        className={clsx("angle angle--bas-droite", verrouillage && "verrouillage", petit && "petit")}
      ></div>
    </>
  )
}
