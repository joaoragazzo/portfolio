import { FaBars } from "react-icons/fa";
import { JoaoRagazzo } from "./JoaoRagazzo";
import { Links } from "./Links";
import { useState } from "react";
import { LinksMobile } from "./LinksMobile";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const links = [
    { id: "about", label: "Sobre" },
    { id: "projects", label: "Projetos" },
    { id: "experience", label: "Experiência" },
    { id: "tech", label: "Tecnologias" },
    { id: "voluntary", label: "Trabalhos voluntários"},
    { id: "contact", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="flex justify-between w-full px-4 py-4 items-center">
        <JoaoRagazzo />
        <nav className="hidden md:flex flex-col md:flex-row">
          <Links links={links} />
        </nav>
        <button
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
          className="md:hidden text-white cursor-pointer"
        >
          <FaBars />
        </button>
      </div>
      {mobileMenu && (
        <LinksMobile links={links} onItemClick={() => setMobileMenu(false)} />
      )}
    </header>
  );
};
