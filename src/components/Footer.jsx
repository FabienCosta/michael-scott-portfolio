// "use client";
// import { Mail } from "lucide-react";
// import { Linkedin, Github } from "lucide-react";

// export default function Footer({
//   contactEmail = "fabiencosta.dev@gmail.com",
//   phone = "+33 7 77 83 47 59",
//   socialLinks = [
//     {
//       icon: <Linkedin className="w-5 h-5" />,
//       href: "https://www.linkedin.com/in/fabien-costa-/",
//       label: "LinkedIn",
//     },
//     {
//       icon: <Github className="w-5 h-5" />,
//       href: "https://github.com/FabienCosta",
//       label: "GitHub",
//     },
//   ],
//   copyrightText = "&copy; 2025 Portfolio. Tous droits réservés.",
// }) {
//   return (
//     <footer className="bg-gray-100 py-10">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
//         {/* Ligne contact + réseaux sociaux */}
//         <div className="flex flex-col sm:flex-row items-center gap-6">
//           <div className="flex items-center gap-4 text-gray-700">
//             <a
//               href={`mailto:${contactEmail}`}
//               className="hover:text-blue-500 flex items-center gap-1"
//             >
//               <Mail className="w-4 h-4" /> {contactEmail}
//             </a>
//             <a href={`tel:${phone}`} className="hover:text-blue-500">
//               {phone}
//             </a>
//           </div>

//           <div className="flex gap-4 text-gray-700">
//             {socialLinks.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-500"
//                 aria-label={social.label}
//               >
//                 {social.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Copyright en dessous */}
//         <p
//           className="text-gray-700 text-sm"
//           dangerouslySetInnerHTML={{ __html: copyrightText }}
//         />
//       </div>
//     </footer>
//   );
// }

"use client";
import { Mail } from "lucide-react";
import { Linkedin, Github } from "lucide-react";

export default function Footer({
  contactEmail = "fabiencosta.dev@gmail.com",
  phone = "+33 7 77 83 47 59",
  socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/fabien-costa-/",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/FabienCosta",
      label: "GitHub",
    },
  ],
  copyrightText = "&copy; 2025 Portfolio. Tous droits réservés.",
}) {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
        {/* Ligne contact + réseaux sociaux */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-700">
            <a
              href={`mailto:${contactEmail}`}
              className="hover:text-blue-500 flex items-center gap-1"
            >
              <Mail className="w-4 h-4" /> {contactEmail}
            </a>
            <a
              href={`tel:${phone}`}
              className="hover:text-blue-500 whitespace-nowrap"
            >
              {phone}
            </a>
          </div>

          <div className="flex gap-4 text-gray-700">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright en dessous */}
        <p
          className="text-gray-700 text-sm"
          dangerouslySetInnerHTML={{ __html: copyrightText }}
        />
      </div>
    </footer>
  );
}
