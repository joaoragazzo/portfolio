import React from "react";
import picutre from "/profile_picture.jpeg";

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
            <img className="w-full h-full object-cover rounded-full brightness-90" src={picutre} />
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
