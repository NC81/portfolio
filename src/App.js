import Intro from "./pages/intro/Intro"
import Presentation from "./pages/presentation/Presentation"
import Competences from "./pages/competences/Competences"
import { biographie } from "./pages/donnees"
import { philosophie1 } from "./pages/donnees"
import { philosophie3 } from "./pages/donnees"

export default function App() {
  return (
    <div className="conteneur-global">
      <Intro />
      <Presentation donnees={biographie} />
      <Presentation donnees={philosophie1} inverse={true} />
      <Presentation donnees={philosophie3} />
      <Competences />
    </div>
  )
}
