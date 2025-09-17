// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Hero({
//   name = "Michael Scott",
//   title = "Directeur régional chez Dunder Mifflin Inc.",
//   buttonText = "Découvrir mes projets",
//   buttonTargetId = "projects",
//   imageSrc = "/images/scott-id.webp",
//   imageAlt = "Portrait de Michael Scott",
//   bgImageDesktop = "/images/scrantonn.webp",
//   bgImageMobile = "/images/mobile.webp",
// }) {
//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex overflow-hidden">
//       {/* Images de fond */}
//       <div className="hidden lg:block absolute inset-0 w-full h-full">
//         <Image
//           src={bgImageDesktop}
//           alt="Background desktop"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>
//       <div className="block lg:hidden absolute inset-0 w-full h-full">
//         <Image
//           src={bgImageMobile}
//           alt="Background mobile"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>

//       {/* Conteneur du contenu centré */}
//       <motion.div
//         className="relative z-10 flex flex-col items-center justify-center w-full px-6 text-center"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h1
//           className="text-5xl md:text-6xl font-bold mb-6"
//           variants={itemVariants}
//         >
//           {`Je suis ${name}`}
//         </motion.h1>

//         <motion.p className="text-lg md:text-xl mb-6" variants={itemVariants}>
//           {title}
//         </motion.p>

//         <motion.div variants={itemVariants}>
//           <button
//             onClick={() =>
//               document
//                 .getElementById(buttonTargetId)
//                 ?.scrollIntoView({ behavior: "smooth" })
//             }
//             className="
//               px-6 py-3
//               bg-blue-600
//               text-white
//               font-bold
//               rounded-lg
//               shadow-md
//               hover:bg-blue-500
//               hover:scale-105
//               transition transform
//               focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
//             "
//             aria-label={buttonText}
//           >
//             {buttonText}
//           </button>
//         </motion.div>

//         {imageSrc && (
//           <motion.div className="mt-12" variants={itemVariants}>
//             <Image
//               src={imageSrc}
//               alt={imageAlt}
//               width={200}
//               height={200}
//               className="rounded-full shadow-lg border-4 border-white"
//             />
//           </motion.div>
//         )}
//       </motion.div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({
  name = "Michael Scott",
  title = "Directeur régional chez Dunder Mifflin Inc.",
  buttonText = "Découvrir mes projets",
  buttonTargetId = "projects",
  imageSrc = "/images/scott-id.webp",
  imageAlt = "Portrait de Michael Scott",
  bgImage = "/images/scrantonn.webp", // 👈 une seule image utilisée partout
}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex overflow-hidden">
      {/* 🖼 Une seule image de fond */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Conteneur du contenu centré */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          variants={itemVariants}
        >
          {`Je suis ${name}`}
        </motion.h1>

        <motion.p className="text-lg md:text-xl mb-6" variants={itemVariants}>
          {title}
        </motion.p>

        <motion.div variants={itemVariants}>
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
        </motion.div>

        {imageSrc && (
          <motion.div className="mt-12" variants={itemVariants}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={200}
              height={200}
              className="rounded-full shadow-lg border-4 border-white"
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
