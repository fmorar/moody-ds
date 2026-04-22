import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, type RadioOption } from "./Radio";

const options: RadioOption[] = [
  {
    value: "one-time",
    label: "One-time transfer",
    description: "Send this amount once, today.",
  },
  {
    value: "recurring",
    label: "Recurring transfer",
    description: "Repeat on a schedule — daily, weekly, or monthly.",
  },
  {
    value: "scheduled",
    label: "Scheduled transfer",
    description: "Send on a specific future date.",
    disabled: true,
  },
];

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: { options, "aria-label": "Transfer type" },
  render: (args) => (
    <div className="w-96">
      <RadioGroup {...args} />
    </div>
  ),
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithDefault: Story = { args: { defaultValue: "one-time" } };
