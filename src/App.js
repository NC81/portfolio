import Intro from "./pages/intro/Intro"
import Presentation from "./pages/presentation/Presentation"
import Competences from "./pages/competences/Competences"
import { biographie } from "./pages/donnees"
import { philosophie } from "./pages/donnees"
import { combat } from "./pages/donnees"
import { conclusion } from "./pages/donnees"

export default function App() {
  return (
    <div className="conteneur-global">
      <Intro />
      <Presentation donnees={biographie} />
      <Competences />
      <Presentation donnees={philosophie} inverse={true} />
      <Presentation donnees={combat} inverse={true} epique={true} />
      <Presentation donnees={conclusion} />
    </div>
  )
}
