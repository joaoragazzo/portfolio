import { FaExternalLinkAlt } from "react-icons/fa"

export const CertificationCard = ({ img, title, link, year }) => {
    return (
      <div className="overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:border-blue-500/30 flex flex-col justify-between h-full">
        
        <div className="flex justify-center">
          <img src={img} className="mb-5 rounded-md h-40" />   
        </div>
  
        <h3 className="text-center font-bold text-xl mb-6 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          {title}
        </h3>
  
        <div className="mt-auto flex flex-row items-center justify-between text-sm text-slate-400 pt-4 border-t border-slate-700/50">
          <span className="bg-slate-700 text-slate-300 px-2 py-0.5 rounded text-xs">
            {year}
          </span>
  
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            Ver certificação
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
  
      </div>
    );
  };
