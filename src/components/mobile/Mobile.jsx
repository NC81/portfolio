import { useState, useEffect, useRef } from "react"
import android from "../../assets/images/android.png"

export default function Mobile({
  objet,
  indexImage,
  sousIndexImage,
  etablitSousIndexImage,
  placement,
}) {
  const videoref = useRef()
  const [sourceVideo, etablitSourceVideo] = useState(objet.video[0])
  const [typeDAffichage, etablitTypeDAffichage] = useState(
    objet.image ? "image" : "video"
  )

  useEffect(() => {
    videoref.current?.load()
  }, [sourceVideo])

  function gereClicTypeDAffichage() {
    if (typeDAffichage === "image") {
      return "video"
    } else {
      return "image"
    }
  }

  const imageSelection = typeDAffichage === "image" ? "selection" : ""
  const videoSelection = typeDAffichage === "video" ? "selection" : ""

  function definiClasseSource(source) {
    if (source.webm === sourceVideo.webm) {
      return "selection"
    } else {
      return ""
    }
  }

  function definiClasseSousIndex(sousIndex) {
    if (sousIndex === sousIndexImage) {
      return "selection"
    } else {
      return ""
    }
  }

  return (
    <div className={`mobile-conteneur mobile-conteneur--${placement}`}>
      <img className="mobile-android" src={android} alt="Un mobile android" />
      <div className="mobile-conteneur__barre-boutons">
        {objet.image && objet.video.length > 0 && (
          <>
            <button
              onClick={() => etablitTypeDAffichage(gereClicTypeDAffichage())}
              className={`bouton ${imageSelection}`}
            >
              IMAGE
            </button>
            <button
              onClick={() => etablitTypeDAffichage(gereClicTypeDAffichage())}
              className={`bouton ${videoSelection}`}
            >
              VIDÉO
            </button>
          </>
        )}
      </div>
      {objet.video && typeDAffichage === "video" && objet.video.length > 1 && (
        <ul>
          {objet.video.map((el, index) => (
            <li onClick={() => etablitSourceVideo(el)} key={`${index}`}>
              <button className={`bouton ${definiClasseSource(el)}`}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      )}
      {objet.image[indexImage].length > 1 && typeDAffichage === "image" && (
        <ul>
          {objet.image[indexImage].map((el, index) => (
            <li onClick={() => etablitSousIndexImage(index)} key={`${index}`}>
              <button className={`bouton ${definiClasseSousIndex(index)}`}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mobile-android__ecran">
        {typeDAffichage === "video" && (
          <video
            ref={videoref}
            className="mobile-android__video"
            controls
            autoPlay
          >
            <source src={sourceVideo.webm} type="video/webm" />
            <source src={sourceVideo.mp4} type="video/mp4" />
          </video>
        )}
        {typeDAffichage === "image" && (
          <img
            className="mobile-android__image"
            src={objet.image[indexImage][sousIndexImage]}
            alt=""
          />
        )}
      </div>
    </div>
  )
}
