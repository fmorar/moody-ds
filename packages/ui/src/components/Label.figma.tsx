import figma from "@figma/code-connect";
import { Label } from "@fmorar/moody-ui";

figma.connect(
  Label,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=27-6",
  {
    props: {
      children: figma.string("Text"),
      required: figma.boolean("Required"),
    },
    example: ({ children, required }) => (
      <Label required={required}>{children}</Label>
    ),
  },
);
