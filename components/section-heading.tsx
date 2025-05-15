interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[align]}`}>
      <h2 className="text-3xl md:text-4xl font-extralight mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-300 font-light">{subtitle}</p>}
    </div>
  )
}
