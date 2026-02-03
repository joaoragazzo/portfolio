import { SectionTitleStrong } from "./section/SectionTitleStrong";

export const Home = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <div className="relative max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          <SectionTitleStrong>Desenvolvedor</SectionTitleStrong> Full-Stack &
          AppSec
        </h1>
        <p className="text-xl text-slate-400 mb-8">
          Transformando ideias em código e soluções em experiências
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-md transition-colors font-medium"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border border-sky-600 text-sky-400 hover:bg-sky-900/20 rounded-md transition-colors font-medium"
          >
            Contato
          </a>
        </div>

        <div className="mt-4 flex justify-center">
          <a
            href="http://security.joaoragazzo.dev/" target="_blank"
            className="px-9 py-3 bg-transparent border border-sky-600 text-sky-400 hover:bg-sky-900/20 rounded-md transition-colors font-medium"
          >
            Portfólio sobre segurança
          </a>
        </div>
      </div>
    </div>
  );
};
