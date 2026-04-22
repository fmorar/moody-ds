"use client";

import { forwardRef, type ReactNode } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../utils/cn";

export type SegmentedOption = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
};

type Size = "sm" | "md";

export interface SegmentedControlProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    "children" | "orientation"
  > {
  options: SegmentedOption[];
  size?: Size;
}

const sizeStyles: Record<Size, { height: string; padding: string; font: string }> = {
  sm: { height: "h-8", padding: "px-3", font: "text-xs" },
  md: { height: "h-10", padding: "px-4", font: "text-sm" },
};

export const SegmentedControl = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  SegmentedControlProps
>(({ className, options, size = "md", ...props }, ref) => {
  const s = sizeStyles[size];
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-border bg-muted p-1",
        className,
      )}
      {...props}
    >
      {options.map((opt) => (
        <RadioGroupPrimitive.Item
          key={opt.value}
          value={opt.value}
          disabled={opt.disabled}
          className={cn(
            "inline-flex items-center justify-center rounded-sm font-medium transition-colors",
            "text-muted-foreground hover:text-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "data-[state=checked]:bg-background data-[state=checked]:text-foreground data-[state=checked]:shadow-sm",
            "disabled:pointer-events-none disabled:opacity-50",
            s.height,
            s.padding,
            s.font,
          )}
        >
          {opt.label}
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
});

SegmentedControl.displayName = "SegmentedControl";
