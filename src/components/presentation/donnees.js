import reveur from "../../assets//images/reveur.jpg"
import travail from "../../assets//images/travail.jpg"
import futur from "../../assets//images/futur.jpg"
import reservia from "../../assets//images/reservia.png"
import ohMyFoodDesktop1 from "../../assets//images/ohmyfood-desktop-1.png"
import ohMyFoodDesktop2 from "../../assets//images/ohmyfood-desktop-2.png"
import ohMyFoodMobile1 from "../../assets/images/ohmyfood-mobile-1.png"
import ohMyFoodMobile2 from "../../assets/images/ohmyfood-mobile-2.png"
import ohMyFoodVideo1Webm from "../../assets/videos/ohmyfood-anim-chargement.webm"
import ohMyFoodVideo1Mp4 from "../../assets/videos/ohmyfood-anim-chargement.mp4"
import ohMyFoodVideo2Webm from "../../assets/videos/ohmyfood-anim-site.webm"
import ohMyFoodVideo2Mp4 from "../../assets/videos/ohmyfood-anim-site.mp4"
import maquetteDesktop11 from "../../assets/images/maquette-desktop-1-1.png"
import maquetteDesktop12 from "../../assets/images/maquette-desktop-1-2.png"
import maquetteDesktop21 from "../../assets/images/maquette-desktop-2-1.png"
import maquetteDesktop22 from "../../assets/images/maquette-desktop-2-2.png"
import maquetteDesktop23 from "../../assets/images/maquette-desktop-2-3.png"
import maquetteDesktop31 from "../../assets/images/maquette-desktop-3-1.png"
import maquetteDesktop32 from "../../assets/images/maquette-desktop-3-2.png"
import maquetteDesktop33 from "../../assets/images/maquette-desktop-3-3.png"
import maquetteDesktop41 from "../../assets/images/maquette-desktop-4-1.png"
import maquetteDesktop42 from "../../assets/images/maquette-desktop-4-2.png"
import maquetteDesktop51 from "../../assets/images/maquette-desktop-5-1.png"
import maquetteDesktop52 from "../../assets/images/maquette-desktop-5-2.png"
import maquetteMobile1 from "../../assets/images/maquette-mobile-1.png"
import maquetteMobile21 from "../../assets/images/maquette-mobile-2-1.png"
import maquetteMobile22 from "../../assets/images/maquette-mobile-2-2.png"
import maquetteMobile31 from "../../assets/images/maquette-mobile-3-1.png"
import maquetteMobile32 from "../../assets/images/maquette-mobile-3-2.png"
import maquetteMobile33 from "../../assets/images/maquette-mobile-3-3.png"
import maquetteMobile41 from "../../assets/images/maquette-mobile-4-1.png"
import maquetteMobile42 from "../../assets/images/maquette-mobile-4-2.png"
import maquetteMobile51 from "../../assets/images/maquette-mobile-5-1.png"
import maquetteMobile52 from "../../assets/images/maquette-mobile-5-2.png"
import sportSee from "../../assets//images/sportsee.png"
import hrnet1 from "../../assets//images/hrnet-1.png"
import hrnet2 from "../../assets//images/hrnet-2.png"
import temple from "../../assets/images/temple.jpg"
import relique from "../../assets/images/relique.jpg"
import gardien from "../../assets/images/gardien.jpg"
import puissance from "../../assets/images/puissance.jpg"
import arbre from "../../assets/images/arbre.jpg"
import oiseau from "../../assets/images/oiseau.jpg"
import nourrir from "../../assets/images/nourrir.jpg"
import vol from "../../assets/images/vol.jpg"

export const biographie = {
  titre: "Qui suis-je ?",
  texte: [
    "Après un long parcours qui m’a mené dans le travail de la terre, j’ai décidé de reprendre le fil de ma vie en m’engageant dans le développement informatique pour lequel j’ai toujours nourri de grands rêves.",
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
        "Un jardinier avec un panier rempli de plantes à la main observe un vaisseau spatial devant une immense planète en arrière-plan.",
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
      "Cette statue menaçante gardant l'entrée d'une salle sacrée me ressemblait étrangement. Mais où m'étais-je donc rendu ?",
      "À l'intérieur de la salle, tout ne faisait plus qu'un. Je regardais la relique comme elle semblait me regarder",
      "après l'avoir touché du doigt, j'avais gagné un nouveau regard sur moi-même. Depuis lors, je vois des parcelles de futur.",
    ],
    [
      "Un grand oiseau mystique poussait des cris stridents à proximité de l'arbre millénaire pour me dissuader de l'approcher.",
      "Après d'innombrables tentatives, j'avais fini par comprendre la pureté de l'énergie qui l'animait. Cela m'avait permis de l'apprivoiser",
      "mais avant de me quitter, celui-ci m'avait transmis son aptitude a survoler le monde. Depuis lors, je pense apercevoir ma destinée.",
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
        "Un homme observe un paysage extra-terrestre avec d'étranges montagnes à l'horizon et de grandes planètes dans le ciel",
      source: futur,
    },
  ],
  couleur: { texte: "#ffeaed", fond1: "#2b7357", fond2: "#243435" },
}

export const donneesProjet1 = {
  titre: "Site de location d’hébergement",
  texte: [
    "Ce premier projet, basé sur l’apprentissage de **HTML** et **CSS**, m'a permis de canaliser mon perfectionnisme naissant en consacrant mes efforts à la reproduction rigoureuse de la maquette initiale.",
    "Bien plus qu'une simple validation de compétences techniques, il a jeté les bases d’un état d'esprit axé sur la qualité et le dépassement de mes limites.",
  ],
  lien: [
    {
      texte: "github",
      url: "https://github.com/NC81/NicolasCandeli_2_21052021",
    },
  ],
  image: [
    {
      description:
        "Une capture d'écran d'une application de location de logement appelée Reservia.",
      source: [reservia],
    },
  ],
  couleur: { texte: "#ffffff", fond1: "#919ba5", fond2: "#919ba5" },
}

export const donneesProjet2 = {
  titre: "Dynamisation de pages d’un restaurant avec des animations CSS",
  texte: [
    "Ce projet a été l’occasion d’apprendre à structurer le code CSS avec **Sass** pour proposer une expérience visuelle immersive, aidée par une **animation** de chargement complexe.",
    "J’ai touché du doigt pour la première fois le plaisir de laisser mon empreinte créative sur un site web et d’en **assurer la cohérence graphique**.",
  ],
  lien: [
    {
      texte: "github",
      url: "https://github.com/NC81/NicolasCandeli_3_28062021",
    },
  ],
  image: [
    {
      description:
        "Une capture d'écran du restaurant Oh My Food montrant la page d'accueil.",
      source: [ohMyFoodDesktop1],
    },

    {
      description:
        "Une capture d'écran du restaurant Oh My Food montrant la page d'un restaurant avec différents menus.",
      source: [ohMyFoodDesktop2],
    },
  ],
  mobile: {
    image: [[ohMyFoodMobile1], [ohMyFoodMobile2]],
    video: [
      { webm: ohMyFoodVideo1Webm, mp4: ohMyFoodVideo1Mp4 },
      { webm: ohMyFoodVideo2Webm, mp4: ohMyFoodVideo2Mp4 },
    ],
  },
  couleur: { texte: "#ffffff", fond1: "#919ba5", fond2: "#5e4a7d" },
}

export const donneesProjet3 = {
  titre: "Définition des besoins pour une App de soutien scolaire",
  texte: [
    "Participer à la conception de cette application m'a permis de fusionner l'**analyse des besoins** à partir d'un cahier des charges avec la **création de maquettes** sur **Figma**.",
    "En contribuant à ce projet avec une **méthodologie agile**, j'ai pu apporter une vision complète, de la conception de **solutions techniques** à la matérialisation d'idées visuelles.",
  ],
  lien: [
    {
      texte: "zip",
      url: "https://drive.google.com/file/d/1-FePpbMXD0UY2JGjy9fZqIZL3aX9T5JO/view?usp=sharing",
    },
  ],
  image: [
    {
      description:
        "Une capture d'écran d'une application de soutien scolaire montrant la page d'accueil.",
      source: [maquetteDesktop11, maquetteDesktop12],
    },
    {
      description:
        "Une capture d'écran d'une application de soutien scolaire montrant le tableau de bord.",
      source: [maquetteDesktop21, maquetteDesktop22, maquetteDesktop23],
    },
    {
      description:
        "Une capture d'écran d'une application de soutien scolaire montrant le chat.",
      source: [maquetteDesktop31, maquetteDesktop32, maquetteDesktop33],
    },
    {
      description:
        "Une capture d'écran d'une application de soutien scolaire montrant la gestion de tâches.",
      source: [maquetteDesktop41, maquetteDesktop42],
    },
    {
      description:
        "Une capture d'écran d'une application de soutien scolaire montrant le calendrier",
      source: [maquetteDesktop51, maquetteDesktop52],
    },
  ],
  mobile: {
    image: [
      [maquetteMobile1],
      [maquetteMobile21, maquetteMobile22],
      [maquetteMobile31, maquetteMobile32, maquetteMobile33],
      [maquetteMobile41, maquetteMobile42],
      [maquetteMobile51, maquetteMobile52],
    ],
    video: [],
  },
  couleur: { texte: "#ffffff", fond1: "#032637", fond2: "#032637" },
}

export const donneesProjet4 = {
  titre: "Tableau de bord d'analytics avec Recharts",
  texte: [
    "Ce projet a été l'occasion de travailler sur la **qualité de données** issues d'une **API** pour créer un tableau de bord d'analytics dans une application **React**.",
    "L'affichage des performances physiques des utilisateurs m'a demandé de combiner la manipulation de données avec leur représentation visuelle par des diagrammes avancés développés avec **Recharts**.",
  ],
  lien: [
    {
      texte: "github",
      url: "https://github.com/NC81/NicolasCandeli_12_22042023",
    },
  ],
  image: [
    {
      description:
        "Une capture d'écran d'une application de suivi de performances sportives appelée SportSee montrant divers types de graphiques.",
      source: [sportSee],
    },
  ],
  couleur: { texte: "#ffffff", fond1: "#032637", fond2: "#2b7357" },
}

export const donneesProjet5 = {
  titre: "Migration d’une librairie jQuery vers React",
  texte: [
    "La dernière étape de ma formation a été la **conversion d'un tableau de données jQuery** avec toutes ses fonctionnalités en composant React, pour une application de gestion d’employés.",
    "J’ai su **optimiser** ses performances grâce à une gestion de la mise en cache des nouvelles entrées.",
    "Après avoir confirmé mes compétences en **Redux** et **React Testing Library**, j’ai saisi l’opportunité de refondre le design de l’application pour intégrer un style simple et élégant.",
    "Enfin, j'ai **déployé le package** final sur **npm** avec une **documentation** exhaustive, proposant une solution prête à l’emploi.",
  ],
  lien: [
    {
      texte: "github",
      url: "https://github.com/NC81/NicolasCandeli_14_08092023",
    },
    {
      texte: "npm",
      url: "https://www.npmjs.com/package/ocr-table-p14",
    },
  ],
  image: [
    {
      description:
        "Une capture d'écran d'une application de gestion d'employés appelée HRnet montrant un formulaire d'inscription.",
      source: [hrnet1],
    },
    {
      description:
        "Une capture d'écran d'une application de gestion d'employés appelée HRnet montrant une liste d'employés.",
      source: [hrnet2],
    },
  ],
  couleur: { texte: "#ffffff", fond1: "#2b7357", fond2: "#2b7357" },
}
