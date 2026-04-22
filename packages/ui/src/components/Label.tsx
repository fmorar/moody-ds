import { forwardRef, type LabelHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Mark the associated field as required (adds a subtle accent indicator). */
  required?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "inline-flex items-center gap-0.5 text-sm font-medium text-foreground",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
      {required ? (
        <span aria-hidden="true" className="text-destructive">
          *
        </span>
      ) : null}
    </label>
  ),
);

Label.displayName = "Label";
