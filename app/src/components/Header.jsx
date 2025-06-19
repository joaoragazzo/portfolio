export const Header = ({ children }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col md:flex-row justify-between items-center">
          {children}
        </nav>
      </div>
    </header>
  );
};
