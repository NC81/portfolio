import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts"
import { motion } from "framer-motion"

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
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Mes Compétences
          </motion.h2>
        </div>
        <div className="page-competences__corps">
          <div className="page-competences__metier">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              DÉVELOPPEUR D'APPLICATION
              <br />
              JAVASCRIPT / REACT
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, translateX: -20 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <li>Analyser les besoins et préconiser une solution</li>
              <li>Concevoir une solution technique</li>
              <li>Développer une application en adéquation avec les besoins</li>
              <li>Élaborer des plans de tests</li>
              <li>
                Apporter un support technique en réalisant une documentation
                technique et fonctionnelle
              </li>
              <li>Mettre en œuvre une veille technologique</li>
            </motion.ul>
          </div>
          <motion.div
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, ease: "anticipate" }}
            className="image page-competences__graphique"
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}
