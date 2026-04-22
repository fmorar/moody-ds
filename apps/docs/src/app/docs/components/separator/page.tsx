import { Separator } from "@fmorar/moody-ui";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const props: PropRow[] = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
  },
  {
    name: "decorative",
    type: "boolean",
    default: "true",
    description:
      'When false, exposes role="separator" for assistive tech — use when the line conveys structure.',
  },
];

export default function SeparatorPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Separator
        </h1>
        <p className="text-lg text-muted-foreground">
          Thin horizontal or vertical divider — color flows from{" "}
          <code className="rounded bg-muted px-1 text-xs">--color-border</code>.
        </p>
      </header>

      <Preview
        code={`<Separator />`}
      >
        <div className="w-80 space-y-3 text-sm text-foreground">
          <span>Above</span>
          <Separator />
          <span>Below</span>
        </div>
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Vertical
        </h2>
        <Preview
          code={`<Separator orientation="vertical" />`}
        >
          <div className="flex h-12 items-center gap-4 text-sm text-foreground">
            <span>Left</span>
            <Separator orientation="vertical" />
            <span>Right</span>
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
