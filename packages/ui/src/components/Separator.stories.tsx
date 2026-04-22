import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "./Separator";

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  render: (args) => (
    <div className="flex h-24 w-80 items-center gap-4 text-sm text-foreground">
      <span>Left</span>
      <Separator {...args} />
      <span>Right</span>
    </div>
  ),
  args: { orientation: "vertical" },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {};
export const Horizontal: Story = {
  args: { orientation: "horizontal" },
  render: (args) => (
    <div className="flex w-80 flex-col gap-3 text-sm text-foreground">
      <span>Above</span>
      <Separator {...args} />
      <span>Below</span>
    </div>
  ),
};
