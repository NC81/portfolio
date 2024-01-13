import Intro from "./pages/intro/Intro"
import Presentation from "./pages/presentation/Presentation"
import Competences from "./pages/competences/Competences"

export default function App() {
  return (
    <div className="conteneur-global">
      <Intro />
      <Presentation />
      <Competences />
    </div>
  )
}
