import { useState } from "react";

export const Links = () => {
  const [activePage, setActivePage] = useState("home");
  
  return (
    <ul className="flex space-x-6 text-sm">
      <li>
        <a
          href="#home"
          className={`nav-link ${activePage == "home" ? "active text-sky-400" : "text-slate-300"} py-2 hover:text-sky-300`}
          onClick={() => {setActivePage("home")}}
        >
          Início
        </a>
      </li>
      <li>
        <a
          href="#about"
          className={`nav-link ${activePage == "about" ? "active text-sky-400" : "text-slate-300"} py-2  hover:text-sky-300`}
          onClick={() => {setActivePage("about")}}
        >
          Sobre
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className={`nav-link ${activePage == "projects" ? "active text-sky-400" : "text-slate-300"} py-2 hover:text-sky-300`}
          onClick={() => {setActivePage("projects")}}
        >
          Projetos
        </a>
      </li>
      <li>
        <a
          href="#experience"
          className={`nav-link ${activePage == "experience" ? "active text-sky-400" : "text-slate-300"} py-2 hover:text-sky-300`}
          onClick={() => {setActivePage("experience")}}
        >
          Experiência
        </a>
      </li>
      <li>
        <a
          href="#tech"
          className={`nav-link ${activePage == "tech" ? "active text-sky-400" : "text-slate-300"} py-2 hover:text-sky-300`}
          onClick={() => {setActivePage("tech")}}
        >
          Tecnologias
        </a>
      </li>
    </ul>
  );
};
