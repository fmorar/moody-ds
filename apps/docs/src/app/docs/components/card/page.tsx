import {
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@fmorar/moody-ui";
import { Preview } from "@/components/preview";
import { PropsTable, type PropRow } from "@/components/props-table";

const props: PropRow[] = [
  {
    name: "interactive",
    type: "boolean",
    default: "false",
    description:
      "Applies hover and focus-within border emphasis — use when the whole card is clickable.",
  },
];

export default function CardPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Card
        </h1>
        <p className="text-lg text-muted-foreground">
          Grouped surface with optional <code className="rounded bg-muted px-1 text-xs">CardHeader</code>,{" "}
          <code className="rounded bg-muted px-1 text-xs">CardBody</code>, and{" "}
          <code className="rounded bg-muted px-1 text-xs">CardFooter</code>.
        </p>
      </header>

      <Preview
        code={`<Card>
  <CardHeader>
    <CardTitle>One-time transfer</CardTitle>
    <CardDescription>Move funds between your accounts.</CardDescription>
  </CardHeader>
  <CardBody>…</CardBody>
  <CardFooter className="justify-end gap-2">
    <Button variant="secondary">Back</Button>
    <Button>Next</Button>
  </CardFooter>
</Card>`}
      >
        <Card className="w-96">
          <CardHeader>
            <CardTitle>One-time transfer</CardTitle>
            <CardDescription>
              Move funds between your accounts.
            </CardDescription>
          </CardHeader>
          <CardBody>
            <p className="text-sm text-muted-foreground">
              Card body content goes here.
            </p>
          </CardBody>
          <CardFooter className="justify-end gap-2">
            <Button variant="secondary">Back</Button>
            <Button>Next</Button>
          </CardFooter>
        </Card>
      </Preview>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Interactive
        </h2>
        <Preview
          code={`<Card interactive>
  <CardBody>…</CardBody>
</Card>`}
        >
          <Card interactive className="w-96 cursor-pointer">
            <CardBody className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Auto transfer rule
              </span>
              <span aria-hidden className="text-muted-foreground">
                ›
              </span>
            </CardBody>
          </Card>
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
