export default function Testimonials({ testimonials = null }) {
  const defaultTestimonials = [
    {
      name: "Michael Scott",
      role: "Manager regional - Dunder Mifflin",
      feedback:
        "Si j’avais un pistolet avec deux balles et que j’étais dans une pièce avec Hitler, Ben Laden et Toby, je tirerais deux fois sur Toby.",
    },
    {
      name: "Dwight Schrute",
      role: "Assistant regional du manager - Dunder Mifflin",
      feedback:
        "Je n’aurais jamais pensé dire ça un jour, mais je pense que j’ai mangé trop de moelle osseuse.",
    },
    {
      name: "Creed Bratton",
      role: "Directeur de la qualité - Dunder Mifflin",
      feedback:
        "J’ai été impliqué dans un certain nombre de cultes, à la fois en tant que leader et adepte. C’est plus drôle d’être un adepte mais tu te fais plus d’argent comme leader.",
    },
    {
      name: "Kevin Malone",
      role: "Comptable - Dunder Mifflin",
      feedback:
        "Des mini cupcakes ? Donc une version miniature d’un cupcake ? Qui est déjà une version miniature d’un gâteau ? Vous allez vous arrêter où ?",
    },
    {
      name: "Michael Scott",
      role: "Manager regional - Dunder Mifflin",
      feedback: "That's what she said.",
    },
  ];

  const displayedTestimonials = testimonials || defaultTestimonials;

  return (
    <section id="testimonials" className="py-20 bg-slate-800 text-center">
      <h2 className="text-gray-200 text-3xl font-bold mb-12">Citations</h2>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 bg-slate-8000">
        {displayedTestimonials.map((t, index) => (
          <div
            key={index}
            className="bg-slate-300 p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
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
