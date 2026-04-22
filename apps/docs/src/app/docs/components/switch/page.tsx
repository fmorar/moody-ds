import { Switch } from "@fmorar/moody-ui";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const props: PropRow[] = [
  { name: "checked", type: "boolean", description: "Controlled state." },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    description: "Uncontrolled default.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    description: "Fires when the user toggles.",
  },
  { name: "disabled", type: "boolean", default: "false" },
  {
    name: "aria-label",
    type: "string",
    description:
      "Required when no visible label is associated — describes the setting.",
  },
];

export default function SwitchPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Switch
        </h1>
        <p className="text-lg text-muted-foreground">
          Toggle between two states. Built on Radix Switch for keyboard +
          screen-reader support.
        </p>
      </header>

      <Preview
        code={`<Switch aria-label="Add more details" />`}
      >
        <Switch aria-label="Add more details" />
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Labelled pattern
        </h2>
        <Preview
          code={`<label className="flex items-center gap-2 text-sm">
  <Switch id="details" />
  <span>Add more details</span>
</label>`}
        >
          <label className="flex items-center gap-2 text-sm text-foreground">
            <Switch id="details" />
            <span>Add more details</span>
          </label>
        </Preview>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          States
        </h2>
        <Preview
          code={`<Switch defaultChecked aria-label="On" />
<Switch disabled aria-label="Disabled" />
<Switch disabled defaultChecked aria-label="Disabled on" />`}
        >
          <div className="flex items-center gap-4">
            <Switch defaultChecked aria-label="On" />
            <Switch disabled aria-label="Disabled" />
            <Switch disabled defaultChecked aria-label="Disabled on" />
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
