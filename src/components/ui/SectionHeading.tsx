interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ subtitle, title, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      {subtitle && (
        <p className="text-primary-600 font-semibold text-sm md:text-base tracking-wide uppercase mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
    </div>
  );
}
