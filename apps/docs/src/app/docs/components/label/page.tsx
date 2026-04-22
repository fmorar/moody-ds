import { Input, Label } from "@fmorar/moody-ui";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const props: PropRow[] = [
  { name: "htmlFor", type: "string", description: "Associated control id." },
  {
    name: "required",
    type: "boolean",
    default: "false",
    description: "Shows a subtle * indicator.",
  },
];

export default function LabelPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Label
        </h1>
        <p className="text-lg text-muted-foreground">
          Semantic <code className="rounded bg-muted px-1 text-xs">&lt;label&gt;</code> with
          DS typography. Pair with a control via <code className="rounded bg-muted px-1 text-xs">htmlFor</code> —
          clicking the label focuses the input.
        </p>
      </header>

      <Preview
        code={`<Label htmlFor="email">Email address</Label>
<Input id="email" placeholder="you@domain.com" />`}
      >
        <div className="flex w-72 flex-col gap-1.5">
          <Label htmlFor="demo-email">Email address</Label>
          <Input id="demo-email" placeholder="you@domain.com" />
        </div>
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Required
        </h2>
        <Preview
          code={`<Label htmlFor="amount" required>Amount</Label>`}
        >
          <Label htmlFor="demo-amount" required>
            Amount
          </Label>
        </Preview>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          API
        </h2>
        <PropsTable rows={props} />
        <p className="text-sm text-muted-foreground">
          All native{" "}
          <code className="rounded bg-muted px-1 text-xs">label</code>{" "}
          attributes are forwarded.
        </p>
      </section>
    </>
  );
}
