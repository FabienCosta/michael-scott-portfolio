import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Poppins, Inter } from "next/font/google";

// Titres
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"], // Titres gras
  variable: "--font-poppins",
});

// Texte
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"], // Texte normal
  variable: "--font-inter",
});

export const metadata = {
  title: "Fabien COSTA - Développeur Web",
  description:
    "Portfolio de Fabien COSTA, développeur web spécialisé en React, Next.js et Node.js. Découvrez mes projets, compétences et contactez-moi pour vos besoins en développement web.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning={true}
    >
      <body className="bg-white text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
