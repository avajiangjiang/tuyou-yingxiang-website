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
        className={`mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        {!isCenter && <span className="section-bar" />}
        <span className="section-number">{number}</span>
      </div>
      <h2
        className={`text-[1.35rem] font-bold leading-snug sm:text-3xl lg:text-4xl ${
          isDark ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 text-[13px] leading-relaxed sm:mt-3 sm:text-base ${
            isDark ? "text-white/50" : "text-dark/50"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
