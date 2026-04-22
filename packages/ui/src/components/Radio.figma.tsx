import figma from "@figma/code-connect";
import { RadioGroup, type RadioOption } from "@fmorar/moody-ui";

const sampleOptions: RadioOption[] = [
  {
    value: "one-time",
    label: "One-time transfer",
    description: "Send this amount once, today.",
  },
  {
    value: "recurring",
    label: "Recurring transfer",
    description: "Repeat on a schedule.",
  },
  {
    value: "scheduled",
    label: "Scheduled transfer",
    description: "Send on a specific future date.",
    disabled: true,
  },
];

figma.connect(
  RadioGroup,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=27-42",
  {
    props: {},
    example: () => (
      <RadioGroup
        options={sampleOptions}
        defaultValue="one-time"
        aria-label="Transfer type"
      />
    ),
  },
);
