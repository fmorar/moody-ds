import { RadioGroup, type RadioOption } from "@fmorar/moody-ui";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const options: RadioOption[] = [
  {
    value: "one-time",
    label: "One-time transfer",
    description: "Send this amount once, today.",
  },
  {
    value: "recurring",
    label: "Recurring transfer",
    description: "Repeat on a schedule.",
  },
  {
    value: "scheduled",
    label: "Scheduled transfer",
    description: "Send on a specific future date.",
    disabled: true,
  },
];

const props: PropRow[] = [
  {
    name: "options",
    type: "RadioOption[]",
    description:
      "Each option: { value, label, description?, disabled? }.",
  },
  {
    name: "value / defaultValue",
    type: "string",
    description: "Controlled / uncontrolled selection.",
  },
  { name: "onValueChange", type: "(value: string) => void" },
  {
    name: "aria-label / aria-labelledby",
    type: "string",
    description:
      "One is required so the group is announced correctly.",
  },
];

export default function RadioGroupPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          RadioGroup
        </h1>
        <p className="text-lg text-muted-foreground">
          Single-select form control for a small set of mutually exclusive
          options. Backed by Radix for keyboard navigation + screen-reader
          support.
        </p>
      </header>

      <Preview
        code={`<RadioGroup options={transferTypes} defaultValue="one-time" aria-label="Transfer type" />`}
      >
        <div className="w-96">
          <RadioGroup
            options={options}
            defaultValue="one-time"
            aria-label="Transfer type"
          />
        </div>
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          API
        </h2>
        <PropsTable rows={props} />
      </section>
    </>
  );
}
