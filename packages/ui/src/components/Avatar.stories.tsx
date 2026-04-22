import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: { alt: "Fabian Mora", size: "md" },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar alt="Fabian Mora" size="sm" />
      <Avatar alt="Fabian Mora" size="md" />
      <Avatar alt="Fabian Mora" size="lg" />
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/64?img=12",
    alt: "Sample person",
  },
};

export const ImageFallback: Story = {
  args: { src: "https://broken.example/404.png", alt: "Jane Doe" },
};
