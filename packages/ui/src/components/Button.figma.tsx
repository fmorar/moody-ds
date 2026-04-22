import figma from "@figma/code-connect";
import { Button } from "@fmorar/moody-ui";

figma.connect(
  Button,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=17-29",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
        Ghost: "ghost",
      }),
      size: figma.enum("Size", {
        Sm: "sm",
        Md: "md",
        Lg: "lg",
      }),
      disabled: figma.boolean("Disabled"),
    },
    example: ({ variant, size, disabled }) => (
      <Button variant={variant} size={size} disabled={disabled}>
        Button
      </Button>
    ),
  },
);
