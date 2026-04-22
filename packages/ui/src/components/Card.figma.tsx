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
      hasHeader: figma.boolean("HasHeader"),
      hasFooter: figma.boolean("HasFooter"),
      interactive: figma.boolean("Interactive"),
    },
    example: ({ hasHeader, hasFooter, interactive }) => (
      <Card interactive={interactive}>
        {hasHeader ? (
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>Card description</CardDescription>
          </CardHeader>
        ) : null}
        <CardBody>Card body content.</CardBody>
        {hasFooter ? (
          <CardFooter className="justify-end">
            <Button>Next</Button>
          </CardFooter>
        ) : null}
      </Card>
    ),
  },
);
