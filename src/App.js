import Intro from "./pages/intro/Intro"
import Presentation from "./pages/presentation/Presentation"
import Competences from "./pages/competences/Competences"
import { biographie } from "./pages/donnees"

export default function App() {
  return (
    <div className="conteneur-global">
      <Intro />
      <Presentation donnees={biographie} />
      <Competences />
    </div>
  )
}
