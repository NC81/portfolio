export default function Presentation({ donnees, inverse, epique }) {
  const styleDuConteneur = {
    color: `${donnees.couleur.texte}`,
    background: `linear-gradient(180deg, ${donnees.couleur.fond1} 0%, ${donnees.couleur.fond2} 100%)`,
  }

  const styleDuTitreEtDuLien = {
    color: `${donnees.couleur.texte}`,
  }

  const styleDeBordureDimage = {
    border: `1px solid ${donnees.couleur.texte}`,
  }

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
          <img
            className="image"
            src={donnees.image[0].source}
            style={styleDeBordureDimage}
            alt=""
          />
          {epique && (
            <img
              className="image--secondaire"
              src={donnees.image[1].source}
              style={styleDeBordureDimage}
              alt=""
            />
          )}
          <div style={styleDeConteneur}>
            <p>{donnees.texte1}</p>
            {donnees.texte2 && <p>{donnees.texte2}</p>}
            {donnees.lien && (
              <a
                className="lien"
                style={styleDuTitreEtDuLien}
                href={donnees.lien.url}
              >
                {`> ${donnees.lien.texte}`}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
