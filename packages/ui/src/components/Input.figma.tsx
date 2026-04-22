import figma from "@figma/code-connect";
import { Input } from "@fmorar/moody-ui";

figma.connect(
  Input,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=17-84",
  {
    props: {
      placeholder: figma.string("Value"),
      hasLeading: figma.boolean("HasLeading"),
      hasTrailing: figma.boolean("HasTrailing"),
      invalid: figma.boolean("Invalid"),
      disabled: figma.boolean("Disabled"),
    },
    example: ({ placeholder, hasLeading, hasTrailing, invalid, disabled }) => (
      <Input
        placeholder={placeholder}
        leading={hasLeading ? "$" : undefined}
        trailing={hasTrailing ? "USD" : undefined}
        invalid={invalid}
        disabled={disabled}
      />
    ),
  },
);
