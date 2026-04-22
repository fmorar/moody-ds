import figma from "@figma/code-connect";
import { Plus } from "lucide-react";
import { IconButton } from "@fmorar/moody-ui";

figma.connect(
  IconButton,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=17-57",
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
      <IconButton
        variant={variant}
        size={size}
        disabled={disabled}
        aria-label="Add"
      >
        <Plus />
      </IconButton>
    ),
  },
);
