import { Avatar, Select, type SelectOption } from "@moody-ds/ui";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const accounts: SelectOption[] = [
  {
    value: "checking",
    label: "Checking ··2502",
    description: "$967.85",
    leading: <Avatar alt="Checking account" size="sm" />,
  },
  {
    value: "savings",
    label: "Savings ··5679",
    description: "$1,020.00",
    leading: <Avatar alt="Savings account" size="sm" />,
  },
  {
    value: "usd",
    label: "USD account ··3001",
    description: "Business Checking — Wise",
    leading: <Avatar alt="USD account" size="sm" />,
  },
];

const props: PropRow[] = [
  {
    name: "options",
    type: "SelectOption[]",
    description:
      "Items to render. Each may include leading (avatar/icon), label, description, and disabled.",
  },
  {
    name: "value / defaultValue",
    type: "string",
    description: "Controlled / uncontrolled selection.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
  },
  { name: "placeholder", type: "string", default: '"Select…"' },
  { name: "disabled", type: "boolean" },
  { name: "invalid", type: "boolean" },
  {
    name: "aria-label / aria-labelledby",
    type: "string",
    description:
      "One is required so the control is announced correctly to screen readers.",
  },
];

export default function SelectPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Select
        </h1>
        <p className="text-lg text-muted-foreground">
          Single-select dropdown backed by Radix Select — full keyboard,
          typeahead, and screen-reader support. Each option renders an optional
          leading slot, label, and description.
        </p>
      </header>

      <Preview
        code={`const accounts: SelectOption[] = [
  { value: "checking", label: "Checking ··2502", description: "$967.85",
    leading: <Avatar alt="Checking" size="sm" /> },
  { value: "savings", label: "Savings ··5679", description: "$1,020.00",
    leading: <Avatar alt="Savings" size="sm" /> },
];

<Select
  options={accounts}
  placeholder="Select an account"
  aria-label="Account"
/>`}
      >
        <div className="w-80">
          <Select
            options={accounts}
            placeholder="Select an account"
            aria-label="Account"
          />
        </div>
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Pre-selected
        </h2>
        <Preview
          code={`<Select options={accounts} defaultValue="checking" aria-label="Account" />`}
        >
          <div className="w-80">
            <Select
              options={accounts}
              defaultValue="checking"
              aria-label="Account"
            />
          </div>
        </Preview>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Simple options
        </h2>
        <Preview
          code={`<Select
  options={[
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
  ]}
  placeholder="Choose frequency"
  aria-label="Frequency"
/>`}
        >
          <div className="w-80">
            <Select
              options={[
                { value: "daily", label: "Daily" },
                { value: "weekly", label: "Weekly" },
                { value: "monthly", label: "Monthly" },
              ]}
              placeholder="Choose frequency"
              aria-label="Frequency"
            />
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
