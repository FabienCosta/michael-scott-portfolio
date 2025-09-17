"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Liens avec id propres
  const links = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Témoignages", href: "#testimonials" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="w-full mx-auto relative flex items-center justify-between py-2 px-6 lg:py-3 lg:px-8">
        {/* Logo */}
        <div
          className="flex items-center z-20 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src="/images/logo.webp"
            alt="Photo de profil Fabien"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        {/* Titre centré */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl lg:text-2xl font-bold z-10">
          Michael Scott
        </h1>

        {/* Nav desktop */}
        <nav className="hidden lg:flex z-20 ml-auto">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger mobile */}
        <button
          className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded z-20"
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md w-full z-10">
          <ul className="flex flex-col gap-3 py-3 px-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
