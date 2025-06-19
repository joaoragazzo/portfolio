import { JoaoRagazzo } from "./JoaoRagazzo";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="code-font text-xl font-semibold text-sky-400">
              <JoaoRagazzo />
            </div>
          </div>

          <div className="text-slate-400 text-sm">
            Transformando ideias em código e soluções em experiências
          </div>
        </div>
      </div>
    </footer>
  );
};
