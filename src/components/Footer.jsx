"use client";
import { Mail } from "lucide-react";
import { Linkedin, Github } from "lucide-react";

export default function Footer({
  contactEmail = "",
  phone = "",
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
  copyrightText = "&copy;  the office.",
}) {
  return (
    <footer className="bg-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
        {/* Ligne contact + réseaux sociaux */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-700"></div>
        </div>

        {/* Copyright en dessous */}
        <p
          className="text-gray-200 text-sm"
          dangerouslySetInnerHTML={{ __html: copyrightText }}
        />
      </div>
    </footer>
  );
}
