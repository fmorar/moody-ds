import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";

type Tone = "neutral" | "success" | "warning" | "destructive" | "accent";

export interface StatusDisplayProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Visual + semantic tone of the status card. */
  tone?: Tone;
  /** Optional icon rendered in a circular badge above the title. */
  icon?: ReactNode;
  /** Primary heading — usually one short line ("Your transfer is on the way"). */
  title: ReactNode;
  /** Secondary line below the title. */
  description?: ReactNode;
  /** Slot below the description — typically a row of action buttons. */
  actions?: ReactNode;
}

const toneStyles: Record<
  Tone,
  { badge: string; iconColor: string; role: "status" | "alert" | undefined }
> = {
  neutral: {
    badge: "bg-muted text-muted-foreground",
    iconColor: "text-muted-foreground",
    role: "status",
  },
  success: {
    badge: "bg-subtle text-subtle-foreground",
    iconColor: "text-subtle-foreground",
    role: "status",
  },
  accent: {
    badge: "bg-accent text-accent-foreground",
    iconColor: "text-accent-foreground",
    role: "status",
  },
  warning: {
    badge: "bg-warning text-warning-foreground",
    iconColor: "text-warning-foreground",
    role: "status",
  },
  destructive: {
    badge: "bg-destructive text-destructive-foreground",
    iconColor: "text-destructive-foreground",
    role: "alert",
  },
};

export const StatusDisplay = forwardRef<HTMLDivElement, StatusDisplayProps>(
  (
    {
      className,
      tone = "neutral",
      icon,
      title,
      description,
      actions,
      children,
      ...props
    },
    ref,
  ) => {
    const s = toneStyles[tone];
    return (
      <div
        ref={ref}
        role={s.role}
        className={cn(
          "flex flex-col items-center gap-6 rounded-lg border border-border bg-background p-10 text-center",
          className,
        )}
        {...props}
      >
        {icon ? (
          <span
            aria-hidden="true"
            className={cn(
              "flex size-12 items-center justify-center rounded-full [&_svg]:size-6",
              s.badge,
            )}
          >
            {icon}
          </span>
        ) : null}
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold tracking-tight text-foreground">
            {title}
          </p>
          {description ? (
            <p className="text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {children}
        {actions ? (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {actions}
          </div>
        ) : null}
      </div>
    );
  },
);

StatusDisplay.displayName = "StatusDisplay";
