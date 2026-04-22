"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@moody-ds/ui";

export function Preview({
  children,
  code,
}: {
  children: ReactNode;
  code: string;
}) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border">
      <div className="flex border-b border-border bg-background">
        <TabButton active={tab === "preview"} onClick={() => setTab("preview")}>
          Preview
        </TabButton>
        <TabButton active={tab === "code"} onClick={() => setTab("code")}>
          Code
        </TabButton>
      </div>
      {tab === "preview" ? (
        <div className="flex min-h-[220px] items-center justify-center bg-muted p-10">
          {children}
        </div>
      ) : (
        <pre className="overflow-x-auto bg-muted p-4 text-sm leading-relaxed text-foreground">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}

function TabButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "-mb-px border-b-2 px-4 py-2 text-sm transition-colors",
        active
          ? "border-primary font-medium text-foreground"
          : "border-transparent text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
