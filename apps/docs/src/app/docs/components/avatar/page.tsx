import { Avatar } from "@moody-ds/ui";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const props: PropRow[] = [
  {
    name: "src",
    type: "string",
    description: "Image URL. Falls back to initials if it fails to load.",
  },
  {
    name: "alt",
    type: "string",
    description: "Required — used for accessible text and for fallback initials.",
  },
  {
    name: "fallback",
    type: "string",
    description:
      "Custom fallback text. Defaults to initials derived from alt.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
  },
];

export default function AvatarPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Avatar
        </h1>
        <p className="text-lg text-muted-foreground">
          Circular identity chip. Displays an image when available, or the
          initials derived from the name.
        </p>
      </header>

      <Preview
        code={`<Avatar alt="Fabian Mora" />`}
      >
        <Avatar alt="Fabian Mora" />
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Sizes
        </h2>
        <Preview
          code={`<Avatar alt="Fabian Mora" size="sm" />
<Avatar alt="Fabian Mora" size="md" />
<Avatar alt="Fabian Mora" size="lg" />`}
        >
          <div className="flex items-center gap-3">
            <Avatar alt="Fabian Mora" size="sm" />
            <Avatar alt="Fabian Mora" size="md" />
            <Avatar alt="Fabian Mora" size="lg" />
          </div>
        </Preview>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          With image
        </h2>
        <Preview
          code={`<Avatar src="/path/to/photo.jpg" alt="Jane Doe" />`}
        >
          <Avatar
            src="https://i.pravatar.cc/64?img=12"
            alt="Sample person"
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
