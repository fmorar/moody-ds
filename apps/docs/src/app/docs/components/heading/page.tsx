import { Heading } from "@fmorar/moody-ui";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const props: PropRow[] = [
  {
    name: "size",
    type: '"display" | "xl" | "lg" | "md" | "sm" | "xs"',
    default: '"md"',
    description: "Typography scale.",
  },
  {
    name: "family",
    type: '"sans" | "serif"',
    default: '"sans"',
    description: "Switch to the editorial serif stack for display moments.",
  },
  {
    name: "as",
    type: '"h1" | "h2" | … | "span" | "div"',
    description: "Override the rendered tag; defaults match the size.",
  },
];

export default function HeadingPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Heading
        </h1>
        <p className="text-lg text-muted-foreground">
          Single component for every heading level. Pick <code className="rounded bg-muted px-1 text-xs">size</code> visually
          and <code className="rounded bg-muted px-1 text-xs">as</code> semantically when they should differ.
        </p>
      </header>

      <Preview
        code={`<Heading size="display">$10.00</Heading>`}
      >
        <Heading size="display">$10.00</Heading>
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Scale
        </h2>
        <Preview
          code={`<Heading size="display">Display</Heading>
<Heading size="xl">Extra large</Heading>
<Heading size="lg">Large</Heading>
<Heading size="md">Medium</Heading>
<Heading size="sm">Small</Heading>
<Heading size="xs">Extra small</Heading>`}
        >
          <div className="flex flex-col gap-3">
            <Heading size="display">Display</Heading>
            <Heading size="xl">Extra large</Heading>
            <Heading size="lg">Large</Heading>
            <Heading size="md">Medium</Heading>
            <Heading size="sm">Small</Heading>
            <Heading size="xs">Extra small</Heading>
          </div>
        </Preview>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Serif family (editorial)
        </h2>
        <Preview
          code={`<Heading size="display" family="serif">$10.00</Heading>`}
        >
          <Heading size="display" family="serif">
            $10.00
          </Heading>
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
