import React, { useState } from "react";
import { ModalWrapper } from "./ModalWrapper";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const ProjectCard = ({
  children,
  development = false,
  live,
  finished = false,
  github,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const childrenArray = React.Children.toArray(children);
  const icon = childrenArray.find(
    (child) => child.type?.displayName === "ProjectCard.Icon"
  );
  const title = childrenArray.find(
    (child) => child.type?.displayName === "ProjectCard.Title"
  );
  const description = childrenArray.find(
    (child) => child.type?.displayName === "ProjectCard.Description"
  );
  const tags = childrenArray.filter(
    (child) => child.type?.displayName === "ProjectCard.Tag"
  );
  const functionalities = childrenArray.filter(
    (child) => child.type?.displayName === "ProjectCard.Functionality"
  );
  const challanges = childrenArray.find(
    (child) => child.type?.displayName === "ProjectCard.Challanges"
  );
  const demonstrations = childrenArray.filter(
    (child) => child.type?.displayName === "ProjectCard.Demonstration"
  );
  return (
    <>
      <div className="hover:scale-101 transition-all flex flex-col h-full project-card bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
        <div className="h-48 bg-gradient-to-r from-sky-800 to-indigo-900 flex items-center justify-center">
          <div className="h-20 w-20 text-white/80 text-6xl flex items-center justify-center">
            {icon?.props?.children}
          </div>
        </div>
        <div className="p-6 justify-between flex flex-col flex-1">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-white">
                {title?.props?.children}
              </h3>
              <div className="flex flex-row gap-2.5">
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

            <p className="text-slate-400 mb-4 text-sm text-justify">
              {description?.props?.children}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-slate-700 rounded text-xs text-sky-300"
                >
                  {tag?.props?.children}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <a
              onClick={() => {
                setModalOpen(true);
              }}
              className="cursor-pointer mt-auto text-sky-400 hover:text-sky-300 text-sm font-medium flex items-center"
            >
              Ver detalhes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <div>
              {github && (
                <a href={github}>
                  <FaGithub className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <ModalWrapper>
          <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-4 flex justify-between items-center">
            <h2 id="modal-title" className="text-2xl font-bold text-white">
              {title}
            </h2>
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              className="text-slate-400 hover:text-white cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div id="modal-content" className="p-6">
            <div className="mb-8 h-64 bg-gradient-to-r from-sky-800 to-indigo-900 rounded-lg flex items-center justify-center">
              <div className="h-24 w-24 text-white/80 text-6xl flex items-center justify-center">
                {icon}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Descrição
              </h3>
              <p className="text-slate-300 text-justify">{description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Tecnologias
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((content, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300"
                  >
                    {content}
                  </span>
                ))}
              </div>
            </div>

            {functionalities?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Funcionalidades
                </h3>
                <ul className="list-disc pl-5 text-slate-300 space-y-2">
                  {functionalities.map((content, index) => (
                    <li>{content}</li>
                  ))}
                </ul>
              </div>
            )}

            {challanges && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Desafios e Soluções
                </h3>
                <p className="text-slate-300 text-justify">{challanges}</p>
              </div>
            )}

            {demonstrations && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Demonstração
                </h3>
                {demonstrations}
              </div>
            )}
          </div>
        </ModalWrapper>
      )}
    </>
  );
};

ProjectCard.Icon = ({ children }) => <>{children}</>;
ProjectCard.Icon.displayName = "ProjectCard.Icon";

ProjectCard.Title = ({ children }) => <>{children}</>;
ProjectCard.Title.displayName = "ProjectCard.Title";

ProjectCard.Description = ({ children }) => <>{children}</>;
ProjectCard.Description.displayName = "ProjectCard.Description";

ProjectCard.Tag = ({ children }) => <>{children}</>;
ProjectCard.Tag.displayName = "ProjectCard.Tag";

ProjectCard.Functionality = ({ children }) => <>{children}</>;
ProjectCard.Functionality.displayName = "ProjectCard.Functionality";

ProjectCard.Challanges = ({ children }) => <>{children}</>;
ProjectCard.Challanges.displayName = "ProjectCard.Challanges";

ProjectCard.Demonstration = ({ children }) => <>{children}</>;
ProjectCard.Demonstration.displayName = "ProjectCard.Demonstration";
