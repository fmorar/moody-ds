"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@moody-ds/ui";
import { docsNav } from "@/lib/docs-nav";

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-60 shrink-0 md:block">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pr-4">
        <nav className="flex flex-col gap-6">
          {docsNav.map((group) => (
            <div key={group.title} className="flex flex-col gap-2">
              <h4 className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-0.5">
                {group.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-md px-2 py-1.5 text-sm transition-colors",
                          active
                            ? "bg-subtle font-medium text-subtle-foreground"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
