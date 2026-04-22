import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "./FormField";
import { Input } from "./Input";

const meta = {
  title: "Components/FormField",
  component: FormField,
  tags: ["autodocs"],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHint: Story = {
  args: {
    label: "Amount",
    hint: "Whole dollars only",
    className: "w-72",
  },
  render: (args) => (
    <FormField {...args}>
      <Input leading="$" placeholder="0.00" inputMode="decimal" />
    </FormField>
  ),
};

export const WithError: Story = {
  args: {
    label: "Email",
    error: "Enter a valid email address",
    className: "w-72",
  },
  render: (args) => (
    <FormField {...args}>
      <Input defaultValue="bad@" invalid />
    </FormField>
  ),
};

export const Required: Story = {
  args: { label: "Account name", required: true, className: "w-72" },
  render: (args) => (
    <FormField {...args}>
      <Input placeholder="e.g. Checking" />
    </FormField>
  ),
};
