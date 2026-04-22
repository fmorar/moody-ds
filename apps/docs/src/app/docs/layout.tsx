import { Sidebar } from "@/components/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex gap-10">
        <Sidebar />
        <main className="min-w-0 flex-1 py-10">
          <div className="mx-auto max-w-3xl space-y-6 text-foreground">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
