interface SectionHeadingProps {
  label?: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  labelColor?: "accent" | "gold";
  className?: string;
}

export function SectionHeading({
  label,
  heading,
  subheading,
  centered = false,
  labelColor = "accent",
  className = "",
}: SectionHeadingProps) {
  const labelClasses = "text-gray-600";

  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {label && (
        <p className={`text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-display ${labelClasses}`}>
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-display">
        {heading}
      </h2>
      {subheading && (
        <p className={`mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {subheading}
        </p>
      )}
    </div>
  );
}
