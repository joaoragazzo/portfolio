import { FaDiscord, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

export const ContactInformations = () => {
  return (
    <div className="max-w-3xl mx-auto bg-slate-800 rounded-xl p-8 border border-slate-700">
      <h3 className="text-xl font-semibold mb-4 text-white">
        Informações de Contato
      </h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3 text-sky-400 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="text-slate-300">joaoragazzo479@gmail.com</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">
        Redes Sociais
      </h3>
      <div className="flex space-x-4">
        <a
          href="#"
          className="h-10 w-10 rounded-full bg-slate-700 hover:bg-sky-600 flex items-center justify-center transition-colors"
        >
          <i className="fab fa-github text-white">
            <FaGithub />
          </i>
        </a>
        <a
          href="#"
          className="h-10 w-10 rounded-full bg-slate-700 hover:bg-sky-600 flex items-center justify-center transition-colors"
        >
          <i className="fab fa-linkedin-in text-white">
            <FaLinkedin />
          </i>
        </a>
        <a
          href="#"
          className="h-10 w-10 rounded-full bg-slate-700 hover:bg-sky-600 flex items-center justify-center transition-colors"
        >
          <i className="fab fa-twitter text-white">
            <FaDiscord />
          </i>
        </a>
        <a
          href="#"
          className="h-10 w-10 rounded-full bg-slate-700 hover:bg-sky-600 flex items-center justify-center transition-colors"
        >
          <i className="fab fa-dev text-white">
            <FaMailBulk />
          </i>
        </a>
      </div>
    </div>
  );
};
