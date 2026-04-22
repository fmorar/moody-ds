import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select, type SelectOption } from "./Select";
import { Avatar } from "./Avatar";

const accounts: SelectOption[] = [
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
  {
    value: "usd",
    label: "USD account ··3001",
    description: "Business Checking — Wise",
    leading: <Avatar alt="USD" size="sm" />,
  },
  {
    value: "linked",
    label: "Linked Bank Account",
    description: "Click to connect",
    leading: <Avatar alt="Linked" size="sm" />,
  },
];

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    options: accounts,
    placeholder: "Select an account",
    "aria-label": "Account",
  },
  render: (args) => (
    <div className="w-80">
      <Select {...args} />
    </div>
  ),
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSelection: Story = {
  args: { defaultValue: "checking" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "savings" },
};

export const Invalid: Story = {
  args: { invalid: true },
};

export const SimpleOptions: Story = {
  args: {
    options: [
      { value: "daily", label: "Daily" },
      { value: "weekly", label: "Weekly" },
      { value: "monthly", label: "Monthly" },
    ],
    placeholder: "Choose frequency",
  },
};
