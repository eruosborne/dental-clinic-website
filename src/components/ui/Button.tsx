"use client";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  as?: "button" | "a";
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-primary font-semibold hover:bg-accent-hover shadow-[0_0_20px_rgba(10,22,40,0.3)] hover:shadow-[0_0_30px_rgba(10,22,40,0.5)] transition-all duration-300",
  secondary:
    "border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300",
  ghost:
    "border border-white/15 text-black hover:border-white/30 hover:bg-gray-100 transition-all duration-300",
  gold:
    "bg-gold text-primary font-semibold hover:brightness-110 shadow-[0_0_20px_rgba(10,22,40,0.3)] transition-all duration-300",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-base md:text-lg rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 font-body cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
