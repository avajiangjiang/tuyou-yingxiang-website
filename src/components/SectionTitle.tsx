interface SectionTitleProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SectionTitle({
  number,
  title,
  subtitle,
  align = "left",
  theme = "light",
}: SectionTitleProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div className={isCenter ? "text-center" : ""}>
      <div
        className={`mb-4 flex items-center gap-3 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        {!isCenter && <span className="section-bar" />}
        <span className="section-number">{number}</span>
      </div>
      <h2
        className={`text-2xl font-bold sm:text-3xl lg:text-4xl ${
          isDark ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base ${
            isDark ? "text-white/50" : "text-dark/50"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
