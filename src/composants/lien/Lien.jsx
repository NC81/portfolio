export default function Lien({ objet, style }) {
  return (
    <a
      className="lien"
      style={style}
      href={objet.url}
      target="_blank"
      rel="noreferrer noopener"
    >
      {`> ${objet.texte}`}
    </a>
  )
}
