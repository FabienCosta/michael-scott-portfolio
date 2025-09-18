import React from "react";

const projects = [
  {
    id: 1,
    title: "Mon univers personnel",
    description:
      "une video où je partage mes pensées et réflexions sur divers sujets.",
    image: "/images/Prisonmike.webp",
    link: "https://www.youtube.com/watch?v=OK08Je0X9to",
  },
  {
    id: 2,
    title: "Parkour",
    description:
      "Une vidéo où je montre mes compétences en parkour et mes aventures urbaines.",
    image: "/images/scott-quote.webp",
    link: "https://www.youtube.com/watch?v=0Kvw2BPKjz0",
  },
  {
    id: 3,
    title: "Threat Level Midnight",
    description:
      "mon chef-d'œuvre cinématographique, un films d'action épique rempli de suspense et d'aventures.",
    image: "/images/threat_level_midnight.webp",
    link: "https://www.youtube.com/watch?v=7iPyz6Yqwl4",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Mon univers</h2>
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
              <h3 className="text-xl text-white font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Voir la vidéo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
