import { useState } from "react"
import iconeMobile from "../../assets/icons/icons8-smartphone-24.png"

type CarrouselProps = {
  indexImage: number
  etablitindexImage: (index: number) => void
  etablitSousIndexImageMobile: (index: number) => void
  liste: { alt: string; src: string[] }[]
  mobileCote: "gauche" | "droite" | "super-droite" | undefined
  mobileVisible: boolean
  etablitMobileVisible: (bool: boolean) => void
}

export default function Carrousel({
  indexImage,
  etablitindexImage,
  etablitSousIndexImageMobile,
  liste,
  mobileCote,
  mobileVisible,
  etablitMobileVisible,
}: CarrouselProps) {
  const [sousIndexImageDesktop, etablitSousIndexImageDesktop] =
    useState<number>(0)

  function gereChangementDePage(index: number) {
    etablitSousIndexImageMobile(0)
    etablitSousIndexImageDesktop(0)
    etablitindexImage(index)
  }

  function definitClasseSelonIndex(index: number): string {
    if (index === indexImage) {
      return "selection"
    } else {
      return ""
    }
  }

  function definitClasseSelonSousIndex(index: number): string {
    if (index === sousIndexImageDesktop) {
      return "selection"
    } else {
      return ""
    }
  }

  const classeMobileVisible = mobileVisible ? "mobile-visible" : ""
  const texteAlternatifIconeMobile = mobileVisible
    ? "Cache mobile"
    : "Affiche mobile"

  return (
    <div className="carrousel">
      <div className="carrousel__cont-img barre-defilement">
        <img
          className="carrousel__img"
          src={liste[indexImage].src[sousIndexImageDesktop]}
          alt={liste[indexImage].alt}
        />
      </div>
      <div className="carrousel__barre-boutons">
        {liste[indexImage].src.length > 1 && (
          <ul className="carrousel__liste-vues">
            {liste[indexImage].src.map((el, index) => (
              <li
                onClick={() => etablitSousIndexImageDesktop(index)}
                className={`bouton bouton--vue-desktop ${definitClasseSelonSousIndex(
                  index
                )}`}
                key={`${index}`}
              ></li>
            ))}
          </ul>
        )}
        {liste.length > 1 && (
          <ul className="carrousel__liste-pages">
            {liste.map((el, index) => (
              <li
                onClick={() => gereChangementDePage(index)}
                className={`bouton bouton--page ${definitClasseSelonIndex(
                  index
                )}`}
                key={`${index}`}
              ></li>
            ))}
          </ul>
        )}
        {mobileCote && (
          <button
            className={`bouton--affichage-mobile ${classeMobileVisible}`}
            onClick={() => etablitMobileVisible(!mobileVisible)}
          >
            <img src={iconeMobile} alt={texteAlternatifIconeMobile} />
          </button>
        )}
      </div>
    </div>
  )
}
