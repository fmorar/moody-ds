import figma from "@figma/code-connect";
import { SegmentedControl } from "@fmorar/moody-ui";

const frequencyOptions = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
];

figma.connect(
  SegmentedControl,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=27-67",
  {
    props: {
      defaultValue: figma.enum("Selected", {
        Daily: "daily",
        Weekly: "weekly",
        Monthly: "monthly",
      }),
    },
    example: ({ defaultValue }) => (
      <SegmentedControl
        options={frequencyOptions}
        defaultValue={defaultValue}
        aria-label="Frequency"
      />
    ),
  },
);
