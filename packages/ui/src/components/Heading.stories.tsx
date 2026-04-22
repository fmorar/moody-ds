import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: { children: "Transfer funds" },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["display", "xl", "lg", "md", "sm", "xs"],
    },
    family: { control: "inline-radio", options: ["sans", "serif"] },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Display: Story = {
  args: { size: "display", children: "$10.00" },
};

export const DisplaySerif: Story = {
  args: { size: "display", family: "serif", children: "$10.00" },
};

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Heading size="display">Display</Heading>
      <Heading size="xl">Extra large</Heading>
      <Heading size="lg">Large</Heading>
      <Heading size="md">Medium</Heading>
      <Heading size="sm">Small</Heading>
      <Heading size="xs">Extra small</Heading>
    </div>
  ),
};
