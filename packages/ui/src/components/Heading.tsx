import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

type Size = "display" | "xl" | "lg" | "md" | "sm" | "xs";
type Family = "sans" | "serif";
type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: Size;
  family?: Family;
  /** Override the rendered tag — defaults pick the semantic level matching the size. */
  as?: Tag;
}

const sizeStyles: Record<Size, string> = {
  display: "text-5xl font-semibold tracking-tight",
  xl: "text-4xl font-semibold tracking-tight",
  lg: "text-3xl font-semibold tracking-tight",
  md: "text-xl font-semibold tracking-tight",
  sm: "text-base font-semibold",
  xs: "text-sm font-semibold",
};

const defaultTag: Record<Size, Tag> = {
  display: "h1",
  xl: "h1",
  lg: "h2",
  md: "h3",
  sm: "h4",
  xs: "h5",
};

const familyStyles: Record<Family, string> = {
  sans: "font-sans",
  serif: "font-serif",
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { className, size = "md", family = "sans", as, children, ...props },
    ref,
  ) => {
    const Tag = (as ?? defaultTag[size]) as Tag;
    return (
      <Tag
        ref={ref}
        className={cn(
          "text-foreground",
          sizeStyles[size],
          familyStyles[family],
          className,
        )}
        {...(props as HTMLAttributes<HTMLHeadingElement>)}
      >
        {children}
      </Tag>
    );
  },
);

Heading.displayName = "Heading";
