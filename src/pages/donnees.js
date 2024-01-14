import reveur from "../assets/images/reveur.jpg"
import travail from "../assets/images/travail.jpg"
import aventure from "../assets/images/aventure.jpg"
import general from "../assets/images/general.jpg"
import ennemi from "../assets/images/ennemi.jpg"

export const biographie = {
  titre: "Qui suis-je ?",
  texte1:
    "Après un long parcours qui m’a mené dans l’horticulture, j’ai décidé de reprendre le fil de ma vie en m’engageant dans le développement informatique pour lequel j’ai toujours nourri de grands rêves.",
  texte2:
    "À force de persévérance, je suis aujourd’hui à l’aune de récolter les fruits de mon travail. Certains outils restent à aiguiser, mais d’ores et déjà, les idées de projets germent dans mon esprit. Toujours tourné vers le ciel.",
  lien: { texte: "mon cv", source: "" },
  image: [{ description: "", source: reveur }],
  couleur: { texte: "#ffe6ea", fond1: "#5c3539", fond2: "#5c3539" },
}

export const philosophie = {
  titre: "Ma Philosophie",
  texte1:
    "Il n'y a pas de gloire à atteindre un objectif sans y consacrer d'efforts.",
  texte2:
    "Cela tombe bien : le bonheur réside dans l’effort et non seulement dans la réalisation.",
  image: [{ description: "", source: travail }],
  couleur: { texte: "#ffffff", fond1: "#bb7c4e", fond2: "#919ba5" },
}

export const combat = {
  titre: "Ma Philosophie",
  texte1:
    "Les obstacles sont ces choses effrayantes que vous voyez lorsque vous détournez les yeux de vos objectifs",
  image: [
    { description: "", source: general },
    { description: "", source: ennemi },
  ],
  couleur: { texte: "#ffffff", fond1: "#5e4a7d", fond2: "#032637" },
}

export const conclusion = {
  titre: "Mon État d'esprit",
  texte1:
    "Travailler sous contraintes exige d’être créatif. C’est la raison pour laquelle j’ai soif d’aventures professionnelles.",
  image: [{ description: "", source: aventure }],
  couleur: { texte: "#ffeaed", fond1: "#2b7357", fond2: "#243435" },
}
