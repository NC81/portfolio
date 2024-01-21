import { useState } from "react"

export default function Carrousel({
  indexImage,
  etablitindexImage,
  etablitSousIndexImageMobile,
  liste,
  style,
}) {
  const [sousIndexImageDesktop, etablitSousIndexImageDesktop] = useState(0)

  function gereChangementDePage(index) {
    etablitSousIndexImageMobile(0)
    etablitSousIndexImageDesktop(0)
    etablitindexImage(index)

    // if (direction === "precedent") {
    //   etablitindexImage(indexImage - 1)
    // } else {
    //   etablitindexImage(indexImage + 1)
    // }
  }

  function definiClasseSelonIndex(index) {
    if (index === indexImage) {
      return "selection"
    } else {
      return ""
    }
  }

  function definiClasseSelonSousIndex(index) {
    if (index === sousIndexImageDesktop) {
      return "selection"
    } else {
      return ""
    }
  }

  // function definiClasseSousIndex(index) {
  //   if (index === sousIndexImageDesktop) {
  //     return "selection"
  //   } else {
  //     return ""
  //   }
  // }

  return (
    <div className="carrousel">
      <div className="carrousel__cont-img barre-defilement">
        <img
          className="carrousel__img"
          src={liste[indexImage].source[sousIndexImageDesktop]}
          style={style}
          alt={liste[indexImage].description}
        />
      </div>
      <>
        {liste[indexImage].source.length > 1 && (
          <ul className="carrousel__liste-vues">
            {liste[indexImage].source.map((el, index) => (
              <li
                onClick={() => etablitSousIndexImageDesktop(index)}
                className={`bouton bouton--vue-desktop ${definiClasseSelonSousIndex(
                  index
                )}`}
                key={`${index}`}
              ></li>
            ))}
          </ul>
        )}
        {/* {liste[indexImage].source.length > 1 && (
          <ul className="carrousel__liste-vues">
            {liste[indexImage].source.map((el, index) => (
              <li key={`${index}`}>
                <button
                  onClick={() => etablitSousIndexImageDesktop(index)}
                  className={`bouton bouton--vue ${definiClasseSousIndex(
                    index
                  )}`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        )} */}
        {liste.length > 1 && (
          <ul className="carrousel__liste-pages">
            {liste.map((el, index) => (
              <li
                onClick={() => gereChangementDePage(index)}
                className={`bouton bouton--page ${definiClasseSelonIndex(
                  index
                )}`}
                key={`${index}`}
              ></li>
            ))}
          </ul>
        )}
        {/* {liste.length > 1 && (
          <div className="carrousel__barre-boutons">
            {indexImage > 0 ? (
              <button
                className="bouton bouton--page"
                onClick={() => gereClic("precedent")}
              >
                -
              </button>
            ) : (
              <button className="bouton bouton--faux"></button>
            )}

            <p>PAGE{`  ${indexImage + 1}/${liste.length}`}</p>

            {indexImage + 1 < liste.length ? (
              <button
                className="bouton bouton--page"
                onClick={() => gereClic("suivant")}
              >
                +
              </button>
            ) : (
              <button className="bouton bouton--faux"></button>
            )}
          </div>
        )} */}
      </>
    </div>
  )
}
