import { IconButton } from "@fmorar/moody-ui";
import { X, HelpCircle, Plus } from "lucide-react";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const props: PropRow[] = [
  {
    name: "variant",
    type: '"ghost" | "secondary" | "primary"',
    default: '"ghost"',
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
  },
  {
    name: "aria-label",
    type: "string",
    description: "Required — describes the action since the button has no visible text.",
  },
];

export default function IconButtonPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          IconButton
        </h1>
        <p className="text-lg text-muted-foreground">
          Square button for icon-only actions. <code className="rounded bg-muted px-1 text-xs">aria-label</code> is required.
        </p>
      </header>

      <Preview
        code={`<IconButton aria-label="Close"><X /></IconButton>`}
      >
        <IconButton aria-label="Close">
          <X />
        </IconButton>
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Variants
        </h2>
        <Preview
          code={`<IconButton variant="ghost" aria-label="Close"><X /></IconButton>
<IconButton variant="secondary" aria-label="Help"><HelpCircle /></IconButton>
<IconButton variant="primary" aria-label="Add"><Plus /></IconButton>`}
        >
          <div className="flex items-center gap-3">
            <IconButton variant="ghost" aria-label="Close">
              <X />
            </IconButton>
            <IconButton variant="secondary" aria-label="Help">
              <HelpCircle />
            </IconButton>
            <IconButton variant="primary" aria-label="Add">
              <Plus />
            </IconButton>
          </div>
        </Preview>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Sizes
        </h2>
        <Preview
          code={`<IconButton size="sm" aria-label="Close small"><X /></IconButton>
<IconButton size="md" aria-label="Close medium"><X /></IconButton>
<IconButton size="lg" aria-label="Close large"><X /></IconButton>`}
        >
          <div className="flex items-center gap-2">
            <IconButton size="sm" aria-label="Close small">
              <X />
            </IconButton>
            <IconButton size="md" aria-label="Close medium">
              <X />
            </IconButton>
            <IconButton size="lg" aria-label="Close large">
              <X />
            </IconButton>
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
