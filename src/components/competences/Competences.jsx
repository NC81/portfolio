import { useState, forwardRef } from "react"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts"
import TitreSection from "../titre-section/TitreSection"
import { motion } from "framer-motion"

export default forwardRef(function Competences({ donnees }, ref) {
  // Liste regroupant les 3 types de compétences sélectionnables
  const typesDeCompetences = [
    {
      nom: "Front-End",
      donnees: donnees.frontend,
    },
    {
      nom: "Back-End",
      donnees: donnees.backend,
    },
    {
      nom: "Outils",
      donnees: donnees.outils,
    },
  ]

  // Type de compétences sélectionné affichant le graphique
  const [typeActuel, changeTypeActuel] = useState(typesDeCompetences[0])

  // Fonction de sélection au clic du type de compétences
  function selectionneTypeActuel(string) {
    const nouveauType = typesDeCompetences.find((el) => el.nom === string)
    changeTypeActuel(nouveauType)
  }

  const styleDynamiqueDuConteneur = {
    height: `${54 * typeActuel.donnees.length}px`,
  }

  const styleDeLAxeY = {
    fill: "white",
    fontSize: "14px",
  }

  return (
    <section ref={ref} className="section-competences">
      <div className="section-contenu">
        <TitreSection titre={"Mes Compétences"} />
        <div className="section-competences__corps">
          <div className="section-competences__metier">
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
              initial={{ opacity: 0, translateX: -10 }}
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
            initial={{ opacity: 0, translateX: 10 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="image section-competences__graphique"
            style={styleDynamiqueDuConteneur}
          >
            <ul className="liste-types">
              {typesDeCompetences.map(({ nom }, index) => (
                <li
                  className={`type ${
                    nom === typeActuel.nom ? "selection" : ""
                  }`}
                  onClick={() => selectionneTypeActuel(nom)}
                  key={`type-${index}`}
                >
                  {nom}
                </li>
              ))}
            </ul>
            <ul className="liste-noms">
              {typeActuel.donnees.map(({ name }, index) => (
                <li key={`name-${index}`}>{name}</li>
              ))}
            </ul>
            <ResponsiveContainer>
              <BarChart
                data={typeActuel.donnees}
                margin={{
                  top: 0,
                  bottom: 0,
                }}
                barSize={30}
                layout="vertical"
              >
                <XAxis hide type="number" domain={[0, 5]} />
                <YAxis
                  hide
                  type="category"
                  dataKey="name"
                  style={styleDeLAxeY}
                ></YAxis>
                <Bar
                  dataKey="score"
                  position="center"
                  fill="#919ba5"
                  background={{ fill: "#5c3539" }}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  )
})
