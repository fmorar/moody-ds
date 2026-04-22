import figma from "@figma/code-connect";
import { FormField, Input } from "@fmorar/moody-ui";

figma.connect(
  FormField,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=27-124",
  {
    props: {
      label: figma.string("Label"),
      hint: figma.boolean("HasHint", {
        true: figma.string("Hint"),
        false: undefined,
      }),
      required: figma.boolean("Required"),
    },
    example: ({ label, hint, required }) => (
      <FormField label={label} hint={hint} required={required}>
        <Input placeholder="Placeholder" />
      </FormField>
    ),
  },
);
