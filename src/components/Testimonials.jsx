export default function Testimonials({ testimonials = null }) {
  const defaultTestimonials = [
    {
      name: "Sophie Martin",
      role: "Responsable Marketing",
      feedback:
        "Fabien a parfaitement compris nos besoins et a développé une solution web moderne, intuitive et adaptée à notre audience. Sa réactivité et son professionnalisme ont été exemplaires.",
    },
    {
      name: "Julien Lefèvre",
      role: "CEO - StartUpTech",
      feedback:
        "Travailler avec Fabien a été un vrai plaisir. Il a su apporter des idées innovantes, anticiper les problèmes et livrer un site performant et esthétique dans les délais impartis.",
    },
    {
      name: "Claire Dubois",
      role: "Directrice Communication",
      feedback:
        "Fabien est à l’écoute et force de proposition. Son travail sur notre projet web a été précis et efficace, avec une attention particulière aux détails et à l’expérience utilisateur.",
    },
  ];

  const displayedTestimonials = testimonials || defaultTestimonials;

  return (
    <section id="testimonials" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Témoignages</h2>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        {displayedTestimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            role="region"
            aria-labelledby={`testimonial-${index}-name`}
          >
            <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
            <h3
              id={`testimonial-${index}-name`}
              className="text-lg font-semibold"
            >
              {t.name}
            </h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
