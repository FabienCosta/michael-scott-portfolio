// import Image from "next/image";

// export default function About({
//   name = "Michael Gary Scott",
//   bio = "le directeur régional le plus apprécié de Dunder Mifflin, avec une passion pour la gestion d'équipe et la création d'un environnement de travail positif. Fort de plusieurs années d'expérience dans la vente et la gestion, je suis dédié à aider les entreprises à atteindre leurs objectifs. Je crois fermement en l'importance de la communication, de l'humour et du travail d'équipe pour réussir dans n'importe quel domaine. ",
//   objectives = "Mon objectif est de continuer à développer mes compétences en leadership et en gestion, tout en contribuant au succès de mon équipe et de mon entreprise. Je suis toujours à la recherche de nouvelles opportunités pour apprendre et grandir, et je suis enthousiaste à l'idée de relever de nouveaux défis dans le futur. En dehors du travail,j'aime, entre autres, le hockey, les blagues de bureau et les réunions d'équipe improvisées.",
//   image = "/images/scott-young.webp",
// }) {
//   return (
//     <section id="about" className="bg-emerald-600 py-20 ">
//       <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
//         <div className="flex justify-center">
//           <Image
//             src={image}
//             alt={`Photo de ${name}`}
//             width={650}
//             height={650}
//             className="rounded-2xl shadow-lg"
//           />
//         </div>

//         <div className="text-center md:text-left">
//           <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
//           <p className="text-gray-700 leading-relaxed mb-4">
//             Je m’appelle <span className="font-semibold">{name}</span>, {bio}
//           </p>
//           <p className="text-gray-700 leading-relaxed mb-6">{objectives}</p>
//           <a
//             href="#services"
//             className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow hover:bg-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
//             aria-label="Découvrir mes services"
//           >
//             Découvrir mes services
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function About({
  name = "Michael Gary Scott",
  bio = "le directeur régional le plus apprécié de Dunder Mifflin, avec une passion pour la gestion d'équipe et la création d'un environnement de travail positif. Fort de plusieurs années d'expérience dans la vente et la gestion, je suis dédié à aider les entreprises à atteindre leurs objectifs. Je crois fermement en l'importance de la communication, de l'humour et du travail d'équipe pour réussir dans n'importe quel domaine. ",
  objectives = "Mon objectif est de continuer à développer mes compétences en leadership et en gestion, tout en contribuant au succès de mon équipe et de mon entreprise. Je suis toujours à la recherche de nouvelles opportunités pour apprendre et grandir, et je suis enthousiaste à l'idée de relever de nouveaux défis dans le futur. En dehors du travail, j'aime, entre autres, le hockey, les blagues de bureau et les réunions d'équipe improvisées.",
  image = "/images/scott-young.webp",
}) {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={image}
            alt={`Photo de ${name}`}
            width={650}
            height={650}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Texte */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-xl">
            Je m’appelle <span className="font-semibold">{name}</span>, {bio}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-xl">
            {objectives}
          </p>
          <a
            href="#services"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow hover:bg-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            aria-label="Découvrir mes services"
          >
            Découvrir mes services
          </a>
        </div>
      </div>
    </section>
  );
}
