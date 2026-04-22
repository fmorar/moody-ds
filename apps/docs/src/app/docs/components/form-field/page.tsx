import { FormField, Input, Select } from "@fmorar/moody-ui";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const props: PropRow[] = [
  { name: "label", type: "ReactNode", description: "Visible label above the control." },
  {
    name: "hint",
    type: "ReactNode",
    description: "Secondary helper text. Hidden while error is set.",
  },
  {
    name: "error",
    type: "ReactNode",
    description: "Error message. Takes precedence over hint.",
  },
  {
    name: "id",
    type: "string",
    description: "Control id. Auto-generated if omitted.",
  },
  { name: "required", type: "boolean", default: "false" },
  { name: "disabled", type: "boolean", default: "false" },
];

export default function FormFieldPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          FormField
        </h1>
        <p className="text-lg text-muted-foreground">
          Composes <code className="rounded bg-muted px-1 text-xs">Label</code> +
          the control + hint/error into a single unit with auto-generated id
          wiring.
        </p>
      </header>

      <Preview
        code={`<FormField label="Amount" hint="Whole dollars only">
  <Input leading="$" placeholder="0.00" inputMode="decimal" />
</FormField>`}
      >
        <div className="w-72">
          <FormField label="Amount" hint="Whole dollars only">
            <Input leading="$" placeholder="0.00" inputMode="decimal" />
          </FormField>
        </div>
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          With error
        </h2>
        <Preview
          code={`<FormField label="Email" error="Enter a valid email address">
  <Input defaultValue="bad@" invalid />
</FormField>`}
        >
          <div className="w-72">
            <FormField label="Email" error="Enter a valid email address">
              <Input defaultValue="bad@" invalid />
            </FormField>
          </div>
        </Preview>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Works with any control
        </h2>
        <Preview
          code={`<FormField label="Account" required>
  <Select options={accounts} placeholder="Select…" aria-label="Account" />
</FormField>`}
        >
          <div className="w-72">
            <FormField label="Account" required>
              <Select
                options={[
                  { value: "checking", label: "Checking ··2502" },
                  { value: "savings", label: "Savings ··5679" },
                ]}
                placeholder="Select…"
                aria-label="Account"
              />
            </FormField>
          </div>
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
