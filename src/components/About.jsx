import Image from "next/image";

export default function About({
  name = "Fabien",
  bio = "Développeur front-end spécialisé en React & Next.js, j’accompagne entreprises et indépendants dans la création de sites modernes, rapides et adaptés à leurs besoins.",
  objectives = "Vous souhaitez un site web moderne, rapide et adapté à vos besoins : qu’il s’agisse de présenter vos services, mettre en valeur vos projets ou attirer de nouveaux clients. Vous recherchez une solution simple, efficace et professionnelle.",
  image = "/images/profile-pic-Fabien.png",
}) {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src={image}
            alt={`Photo de ${name}`}
            width={250}
            height={250}
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Je m’appelle <span className="font-semibold">{name}</span>, {bio}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">{objectives}</p>
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
