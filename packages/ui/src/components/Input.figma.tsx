import figma from "@figma/code-connect";
import { Input } from "@fmorar/moody-ui";

figma.connect(
  Input,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=17-84",
  {
    props: {
      placeholder: figma.string("Value"),
      leading: figma.boolean("HasLeading", {
        true: "$",
        false: undefined,
      }),
      trailing: figma.boolean("HasTrailing", {
        true: "USD",
        false: undefined,
      }),
      invalid: figma.boolean("Invalid"),
      disabled: figma.boolean("Disabled"),
    },
    example: ({ placeholder, leading, trailing, invalid, disabled }) => (
      <Input
        placeholder={placeholder}
        leading={leading}
        trailing={trailing}
        invalid={invalid}
        disabled={disabled}
      />
    ),
  },
);
