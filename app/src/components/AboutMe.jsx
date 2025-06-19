import React from "react";

export const AboutMe = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const paragraphs = childrenArray.filter(
    (child) => child.type?.displayName === "AboutMe.Paragraph"
  );
  const tags = childrenArray.filter(
    (child) => child.type?.displayName === "AboutMe.Tag"
  );

  return (
    <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-sky-600 to-indigo-800 p-1">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-32 h-32 text-sky-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3">
        <h3 className="text-2xl font-bold mb-4 text-sky-400">
          João Paulo Ragazzo
        </h3>
        {paragraphs.map((content, index) => (
          <p key={index} className="text-slate-300 mb-4 text-justify">
            {content}
          </p>
        ))}
        <div className="flex flex-wrap gap-3">
          {tags.map((content, key) => (
            <span key={key} className="px-4 py-2 bg-slate-800 rounded-full text-sm text-sky-300">
              {content}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

AboutMe.Paragraph = ({ children }) => <>{children}</>;
AboutMe.Paragraph.displayName = "AboutMe.Paragraph";

AboutMe.Tag = ({ children }) => <>{children}</>;
AboutMe.Tag.displayName = "AboutMe.Tag";
