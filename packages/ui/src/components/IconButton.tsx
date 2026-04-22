"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";

type Variant = "ghost" | "primary" | "secondary";
type Size = "sm" | "md" | "lg";

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: Variant;
  size?: Size;
  /** Required for accessibility — describes the action in words. */
  "aria-label": string;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary:
    "bg-muted text-foreground border border-border hover:bg-subtle hover:text-subtle-foreground hover:border-transparent",
  ghost: "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
};

const sizeStyles: Record<Size, string> = {
  sm: "size-7 [&_svg]:size-4",
  md: "size-9 [&_svg]:size-4",
  lg: "size-11 [&_svg]:size-5",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = "ghost", size = "md", className, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-md transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);

IconButton.displayName = "IconButton";
