"use client";

import { forwardRef, type ReactNode } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../utils/cn";

export type RadioOption = {
  value: string;
  label: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
};

export interface RadioGroupProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    "children"
  > {
  options: RadioOption[];
}

export const RadioGroup = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, options, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn("flex flex-col gap-2", className)}
    {...props}
  >
    {options.map((opt) => (
      <label
        key={opt.value}
        className={cn(
          "flex cursor-pointer items-start gap-3 rounded-md border border-border bg-background p-3 transition-colors",
          "hover:border-ring",
          "has-[button[data-state=checked]]:border-primary has-[button[data-state=checked]]:bg-subtle",
          opt.disabled && "pointer-events-none opacity-50",
        )}
      >
        <RadioGroupPrimitive.Item
          value={opt.value}
          disabled={opt.disabled}
          className={cn(
            "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
          )}
        >
          <RadioGroupPrimitive.Indicator className="size-1.5 rounded-full bg-primary-foreground" />
        </RadioGroupPrimitive.Item>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="text-sm font-medium text-foreground">
            {opt.label}
          </span>
          {opt.description ? (
            <span className="text-xs text-muted-foreground">
              {opt.description}
            </span>
          ) : null}
        </span>
      </label>
    ))}
  </RadioGroupPrimitive.Root>
));

RadioGroup.displayName = "RadioGroup";
