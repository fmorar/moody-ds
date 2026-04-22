"use client";

import { forwardRef, useState, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

type Size = "sm" | "md" | "lg";

const sizeStyles: Record<Size, string> = {
  sm: "size-6 text-[10px]",
  md: "size-8 text-xs",
  lg: "size-10 text-sm",
};

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: Size;
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, fallback, size = "md", className, ...props }, ref) => {
    const [errored, setErrored] = useState(false);
    const showImage = src && !errored;
    const initials =
      fallback ?? (alt ? getInitials(alt) : "");

    return (
      <span
        ref={ref}
        className={cn(
          "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted font-medium text-muted-foreground",
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt ?? ""}
            onError={() => setErrored(true)}
            className="size-full object-cover"
          />
        ) : (
          <span aria-hidden={!!alt}>{initials}</span>
        )}
      </span>
    );
  },
);

Avatar.displayName = "Avatar";

function getInitials(text: string) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}
