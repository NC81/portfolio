import { useRef } from "react"
import Header from "./pages/header/Header"
import Presentation from "./pages/presentation/Presentation"
import Competences from "./pages/competences/Competences"
import Footer from "./pages/footer/Footer"
import { biographie } from "./pages/donnees"
import { philosophie } from "./pages/donnees"
import { combat } from "./pages/donnees"
import { conclusion } from "./pages/donnees"
import { projet1 } from "./pages/donnees"
import { projet2 } from "./pages/donnees"
import { projet3 } from "./pages/donnees"
import { projet4 } from "./pages/donnees"
import { projet5 } from "./pages/donnees"

export default function App() {
  const ref = useRef(null)
  const gereClic = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="conteneur-global">
      <Header gereClic={gereClic} />
      <main>
        <Presentation donnees={biographie} />
        <Competences />
        <Presentation donnees={philosophie} inverse={true} />
        <Presentation ref={ref} donnees={projet1} projet={true} />
        <Presentation
          donnees={projet2}
          projet={true}
          inverse={true}
          mobile={{ placement: "gauche", media: "video" }}
        />
        <Presentation donnees={combat} inverse={true} epique={true} />
        <Presentation
          donnees={projet3}
          projet={true}
          mobile={{ placement: "droite", media: "image" }}
        />
        <Presentation donnees={projet4} projet={true} inverse={true} />
        <Presentation donnees={projet5} projet={true} />
        <Presentation donnees={conclusion} />
      </main>
      <Footer />
    </div>
  )
}
