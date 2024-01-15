import Lien from "../../composants/lien/Lien"

export default function Presentation({ donnees, inverse, projet, epique }) {
  function formateTexteGras(texte) {
    return texte.replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>")
  }

  function gereStyleDuTexteProjet() {
    if (projet && donnees.texte.length <= 2) {
      return { fontSize: "1.35rem" }
    } else if (projet && donnees.texte.length >= 3) {
      return { fontSize: "1.35rem", margin: "10px" }
    }
  }

  const styleDuConteneur = {
    color: `${donnees.couleur.texte}`,
    background: `linear-gradient(180deg, ${donnees.couleur.fond1} 0%, ${donnees.couleur.fond2} 100%)`,
  }

  const styleDuTitreEtDuLien = {
    color: `${donnees.couleur.texte}`,
  }

  const styleDeBordureDimage = !projet
    ? {
        border: `1px solid ${donnees.couleur.texte}`,
      }
    : undefined

  const styleDeLigne = {
    flex: "1",
    height: "1px",
    marginTop: "18px",
    background: `linear-gradient(90deg, ${donnees.couleur.texte}, transparent)`,
  }

  const styleDeFlex = inverse && { flexDirection: "row-reverse" }
  const styleDeConteneur = epique && { width: "25%", height: "fit-content" }

  return (
    <div className="page-conteneur page-presentation" style={styleDuConteneur}>
      <div className="page-contenu">
        <div className="page-titre">
          <h2 style={styleDuTitreEtDuLien}>{donnees.titre}</h2>
          <div style={styleDeLigne}></div>
        </div>
        <div className="page-presentation__corps" style={styleDeFlex}>
          {donnees.texte.length > 2 ? (
            <div className="page-presentation__demo">
              <img
                className="image"
                src={donnees.image[0].source}
                style={styleDeBordureDimage}
                alt=""
              />
              <div className="page-presentation__liens">
                {donnees.lien.map((objet, index) => (
                  <Lien
                    style={styleDuTitreEtDuLien}
                    objet={objet}
                    key={`${index}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <img
              className="image"
              src={donnees.image[0].source}
              style={styleDeBordureDimage}
              alt=""
            />
          )}

          {epique && (
            <img
              className="image--secondaire"
              src={donnees.image[1].source}
              style={styleDeBordureDimage}
              alt=""
            />
          )}
          <div className="page-presentation__textes" style={styleDeConteneur}>
            {donnees.texte.map((el, index) => (
              <p
                style={gereStyleDuTexteProjet()}
                key={`${index}`}
                dangerouslySetInnerHTML={{
                  __html: formateTexteGras(el),
                }}
              ></p>
            ))}

            {donnees.lien &&
              donnees.texte.length <= 2 &&
              donnees.lien.map((objet, index) => (
                <Lien
                  style={styleDuTitreEtDuLien}
                  objet={objet}
                  key={`${index}`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
