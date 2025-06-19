export const ExperienceCard = ({title, start, end, company, description}) => {
  return (
    <div className="mb-12 relative">
      <div className="absolute -left-11 mt-1.5 h-6 w-6 rounded-full border-2 border-sky-700 bg-slate-900 flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-sky-400"></div>
      </div>
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <div className="flex flex-wrap justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>
          <span className="text-sky-400 text-sm font-medium">{start} - {end}</span>
        </div>
        <h4 className="text-slate-300 mb-4">{company}</h4>
        <p className="text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
};
