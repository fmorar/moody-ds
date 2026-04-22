import figma from "@figma/code-connect";
import {
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@fmorar/moody-ui";

figma.connect(
  Card,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=17-112",
  {
    props: {
      interactive: figma.boolean("Interactive"),
      header: figma.boolean("HasHeader", {
        true: (
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>Card description</CardDescription>
          </CardHeader>
        ),
        false: undefined,
      }),
      footer: figma.boolean("HasFooter", {
        true: (
          <CardFooter className="justify-end">
            <Button>Next</Button>
          </CardFooter>
        ),
        false: undefined,
      }),
    },
    example: ({ interactive, header, footer }) => (
      <Card interactive={interactive}>
        {header}
        <CardBody>Card body content.</CardBody>
        {footer}
      </Card>
    ),
  },
);
