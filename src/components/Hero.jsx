// "use client";
// import Image from "next/image";

// export default function Hero({
//   name = "Michael Scott",
//   title = "Directeur régional chez Dunder Mifflin Inc. ",
//   buttonText = "Découvrir mes projets",
//   buttonTargetId = "projects",
//   imageSrc = "/images/scott-id.webp",
//   imageAlt = "Portrait de Michael Scott",
//   bgImage = "/images/dunder-mifflin.webp",
// }) {
//   return (
//     // <section
//     //   id="home"
//     //   className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
//     // >
//     //   {/* 🖼 Image de fond */}
//     //   <Image
//     //     src={bgImage}
//     //     alt="Background"
//     //     fill
//     //     priority
//     //     className="absolute inset-0 w-full h-full object-cover"
//     //   />

//     //   {/* 🎨 Overlay gradient */}
//     //   {/* <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-indigo-900/50 to-purple-900/70" /> */}

//     //   {/* Contenu */}
//     //   <div className="relative z-10 text-black">
//     //     <h1 className="text-5xl md:text-6xl font-bold mb-6">{`Je suis ${name}`}</h1>
//     //     <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">{title}</p>
//     //     <button
//     //       onClick={() =>
//     //         document
//     //           .getElementById(buttonTargetId)
//     //           ?.scrollIntoView({ behavior: "smooth" })
//     //       }
//     //       className="
//     //         px-6 py-3
//     //         bg-blue-600
//     //         text-white
//     //         font-bold
//     //         rounded-lg
//     //         shadow-md
//     //         hover:bg-blue-500
//     //         hover:scale-105
//     //         transition transform
//     //         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
//     //       "
//     //       aria-label={buttonText}
//     //     >
//     //       {buttonText}
//     //     </button>

//     //     {imageSrc && (
//     //       <div className="mt-12">
//     //         <Image
//     //           src={imageSrc}
//     //           alt={imageAlt}
//     //           width={200}
//     //           height={200}
//     //           className="rounded-full shadow-lg mx-auto border-4 border-white"
//     //         />
//     //       </div>
//     //     )}
//     //   </div>
//     // </section>
//     <section
//       id="home"
//       className="relative min-h-screen flex justify-start items-center px-6 overflow-hidden"
//     >
//       {/* 🖼 Image de fond */}
//       <Image
//         src={bgImage}
//         alt="Background"
//         fill
//         priority
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Contenu centré à l'intérieur, mais div à gauche */}
//       <div className="relative z-10 text-center flex flex-col items-center">
//         <h1 className="text-5xl md:text-6xl font-bold mb-6">{`Je suis ${name}`}</h1>
//         <p className="text-lg md:text-xl mb-6 max-w-2xl">{title}</p>
//         <button
//           onClick={() =>
//             document
//               .getElementById(buttonTargetId)
//               ?.scrollIntoView({ behavior: "smooth" })
//           }
//           className="
//         px-6 py-3
//         bg-blue-600
//         text-white
//         font-bold
//         rounded-lg
//         shadow-md
//         hover:bg-blue-500
//         hover:scale-105
//         transition transform
//         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
//       "
//           aria-label={buttonText}
//         >
//           {buttonText}
//         </button>

//         {imageSrc && (
//           <div className="mt-12">
//             <Image
//               src={imageSrc}
//               alt={imageAlt}
//               width={200}
//               height={200}
//               className="rounded-full shadow-lg border-4 border-white"
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";

export default function Hero({
  name = "Michael Scott",
  title = "Directeur régional chez Dunder Mifflin Inc.",
  buttonText = "Découvrir mes projets",
  buttonTargetId = "projects",
  imageSrc = "/images/scott-id.webp",
  imageAlt = "Portrait de Michael Scott",
  bgImageDesktop = "/images/dunder-mifflin.webp",
  bgImageMobile = "/images/mobile.webp",
}) {
  return (
    <section id="home" className="relative min-h-screen flex overflow-hidden">
      {/* 🖼 Images de fond */}
      <div className="hidden lg:block absolute inset-0 w-full h-full">
        <Image
          src={bgImageDesktop}
          alt="Background desktop"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="block lg:hidden absolute inset-0 w-full h-full">
        <Image
          src={bgImageMobile}
          alt="Background mobile"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Conteneur de la div à gauche */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full lg:w-1/2 px-6">
        {/* Contenu centré à l'intérieur de la div */}
        <div className="flex flex-col items-center justify-center text-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{`Je suis ${name}`}</h1>
          <p className="text-lg md:text-xl mb-6">{title}</p>
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

          {imageSrc && (
            <div className="mt-12">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={200}
                height={200}
                className="rounded-full shadow-lg border-4 border-white"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
