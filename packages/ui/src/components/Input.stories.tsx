import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "Enter a value" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLeading: Story = {
  args: { leading: "$", placeholder: "0.00", inputMode: "decimal" },
};

export const WithTrailing: Story = {
  args: { trailing: "USD", placeholder: "Amount" },
};

export const Invalid: Story = {
  args: { invalid: true, defaultValue: "bad@", placeholder: "email@domain.com" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Disabled input" },
};
