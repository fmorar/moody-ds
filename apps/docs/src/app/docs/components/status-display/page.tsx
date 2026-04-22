import { Button, StatusDisplay } from "@fmorar/moody-ui";
import { CheckCircle2, AlertTriangle, Info, XCircle } from "lucide-react";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const props: PropRow[] = [
  {
    name: "tone",
    type: '"neutral" | "success" | "warning" | "destructive" | "accent"',
    default: '"neutral"',
    description: "Color + role (destructive uses role=alert for a11y).",
  },
  { name: "icon", type: "ReactNode", description: "Optional icon in a circular badge." },
  { name: "title", type: "ReactNode", description: "Primary line; required." },
  { name: "description", type: "ReactNode" },
  { name: "actions", type: "ReactNode", description: "Action buttons slot below the copy." },
];

export default function StatusDisplayPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          StatusDisplay
        </h1>
        <p className="text-lg text-muted-foreground">
          Layout primitive for success confirmations, empty states, and error
          screens. One component, five tones, optional icon + actions.
        </p>
      </header>

      <Preview
        code={`<StatusDisplay
  tone="success"
  icon={<CheckCircle2 />}
  title="Your transfer is on the way"
  description="The money should arrive within minutes."
  actions={
    <>
      <Button variant="secondary">Make another transfer</Button>
      <Button>Go to dashboard</Button>
    </>
  }
/>`}
      >
        <StatusDisplay
          tone="success"
          icon={<CheckCircle2 />}
          title="Your transfer is on the way"
          description="The money should arrive within minutes."
          actions={
            <>
              <Button variant="secondary">Make another transfer</Button>
              <Button>Go to dashboard</Button>
            </>
          }
        />
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Tones
        </h2>
        <Preview
          code={`<StatusDisplay tone="warning" icon={<AlertTriangle />} title="Review your amount" … />`}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <StatusDisplay
              tone="warning"
              icon={<AlertTriangle />}
              title="Review your amount"
              description="Double-check before confirming."
            />
            <StatusDisplay
              tone="destructive"
              icon={<XCircle />}
              title="Transfer failed"
              description="Your bank rejected the transaction."
              actions={<Button variant="secondary">Retry</Button>}
            />
            <StatusDisplay
              tone="neutral"
              icon={<Info />}
              title="No transfers yet"
              description="Your last 90 days will appear here."
            />
            <StatusDisplay
              tone="accent"
              title="You're all caught up"
              description="Nothing pending on your account."
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
