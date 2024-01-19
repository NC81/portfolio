// import { useState } from "react"
import chevronBas from "../../assets/icones/icons8-chevron-bas-24.png"

export default function Carrousel({
  indexImage,
  etablitindexImage,
  etablitSousIndexImage,
  liste,
  style,
}) {
  function gereClic(direction) {
    etablitSousIndexImage(0)
    if (direction === "precedent") {
      etablitindexImage(indexImage - 1)
    } else {
      etablitindexImage(indexImage + 1)
    }
  }

  return (
    <>
      <div className="carrousel">
        <img
          className="page-presentation__image"
          src={liste[indexImage].source}
          style={style}
          alt=""
        />
      </div>
      <>
        {liste.length > 1 && (
          <div className="carrousel__barre-boutons">
            {indexImage > 0 ? (
              <button
                className="bouton bouton--precedent"
                onClick={() => gereClic("precedent")}
              >
                <img
                  className="icone--gauche"
                  src={chevronBas}
                  alt="Précédent"
                />
              </button>
            ) : (
              <button className="bouton bouton--faux"></button>
            )}
            <p>{`${indexImage + 1} / ${liste.length}`}</p>
            {indexImage + 1 < liste.length ? (
              <button
                className="bouton bouton--suivant"
                onClick={() => gereClic("suivant")}
              >
                <img className="icone--droite" src={chevronBas} alt="Suivant" />
              </button>
            ) : (
              <button className="bouton bouton--faux"></button>
            )}
          </div>
        )}
      </>
    </>
  )
}
