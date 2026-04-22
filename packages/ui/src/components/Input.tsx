"use client";

import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leading?: ReactNode;
  trailing?: ReactNode;
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, leading, trailing, invalid, disabled, ...props }, ref) => (
    <div
      data-disabled={disabled ? "" : undefined}
      data-invalid={invalid ? "" : undefined}
      className={cn(
        "group flex h-10 items-center rounded-md border bg-muted px-3 transition-colors",
        "border-input focus-within:border-ring focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
        invalid &&
          "border-destructive focus-within:border-destructive focus-within:ring-destructive",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      {leading && (
        <span className="mr-2 shrink-0 text-sm text-muted-foreground">
          {leading}
        </span>
      )}
      <input
        ref={ref}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        className={cn(
          "min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none",
          "placeholder:text-muted-foreground",
          "disabled:cursor-not-allowed",
        )}
        {...props}
      />
      {trailing && (
        <span className="ml-2 shrink-0 text-sm text-muted-foreground">
          {trailing}
        </span>
      )}
    </div>
  ),
);

Input.displayName = "Input";
