import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-forest-700 text-white hover:bg-forest-800 shadow-lg shadow-forest-700/20",
  secondary:
    "bg-bronze-500 text-white hover:bg-bronze-600 shadow-lg shadow-bronze-500/20",
  outline:
    "border-2 border-forest-700 text-forest-700 hover:bg-forest-700 hover:text-white",
  ghost: "text-forest-700 hover:bg-forest-50",
};

const sizes = {
  sm: "px-5 py-2.5 text-body-sm",
  md: "px-7 py-3.5 text-body",
  lg: "px-9 py-4 text-body-lg",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 tracking-wide",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
