"use client";

import {
  createContext,
  forwardRef,
  useContext,
  useId,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";
import { Label } from "./Label";

type FormFieldContextValue = {
  id: string;
  hintId: string;
  errorId: string;
  hasError: boolean;
  disabled: boolean;
  required: boolean;
};

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

export function useFormField() {
  return useContext(FormFieldContext);
}

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  /** Visible label rendered above the control. Omit for aria-only via `labelledBy`. */
  label?: ReactNode;
  /** Secondary helper text shown below the control when there's no error. */
  hint?: ReactNode;
  /** Error message — when provided, replaces the hint and flags the control invalid. */
  error?: ReactNode;
  /** Custom id for the control; auto-generated if omitted. */
  id?: string;
  /** Applied to the child control via context — lets rendered inputs pick up `disabled`. */
  disabled?: boolean;
  /** Marks the field as required; passed to Label + aria. */
  required?: boolean;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      className,
      label,
      hint,
      error,
      id: providedId,
      disabled = false,
      required = false,
      children,
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const id = providedId ?? autoId;
    const hintId = `${id}-hint`;
    const errorId = `${id}-error`;
    const hasError = Boolean(error);

    return (
      <FormFieldContext.Provider
        value={{ id, hintId, errorId, hasError, disabled, required }}
      >
        <div
          ref={ref}
          className={cn("flex flex-col gap-1.5", className)}
          {...props}
        >
          {label ? (
            <Label htmlFor={id} required={required}>
              {label}
            </Label>
          ) : null}
          {children}
          {hasError ? (
            <p
              id={errorId}
              role="alert"
              className="text-xs text-destructive"
            >
              {error}
            </p>
          ) : hint ? (
            <p id={hintId} className="text-xs text-muted-foreground">
              {hint}
            </p>
          ) : null}
        </div>
      </FormFieldContext.Provider>
    );
  },
);

FormField.displayName = "FormField";
