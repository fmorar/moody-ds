import figma from "@figma/code-connect";
import { Avatar, Select, type SelectOption } from "@fmorar/moody-ui";

const sampleAccounts: SelectOption[] = [
  {
    value: "checking",
    label: "Checking ··2502",
    description: "$967.85",
    leading: <Avatar alt="Checking" size="sm" />,
  },
  {
    value: "savings",
    label: "Savings ··5679",
    description: "$1,020.00",
    leading: <Avatar alt="Savings" size="sm" />,
  },
];

figma.connect(
  Select,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=17-102",
  {
    props: {
      disabled: figma.boolean("Disabled"),
      invalid: figma.boolean("Invalid"),
      hasSelection: figma.boolean("HasSelection"),
    },
    example: ({ disabled, invalid, hasSelection }) => (
      <Select
        options={sampleAccounts}
        placeholder="Select an account"
        defaultValue={hasSelection ? "checking" : undefined}
        disabled={disabled}
        invalid={invalid}
        aria-label="Account"
      />
    ),
  },
);
