"use client";

import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

type Size = "sm" | "md" | "lg";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  leading?: ReactNode;
  trailing?: ReactNode;
  invalid?: boolean;
  size?: Size;
}

const sizeStyles: Record<Size, { box: string; text: string; slotText: string }> = {
  sm: { box: "h-8 px-2.5", text: "text-xs", slotText: "text-xs" },
  md: { box: "h-10 px-3", text: "text-sm", slotText: "text-sm" },
  lg: { box: "h-14 px-4", text: "text-xl", slotText: "text-lg" },
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      leading,
      trailing,
      invalid,
      disabled,
      size = "md",
      ...props
    },
    ref,
  ) => {
    const s = sizeStyles[size];
    return (
      <div
        data-disabled={disabled ? "" : undefined}
        data-invalid={invalid ? "" : undefined}
        className={cn(
          "group flex items-center rounded-md border bg-muted transition-colors",
          "border-input focus-within:border-ring focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
          invalid &&
            "border-destructive focus-within:border-destructive focus-within:ring-destructive",
          disabled && "pointer-events-none opacity-50",
          s.box,
          className,
        )}
      >
        {leading ? (
          <span
            className={cn(
              "mr-2 shrink-0 text-muted-foreground",
              s.slotText,
            )}
          >
            {leading}
          </span>
        ) : null}
        <input
          ref={ref}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          className={cn(
            "min-w-0 flex-1 bg-transparent text-foreground outline-none",
            "placeholder:text-muted-foreground",
            "disabled:cursor-not-allowed",
            s.text,
          )}
          {...props}
        />
        {trailing ? (
          <span
            className={cn(
              "ml-2 shrink-0 text-muted-foreground",
              s.slotText,
            )}
          >
            {trailing}
          </span>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
