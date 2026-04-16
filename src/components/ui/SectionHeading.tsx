import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "label-text mb-4",
            dark ? "text-bronze-400" : "text-bronze-600"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-display md:text-display-lg font-bold mb-6",
          dark ? "text-white" : "text-charcoal-950"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-body-lg leading-relaxed",
            dark ? "text-charcoal-300" : "text-charcoal-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
