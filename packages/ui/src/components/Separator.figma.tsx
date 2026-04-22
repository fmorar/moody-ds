import figma from "@figma/code-connect";
import { Separator } from "@fmorar/moody-ui";

figma.connect(
  Separator,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=17-69",
  {
    props: {
      orientation: figma.enum("Orientation", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
    },
    example: ({ orientation }) => <Separator orientation={orientation} />,
  },
);
