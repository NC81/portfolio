import reveur from "../assets/images/reveur.jpg"
import travail from "../assets/images/travail.jpg"
import temple from "../assets/images/temple.jpg"
import relique from "../assets/images/relique.jpg"
import gardien from "../assets/images/gardien.jpg"
import puissance from "../assets/images/puissance.jpg"
import arbre from "../assets/images/arbre.jpg"
import oiseau from "../assets/images/oiseau.jpg"
import nourrir from "../assets/images/nourrir.jpg"
import vol from "../assets/images/vol.jpg"
import futur from "../assets//images/futur.jpg"

export const biographie = {
  titre: "Qui suis-je ?",
  texte: [
    "Après un long parcours qui m’a mené dans le travail de la terre, j’ai décidé à 40 ans de reprendre le fil de ma vie en m’engageant dans le développement informatique pour lequel j’ai toujours nourri de grands rêves.",
    "À force de persévérance, je suis aujourd’hui à l’aune de récolter les fruits de mon travail. Certains outils restent à aiguiser, mais d’ores et déjà, les idées de projets germent dans mon esprit. Toujours tourné vers le ciel.",
  ],
  lien: [
    {
      texte: "mon cv",
      url: "https://drive.google.com/file/d/195qGy9iQF--YwkrVw1jtEIGIaBUqJjij/view?usp=sharing",
    },
  ],
  image: [
    {
      description:
        "Un jardinier avec un panier à la main rempli de plantes contemple un vaisseau spatial volant devant une immense planète avec des anneaux en arrière-plan.",
      source: reveur,
    },
  ],
  couleur: { texte: "#ffe6ea", fond1: "#5c3539", fond2: "#5c3539" },
}

export const philosophie = {
  titre: "Ma Philosophie",
  texte: [
    "Il n'y a pas de gloire à atteindre un objectif sans y consacrer d'efforts.",
    "Cela tombe bien : le bonheur réside dans l’effort et non seulement dans la réalisation.",
  ],
  image: [
    {
      description:
        "Un mécanicien répare les pièces d'un vaisseau spatial placé derrière lui.",
      source: travail,
    },
  ],
  couleur: { texte: "#ffffff", fond1: "#bb7c4e", fond2: "#919ba5" },
}

export const donneesAventure = {
  titre: "Mes Aventures",
  texte: [
    [
      "Une statue menaçante, qui gardait l'entrée d'une salle mystérieuse abritant un objet radieux, me fixait d'un regard foudroyant qui m'était familier.",
      "À l'intérieur de la salle d'une hauteur insondable, tout ne semblait faire plus qu'un. Plus j'observais la relique, plus sa lumière m'éblouissait",
      "comprenant qu'il s'agissait d'un puissant miroir antique, j'avais décrypté mon âme avec une lucidité absolue. Depuis lors, j'entrevois des parcelles de futur.",
    ],
    [
      "Un grand oiseau mystique poussait des cris stridents au pied d'un arbre millénaire où poussaient d'étranges fruits luminescents.",
      "La cueillette fut acrobatique, mais j'avais fini par partager avec lui cette ressource ancestrale qui noyait nos sens dans une euphorie commune",
      "cette harmonie rendait possible la fusion de nos existences issues de la même énergie cosmique. Réalisant que j'avais toujours eu des ailes, désormais, j'aperçois ma destinée.",
    ],
  ],
  image: [
    [
      {
        description:
          "Sur une planète rose, un immense temple noir s'érige au loin.",
        source: temple,
      },
      {
        description:
          "Dans un temple obscure, une statue aux yeux émettant une couleur violette garde l'entrée d'une salle.",
        source: gardien,
      },
      {
        description:
          "Une relique lumineuse de forme ronde émet une couleur violette.",
        source: relique,
      },
      {
        description:
          "Un homme barbu à proximité d'écrans d'ordinateur émet une puissante lumière rose par ses yeux.",
        source: puissance,
      },
    ],
    [
      {
        description:
          "Sur une planète rose, un immense arbre blanc aux feuilles roses s'érige au loin.",
        source: arbre,
      },
      {
        description:
          "Au pied d'un grand arbre blanc aux feuilles roses, la silhouette d'un homme assis observe la silhouette d'un grand oiseau en plein vol.",
        source: oiseau,
      },
      {
        description:
          "Au pied d'un grand arbre blanc aux feuilles roses, un homme nourrit un grand oiseau blanc aux ailes déployées.",
        source: nourrir,
      },
      {
        description:
          "À partir d'un grand arbre blanc aux feuilles roses, un homme barbu avec des ailes aux extrémités roses prend son envol.",
        source: vol,
      },
    ],
  ],
  couleur: { texte: "#ffffff", fond1: "#5e4a7d", fond2: "#032637" },
}

export const conclusion = {
  titre: "Mon État d'esprit",
  texte: [
    "Travailler sous contraintes exige d’être créatif. C’est la raison pour laquelle j’ai soif d’aventures professionnelles.",
  ],
  image: [
    {
      description:
        "Un homme équipé d'un sac à dos contemple un paysage extra-terrestre de couleur verte composé d'étranges montagnes abruptes à l'horizon et de 3 planètes dans le ciel",
      source: futur,
    },
  ],
  couleur: { texte: "#ffeaed", fond1: "#2b7357", fond2: "#243435" },
}
