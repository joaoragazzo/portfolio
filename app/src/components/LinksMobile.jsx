export const LinksMobile = ({ links, onItemClick }) => {
  return (
    <div class="md:hidden bg-slate-900 border-b border-slate-800">
      <div class="container mx-auto px-4 py-2 flex flex-col space-y-3">
        {links.map((content, key) => (
          <a
            onClick={() => {onItemClick()}}
            key={key}
            href={`#${content.id}`}
            class="py-2 text-slate-300 hover:text-white transition-colors"
          >
            {content.label}
          </a>
        ))}
      </div>
    </div>
  );
};
