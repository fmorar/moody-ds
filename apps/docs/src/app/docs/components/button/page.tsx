import { Button } from "@fmorar/moody-ui";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const props: PropRow[] = [
  {
    name: "variant",
    type: '"primary" | "secondary" | "ghost"',
    default: '"primary"',
    description: "Visual style of the button.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Button height and horizontal padding.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables pointer events and lowers opacity.",
  },
  {
    name: "className",
    type: "string",
    description: "Merged into the root element via cn.",
  },
];

export default function ButtonPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Button
        </h1>
        <p className="text-lg text-muted-foreground">
          Trigger an action. Three visual variants mapped to semantic tokens
          (primary, secondary, ghost) and three sizes.
        </p>
      </header>

      <Preview
        code={`import { Button } from "@fmorar/moody-ui";

<Button>Click me</Button>`}
      >
        <Button>Click me</Button>
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Variants
        </h2>
        <Preview
          code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>`}
        >
          <div className="flex items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </Preview>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Sizes
        </h2>
        <Preview
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        >
          <div className="flex items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Preview>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Disabled
        </h2>
        <Preview code={`<Button disabled>Disabled</Button>`}>
          <Button disabled>Disabled</Button>
        </Preview>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          API
        </h2>
        <PropsTable rows={props} />
        <p className="text-sm text-muted-foreground">
          All native{" "}
          <code className="rounded bg-muted px-1 text-xs">button</code>{" "}
          attributes are forwarded.
        </p>
      </section>
    </>
  );
}
