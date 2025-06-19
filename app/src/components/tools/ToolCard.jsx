import React from "react";

export const ToolCard = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const icon = childrenArray.find((child) => child.type?.displayName === 'ToolCard.Icon');
  const title = childrenArray.find((child) => child.type?.displayName === 'ToolCard.Title');
  const tools = childrenArray.filter((child) => child.type?.displayName === 'ToolCard.Tool');

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <h3 className="text-xl font-semibold mb-4 text-white flex items-center leading-0">
        <div className="h-5 w-5 mr-2 text-sky-400 relative bottom-[2px]">   
            {icon}
        </div>
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {tools?.map((tool, index) => (
        <span
            key={index}
            className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

ToolCard.Icon = ({ children }) => <>{children}</>;
ToolCard.Icon.displayName = "ToolCard.Icon";

ToolCard.Title = ({ children }) => <>{children}</>;
ToolCard.Title.displayName = "ToolCard.Title";

ToolCard.Tool = ({ children }) => <>{children}</>;
ToolCard.Tool.displayName = "ToolCard.Tool";
