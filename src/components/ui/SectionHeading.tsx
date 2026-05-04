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
            dark ? "text-silver-400" : "text-silver-600"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-display md:text-display-lg font-bold mb-6",
          dark ? "text-white" : "text-slate-950"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-body-lg leading-relaxed",
            dark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
