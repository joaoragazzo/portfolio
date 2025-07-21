import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export const VoluntaryJob = ({
  icon,
  title,
  description,
  startDate,
  endDate,
  tags,
  live = false,
  development = false,
  finished = false,
}) => {
  return (
    <div class="flex flex-col justify-between bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-lg volunteer-card">
      <div>
        <div class="flex items-center mb-4">
          <div class="bg-sky-500/20 p-3 rounded-full mr-4">{icon}</div>
          <h3 class="text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="flex justify-between mb-3">
          <div class="text-sky-400 font-mono text-sm">
            {startDate} - {endDate}
          </div>
          <div className="flex flex-row gap-3">
            {live && (
              <a href={live} className="cursor-pointer" target="_blank">
                <div className="flex flex-row gap-2 bg-green-200 text-green-800 px-3 py-0.5 text-xs rounded-full underline">
                  <FaExternalLinkAlt /> Live
                </div>
              </a>
            )}
            {development && (
              <div className="bg-orange-200 text-orange-800 px-3 py-0.5 text-xs rounded-full">
                Desenvolvimento
              </div>
            )}
            {finished && (
              <div className="bg-blue-200 text-blue-800 px-3 py-0.5 text-xs rounded-full">
                Concluído
              </div>
            )}
          </div>
        </div>

        <p class="text-slate-400 mb-4 text-justify">{description}</p>
      </div>
      
      <div class="flex flex-wrap gap-2">
        {tags?.map((content, index) => (
          <span
            key={index}
            class="bg-slate-700 text-sky-300 px-3 py-1 rounded-full text-sm"
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
};
