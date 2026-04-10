interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}

export function Card({ children, className = "", glow = false, hover = false }: CardProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 ${glow ? "glow-accent" : ""} ${
        hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-accent/20" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
