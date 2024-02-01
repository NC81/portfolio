import { useState, useEffect, useRef } from "react"
import android from "../../assets/images/android.png"
import iconeVideo from "../../assets/icons/icons8-film-30.png"
import iconeImage from "../../assets/icons/icons8-photo-24.png"

export default function Mobile({
  objet,
  indexImage,
  sousIndexImageMobile,
  etablitSousIndexImageMobile,
  placement,
}) {
  const videoref = useRef()
  const [sourceVideo, etablitSourceVideo] = useState(objet.video[0])
  const [typeDeMedia, etablitTypeDeMedia] = useState(
    objet.image ? "image" : "video"
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

  function definitClasseSelonSousIndex(index) {
    if (index === sousIndexImageMobile) {
      return "selection"
    } else {
      return ""
    }
  }

  function definitClasseSelonSourceVideo(source) {
    if (source === sourceVideo) {
      return "selection"
    } else {
      return ""
    }
  }

  return (
    <div className={`mobile mobile--${placement}`}>
      <img className="mobile__boitier" src={android} alt="Un mobile android" />
      <div className="mobile__liste-medias">
        {objet.image.length > 0 && objet.video.length > 0 && (
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
      {objet.video && typeDeMedia === "video" && objet.video.length > 1 && (
        <ul className="mobile__liste-vues">
          {objet.video.map((el, index) => (
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
      {objet.image[indexImage].length > 1 && typeDeMedia === "image" && (
        <ul className="mobile__liste-vues">
          {objet.image[indexImage].map((el, index) => (
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
            src={objet.image[indexImage][sousIndexImageMobile]}
            alt=""
          />
        )}
      </div>
    </div>
  )
}
