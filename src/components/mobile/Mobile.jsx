import android from "../../assets/images/android.png"

export default function Mobile({ media, source, placement }) {
  return (
    <div className={`mobile-conteneur mobile-conteneur--${placement}`}>
      <img className="mobile-android" src={android} alt="" />
      <div className="mobile-android__ecran">
        {media === "video" && (
          <video className="mobile-android__video" controls>
            <source src={source} type="video/webm" />
          </video>
        )}
        {media === "image" && (
          <img className="mobile-android__image" src={source} alt="" />
        )}
      </div>
    </div>
  )
}
