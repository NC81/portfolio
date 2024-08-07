import { useState, useEffect, useRef } from "react"
import android from "../../assets/images/android.png"
import iconeVideo from "../../assets/icons/icons8-film-30.png"
import iconeImage from "../../assets/icons/icons8-photo-24.png"

type MobileProps = {
  indexImage: number
  sousIndexImageMobile: number
  etablitSousIndexImageMobile: (index: number) => void
  donneesMobile: {
    image: string[][]
    video: {
      webm: string
      mp4: string
    }[]
  }
  donneesDesktop: { description: string; source: string[] }[]
  mobile: { placement: "gauche" | "droite" | "super-droite" }
}

export default function Mobile({
  donneesMobile,
  donneesDesktop,
  indexImage,
  sousIndexImageMobile,
  etablitSousIndexImageMobile,
  mobile,
}: MobileProps) {
  const videoref = useRef<HTMLVideoElement>(null)
  const [sourceVideo, etablitSourceVideo] = useState<{
    webm: string
    mp4: string
  }>(donneesMobile.video[0])
  const [typeDeMedia, etablitTypeDeMedia] = useState(
    donneesMobile.image ? "image" : "video"
  )

  useEffect(() => {
    videoref.current?.load()
  }, [sourceVideo])

  function gereClicTypeDeMedia() {
    if (typeDeMedia === "image") {
      return "video"
    } else {
      return "image"
    }
  }

  const imageSelection = typeDeMedia === "image" ? "selection" : ""
  const videoSelection = typeDeMedia === "video" ? "selection" : ""

  function definitClasseSelonSousIndex(index: number): string {
    if (index === sousIndexImageMobile) {
      return "selection"
    } else {
      return ""
    }
  }

  function definitClasseSelonSourceVideo(source: {
    webm: string
    mp4: string
  }): string {
    if (source === sourceVideo) {
      return "selection"
    } else {
      return ""
    }
  }

  function convertitDescriptionDesktopEnMobile() {
    const descriptionImageDesktop = donneesDesktop[indexImage].description
    const descriptionImageAvecMinuscule =
      descriptionImageDesktop[0].toLowerCase() +
      descriptionImageDesktop.slice(1)
    const ajoutTexteMobile = "En format mobile, "
    return ajoutTexteMobile + descriptionImageAvecMinuscule
  }

  return (
    <div className={`mobile mobile--${mobile.placement}`}>
      <img className="mobile__boitier" src={android} alt="Un mobile android" />
      <div className="mobile__liste-medias">
        {donneesMobile.image.length > 0 && donneesMobile.video.length > 0 && (
          <>
            <button
              onClick={() => etablitTypeDeMedia(gereClicTypeDeMedia())}
              className={`bouton bouton--media ${imageSelection}`}
            >
              <img src={iconeImage} alt="Captures d'écran" />
            </button>
            <button
              onClick={() => etablitTypeDeMedia(gereClicTypeDeMedia())}
              className={`bouton bouton--media ${videoSelection}`}
            >
              <img src={iconeVideo} alt="Vidéos" />
            </button>
          </>
        )}
      </div>
      {donneesMobile.video &&
        typeDeMedia === "video" &&
        donneesMobile.video.length > 1 && (
          <ul className="mobile__liste-vues">
            {donneesMobile.video.map((el, index) => (
              <li
                onClick={() => etablitSourceVideo(el)}
                className={`bouton bouton--vue-mobile ${definitClasseSelonSourceVideo(
                  el
                )}`}
                key={`${index}`}
              ></li>
            ))}
          </ul>
        )}
      {donneesMobile.image[indexImage].length > 1 &&
        typeDeMedia === "image" && (
          <ul className="mobile__liste-vues">
            {donneesMobile.image[indexImage].map((el, index) => (
              <li
                onClick={() => etablitSousIndexImageMobile(index)}
                className={`bouton bouton--vue-mobile ${definitClasseSelonSousIndex(
                  index
                )}`}
                key={`${index}`}
              ></li>
            ))}
          </ul>
        )}

      <div className="mobile__ecran barre-defilement">
        {typeDeMedia === "video" && (
          <video ref={videoref} className="mobile__video" controls autoPlay>
            <source src={sourceVideo.webm} type="video/webm" />
            <source src={sourceVideo.mp4} type="video/mp4" />
          </video>
        )}
        {typeDeMedia === "image" && (
          <img
            className="mobile__img"
            src={donneesMobile.image[indexImage][sousIndexImageMobile]}
            alt={convertitDescriptionDesktopEnMobile()}
          />
        )}
      </div>
    </div>
  )
}
