"use client";
import Image from "next/image";

export default function Hero({
  name = "Fabien Costa",
  title = "Développeur frontend spécialisé en React.js et Next.js - Création de sites web modernes et performants",
  buttonText = "Découvrir mes projets",
  buttonTargetId = "projects",
  imageSrc = "/images/profile-pic-Fabien.png",
  imageAlt = "Portrait de Fabien Costa",
  bgImage = "/images/basit.webp",
}) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* 🖼 Image de fond */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🎨 Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-indigo-900/50 to-purple-900/70" />

      {/* Contenu */}
      <div className="relative z-10 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{`Salut, je suis ${name}`}</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">{title}</p>

        <button
          onClick={() =>
            document
              .getElementById(buttonTargetId)
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="
            px-6 py-3
            bg-blue-600
            text-white
            font-bold
            rounded-lg
            shadow-md
            hover:bg-blue-500
            hover:scale-105
            transition transform
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
          "
          aria-label={buttonText}
        >
          {buttonText}
        </button>

        {/* Photo de profil
        {imageSrc && (
          <div className="mt-12">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={200}
              height={200}
              className="rounded-full shadow-lg mx-auto border-4 border-white"
            />
          </div>
        )} */}
      </div>
    </section>
  );
}
