import { SegmentedControl } from "@fmorar/moody-ui";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const props: PropRow[] = [
  {
    name: "options",
    type: "SegmentedOption[]",
    description: "Each option: { value, label, disabled? }.",
  },
  { name: "size", type: '"sm" | "md"', default: '"md"' },
  {
    name: "value / defaultValue",
    type: "string",
    description: "Controlled / uncontrolled selection.",
  },
  { name: "onValueChange", type: "(value: string) => void" },
];

export default function SegmentedControlPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          SegmentedControl
        </h1>
        <p className="text-lg text-muted-foreground">
          Pill-style single-select for 2–5 related options, usually shown
          inline (filters, time ranges, frequencies). Uses radio-group
          semantics under the hood.
        </p>
      </header>

      <Preview
        code={`<SegmentedControl
  options={[
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
  ]}
  defaultValue="weekly"
  aria-label="Frequency"
/>`}
      >
        <SegmentedControl
          options={[
            { value: "daily", label: "Daily" },
            { value: "weekly", label: "Weekly" },
            { value: "monthly", label: "Monthly" },
          ]}
          defaultValue="weekly"
          aria-label="Frequency"
        />
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Small
        </h2>
        <Preview
          code={`<SegmentedControl size="sm" options={…} aria-label="View" />`}
        >
          <SegmentedControl
            size="sm"
            options={[
              { value: "list", label: "List" },
              { value: "grid", label: "Grid" },
            ]}
            defaultValue="list"
            aria-label="View"
          />
        </Preview>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          API
        </h2>
        <PropsTable rows={props} />
      </section>
    </>
  );
}
