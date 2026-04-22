"use client";

import { forwardRef, type ReactNode } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "../utils/cn";

export type SelectOption = {
  value: string;
  label: string;
  description?: string;
  leading?: ReactNode;
  disabled?: boolean;
};

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  name?: string;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  className?: string;
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      options,
      placeholder = "Select…",
      disabled,
      invalid,
      name,
      id,
      className,
      ...aria
    },
    ref,
  ) => {
    const selected = options.find((o) => o.value === value);

    return (
      <SelectPrimitive.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        name={name}
      >
        <SelectPrimitive.Trigger
          ref={ref}
          id={id}
          aria-invalid={invalid || undefined}
          {...aria}
          className={cn(
            "group flex h-12 w-full items-center justify-between rounded-md border bg-muted px-3 text-left transition-colors",
            "border-input focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
            invalid &&
              "border-destructive focus:border-destructive focus:ring-destructive",
            disabled && "pointer-events-none opacity-50",
            className,
          )}
        >
          <span className="flex min-w-0 flex-1 items-center gap-3">
            {selected ? (
              <SelectedRow option={selected} />
            ) : (
              <SelectPrimitive.Value
                placeholder={
                  <span className="text-sm text-muted-foreground">
                    {placeholder}
                  </span>
                }
              />
            )}
          </span>
          <SelectPrimitive.Icon asChild>
            <ChevronDown
              className="ml-2 size-4 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            sideOffset={6}
            className={cn(
              "relative z-50 max-h-[var(--radix-select-content-available-height)] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-border bg-background shadow-lg",
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            )}
          >
            <SelectPrimitive.Viewport className="p-1">
              {options.map((opt) => (
                <SelectPrimitive.Item
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.disabled}
                  textValue={opt.label}
                  className={cn(
                    "relative flex cursor-pointer select-none items-center gap-3 rounded-md px-2 py-2 text-sm outline-none transition-colors",
                    "data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
                    "data-[state=checked]:bg-subtle data-[state=checked]:text-subtle-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                  )}
                >
                  {opt.leading ? (
                    <span className="shrink-0">{opt.leading}</span>
                  ) : null}
                  <span className="flex min-w-0 flex-1 flex-col">
                    <SelectPrimitive.ItemText asChild>
                      <span className="truncate text-sm font-medium text-foreground">
                        {opt.label}
                      </span>
                    </SelectPrimitive.ItemText>
                    {opt.description ? (
                      <span className="truncate text-xs text-muted-foreground">
                        {opt.description}
                      </span>
                    ) : null}
                  </span>
                  <SelectPrimitive.ItemIndicator className="shrink-0">
                    <Check
                      className="size-4 text-subtle-foreground"
                      aria-hidden="true"
                    />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  },
);

Select.displayName = "Select";

function SelectedRow({ option }: { option: SelectOption }) {
  return (
    <>
      {option.leading ? (
        <span className="shrink-0">{option.leading}</span>
      ) : null}
      <span className="flex min-w-0 flex-col">
        <span className="truncate text-sm font-medium text-foreground">
          {option.label}
        </span>
        {option.description ? (
          <span className="truncate text-xs text-muted-foreground">
            {option.description}
          </span>
        ) : null}
      </span>
    </>
  );
}
