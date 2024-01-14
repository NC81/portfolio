import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts"

export default function Competences() {
  const data = [
    {
      name: "HTML",
      score: 4,
      left: 1,
    },

    {
      name: "CSS",
      score: 4,
      left: 1,
    },
    {
      name: "SASS",
      score: 3,
      left: 2,
    },
    {
      name: "STYLED COMPONENTS",
      score: 3,
      left: 2,
    },
    {
      name: "JAVASCRIPT",
      score: 3,
      left: 2,
    },
    {
      name: "REACT",
      score: 3,
      left: 2,
    },
    {
      name: "REACT ROUTER",
      score: 4,
      left: 1,
    },
    {
      name: "JEST / REACT TESTING LIBRARY",
      score: 3,
      left: 2,
    },
    {
      name: "REDUX / REDUX TOOLKIT",
      score: 3,
      left: 2,
    },
    {
      name: "RECHARTS",
      score: 4,
      left: 1,
    },
  ]

  const axisStyle = {
    fill: "white",
    fontSize: "14px",
  }

  return (
    <div className="page-conteneur page-competences">
      <div className="page-contenu">
        <div className="page-titre">
          <h2>Mes Compétences</h2>
        </div>
        <div className="page-competences__corps">
          <div className="page-competences__metier">
            <h3>
              DÉVELOPPEUR D'APPLICATION
              <br />
              JAVASCRIPT / REACT
            </h3>
            <ul>
              <li>Analyser les besoins et préconiser une solution</li>
              <li>Concevoir une solution technique</li>
              <li>Développer une application en adéquation avec les besoins</li>
              <li>Élaborer des plans de tests</li>
              <li>
                Apporter un support technique en réalisant une documentation
                technique et fonctionnelle
              </li>
              <li>Mettre en œuvre une veille technologique</li>
            </ul>
          </div>
          <div className="image page-competences__graphique">
            <ul>
              {data.map((el, index) => (
                <li key={`el.name-${index}`}>{el.name}</li>
              ))}
            </ul>
            <ResponsiveContainer>
              <BarChart
                data={data}
                margin={{
                  top: -15,
                  bottom: -15,
                }}
                barSize={32}
                layout="vertical"
              >
                <XAxis hide type="number" domain={[0, 5]} />
                <YAxis
                  hide
                  type="category"
                  dataKey="name"
                  style={axisStyle}
                ></YAxis>
                <Bar
                  dataKey="score"
                  position="center"
                  fill="#919ba5"
                  background={{ fill: "#5c3539" }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
