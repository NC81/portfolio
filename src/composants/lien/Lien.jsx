export default function Lien({ objet, style }) {
  return (
    <>
      <a
        className="lien-conteneur"
        style={style}
        href={objet.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="lien-contenu">
          <span className="lien-contenu__signe lien-contenu__signe--entree">{`>`}</span>
          <span className="lien-contenu__texte">{objet.texte}</span>
          <span className="lien-contenu__signe lien-contenu__signe--sortie">{`<`}</span>
        </span>
      </a>
    </>
  )
}
