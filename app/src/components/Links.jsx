export const Links = () => {
  return (
    <ul className="flex space-x-6 text-sm">
      <li>
        <a
          href="#home"
          className="nav-link active py-2 text-sky-400 hover:text-sky-300"
        >
          Início
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="nav-link py-2 text-slate-300 hover:text-sky-300"
        >
          Sobre
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="nav-link py-2 text-slate-300 hover:text-sky-300"
        >
          Projetos
        </a>
      </li>
      <li>
        <a
          href="#experience"
          className="nav-link py-2 text-slate-300 hover:text-sky-300"
        >
          Experiência
        </a>
      </li>
      <li>
        <a
          href="#tech"
          className="nav-link py-2 text-slate-300 hover:text-sky-300"
        >
          Tecnologias
        </a>
      </li>
    </ul>
  );
};
