export const Section = ({ children, className = "", ...props }) => {
  return (
    <section className={`py-20 ${className}`} {...props}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};
