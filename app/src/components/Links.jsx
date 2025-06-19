import { useEffect, useState } from "react";

export const Links = () => {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience", "tech", "contact"];

      let current = "home";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (window.scrollY >= offsetTop - 100 && window.scrollY < offsetTop + offsetHeight - 100) {
            current = section;
          }
        }
      }

      setActivePage(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ul className="flex space-x-6 text-sm">
      {[
        { id: "home", label: "Início" },
        { id: "about", label: "Sobre" },
        { id: "projects", label: "Projetos" },
        { id: "experience", label: "Experiência" },
        { id: "tech", label: "Tecnologias" },
        { id: "contact", label: "Contato" },
      ].map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            className={`nav-link ${
              activePage === link.id ? "active text-sky-400" : "text-slate-300"
            } py-2 hover:text-sky-300`}
            onClick={() => setActivePage(link.id)}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};