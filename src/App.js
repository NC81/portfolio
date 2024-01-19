import { useRef } from "react"
import Header from "./components/header/Header"
import Presentation from "./components/presentation/Presentation"
import Competences from "./components/competences/Competences"
import Footer from "./components/footer/Footer"
import { biographie } from "./components/presentation/donnees"
import { philosophie } from "./components/presentation/donnees"
import { combat } from "./components/presentation/donnees"
import { conclusion } from "./components/presentation/donnees"
import { projet1 } from "./components/presentation/donnees"
import { projet2 } from "./components/presentation/donnees"
import { projet3 } from "./components/presentation/donnees"
import { projet4 } from "./components/presentation/donnees"
import { projet5 } from "./components/presentation/donnees"

export default function App() {
  const ref = useRef(null)
  const gereClic = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Header gereClic={gereClic} />
      <main>
        <Presentation histoire={true} donnees={biographie} />
        <Competences />
        <Presentation histoire={true} donnees={philosophie} inverse={true} />
        <Presentation ref={ref} donnees={projet1} />
        <Presentation
          donnees={projet2}
          inverse={true}
          mobile={{ placement: "gauche", media: "image" }}
        />
        <Presentation
          histoire={true}
          donnees={combat}
          inverse={true}
          epique={true}
        />
        <Presentation
          donnees={projet3}
          mobile={{ placement: "droite", media: "image" }}
        />
        <Presentation donnees={projet4} inverse={true} />
        <Presentation donnees={projet5} />
        <Presentation histoire={true} donnees={conclusion} />
      </main>
      <Footer />
    </>
  )
}
