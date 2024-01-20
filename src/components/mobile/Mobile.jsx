import { useState, useEffect, useRef } from "react"
import android from "../../assets/images/android.png"

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

  function definiClasseSource(source) {
    if (source.webm === sourceVideo.webm) {
      return "selection"
    } else {
      return ""
    }
  }

  function definiClasseSousIndex(index) {
    if (index === sousIndexImageMobile) {
      return "selection"
    } else {
      return ""
    }
  }

  return (
    <div className={`mobile mobile--${placement}`}>
      <img className="mobile__boitier" src={android} alt="Un mobile android" />
      <div className="mobile__barre-boutons">
        {objet.image.length > 0 && objet.video.length > 0 && (
          <>
            <button
              onClick={() => etablitTypeDeMedia(gereClicTypeDeMedia())}
              className={`bouton bouton--mobile ${imageSelection}`}
            >
              IMAGE
            </button>
            <button
              onClick={() => etablitTypeDeMedia(gereClicTypeDeMedia())}
              className={`bouton bouton--mobile ${videoSelection}`}
            >
              VIDÉO
            </button>
          </>
        )}
      </div>
      {objet.video && typeDeMedia === "video" && objet.video.length > 1 && (
        <ul>
          {objet.video.map((el, index) => (
            <li onClick={() => etablitSourceVideo(el)} key={`${index}`}>
              <button
                className={`bouton bouton--vue ${definiClasseSource(el)}`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      )}
      {objet.image[indexImage].length > 1 && typeDeMedia === "image" && (
        <ul>
          {objet.image[indexImage].map((el, index) => (
            <li
              onClick={() => etablitSousIndexImageMobile(index)}
              key={`${index}`}
            >
              <button
                className={`bouton bouton--vue ${definiClasseSousIndex(index)}`}
              >
                {index + 1}
              </button>
            </li>
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
