import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description:
      "Mon portfolio personnel développé avec React et SASS, présentant mes projets, compétences et expériences en développement frontend.",
    image: "/images/portfolio.pic.webp",
    link: "https://portfolio-fabien-costa.vercel.app/",
  },
  {
    id: 2,
    title: "Axoria Blog",
    description:
      "Un blog tech où partager des astuces, tutoriels et projets autour du développement web.",
    image: "/images/axoria.pic.webp",
    link: "https://blog-axoria-fcosta.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "Kasa",
  //   description:
  //     "Plateforme pour échanger votre appartement pendant les vacances et profiter de séjours uniques à travers le monde.",
  //   image: "/assets/projects/dashboard.webp",
  //   link: "https://fabiencosta.github.io/",
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Mes Projets</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-neutral-900 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
