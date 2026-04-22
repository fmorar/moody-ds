import { Input } from "@moody-ds/ui";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const props: PropRow[] = [
  {
    name: "leading",
    type: "ReactNode",
    description: "Content rendered before the input (e.g. a $ sign).",
  },
  {
    name: "trailing",
    type: "ReactNode",
    description: "Content rendered after the input.",
  },
  {
    name: "invalid",
    type: "boolean",
    default: "false",
    description: "Applies destructive border + ring styling and sets aria-invalid.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables interaction and lowers opacity.",
  },
  {
    name: "className",
    type: "string",
    description: "Merged into the outer wrapper element.",
  },
];

export default function InputPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Input
        </h1>
        <p className="text-lg text-muted-foreground">
          Single-line text control with optional leading or trailing slots.
        </p>
      </header>

      <Preview
        code={`<Input placeholder="email@domain.com" />`}
      >
        <Input placeholder="email@domain.com" className="w-72" />
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Leading &amp; trailing slots
        </h2>
        <Preview
          code={`<Input leading="$" placeholder="0.00" inputMode="decimal" />
<Input trailing="USD" placeholder="Amount" />`}
        >
          <div className="flex w-80 flex-col gap-3">
            <Input leading="$" placeholder="0.00" inputMode="decimal" />
            <Input trailing="USD" placeholder="Amount" />
          </div>
        </Preview>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          States
        </h2>
        <Preview
          code={`<Input invalid defaultValue="bad@" />
<Input disabled defaultValue="Disabled" />`}
        >
          <div className="flex w-80 flex-col gap-3">
            <Input invalid defaultValue="bad@" />
            <Input disabled defaultValue="Disabled" />
          </div>
        </Preview>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">API</h2>
        <PropsTable rows={props} />
        <p className="text-sm text-muted-foreground">
          All native <code className="rounded bg-muted px-1 text-xs">input</code> attributes are forwarded.
        </p>
      </section>
    </>
  );
}
