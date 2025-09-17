import { Code, Monitor, Zap, Palette } from "lucide-react";

export default function Services({ services = null }) {
  const defaultServices = [
    {
      title: "Développement Frontend",
      description:
        "Création d’interfaces modernes et performantes avec React.js et Next.js.",
      icon: <Code className="w-10 h-10 text-blue-600" aria-hidden="true" />,
    },
    {
      title: "Sites Responsives",
      description: "Design mobile-first et adaptatif pour tous les appareils.",
      icon: <Monitor className="w-10 h-10 text-green-600" aria-hidden="true" />,
    },
    {
      title: "Performance & SEO",
      description: "Optimisation du code, vitesse et bonnes pratiques SEO.",
      icon: <Zap className="w-10 h-10 text-yellow-500" aria-hidden="true" />,
    },
    {
      title: "Design Minimaliste",
      description: "Maquettes modernes et esthétiques avec TailwindCSS.",
      icon: (
        <Palette className="w-10 h-10 text-purple-600" aria-hidden="true" />
      ),
    },
  ];

  const displayedServices = services || defaultServices;

  return (
    <section id="services" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Mes Services</h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-6">
        {displayedServices.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            role="region"
            aria-labelledby={`service-${index}-title`}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3
              id={`service-${index}-title`}
              className="text-xl font-semibold mb-2"
            >
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
