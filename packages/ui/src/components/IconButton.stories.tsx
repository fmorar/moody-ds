import type { Meta, StoryObj } from "@storybook/react-vite";
import { X, HelpCircle, Plus } from "lucide-react";
import { IconButton } from "./IconButton";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: { "aria-label": "Close", children: <X /> },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["ghost", "secondary", "primary"],
    },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ghost: Story = {};
export const Primary: Story = {
  args: { variant: "primary", "aria-label": "Add", children: <Plus /> },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    "aria-label": "Help",
    children: <HelpCircle />,
  },
};
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <IconButton aria-label="Close small" size="sm">
        <X />
      </IconButton>
      <IconButton aria-label="Close medium" size="md">
        <X />
      </IconButton>
      <IconButton aria-label="Close large" size="lg">
        <X />
      </IconButton>
    </div>
  ),
};
