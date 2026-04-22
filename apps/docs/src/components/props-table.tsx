export type PropRow = {
  name: string;
  type: string;
  default?: string;
  description?: string;
};

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="px-4 py-2.5 font-medium">Prop</th>
            <th className="px-4 py-2.5 font-medium">Type</th>
            <th className="px-4 py-2.5 font-medium">Default</th>
            <th className="px-4 py-2.5 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.name}
              className={i > 0 ? "border-t border-border" : ""}
            >
              <td className="px-4 py-2.5 font-mono text-xs text-foreground">
                {row.name}
              </td>
              <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                {row.type}
              </td>
              <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                {row.default ?? "—"}
              </td>
              <td className="px-4 py-2.5 text-foreground/90">
                {row.description ?? ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
