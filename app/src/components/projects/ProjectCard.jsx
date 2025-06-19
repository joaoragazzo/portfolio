import React from "react";

export const ProjectCard = ({ children }) => {
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
  return (
    <div className="flex flex-col h-full project-card bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
      <div className="h-48 bg-gradient-to-r from-sky-800 to-indigo-900 flex items-center justify-center">
        <div className="h-20 w-20 text-white/80 text-6xl flex items-center justify-center">
          {icon?.props?.children}
        </div>
      </div>
      <div className="p-6 justify-between flex flex-col flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            {title?.props?.children}
          </h3>
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

        <a className="mt-auto text-sky-400 hover:text-sky-300 text-sm font-medium flex items-center">
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
      </div>
    </div>
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
