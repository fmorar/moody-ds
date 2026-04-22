import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckCircle2, AlertTriangle, Info, XCircle } from "lucide-react";
import { StatusDisplay } from "./StatusDisplay";
import { Button } from "./Button";

const meta = {
  title: "Components/StatusDisplay",
  component: StatusDisplay,
  tags: ["autodocs"],
  args: { title: "Your transfer is on the way" },
} satisfies Meta<typeof StatusDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    tone: "success",
    icon: <CheckCircle2 />,
    description: "The money should arrive within minutes.",
    actions: (
      <>
        <Button variant="secondary">Make another transfer</Button>
        <Button>Go to dashboard</Button>
      </>
    ),
  },
};

export const Warning: Story = {
  args: {
    tone: "warning",
    icon: <AlertTriangle />,
    title: "Review your amount",
    description: "Double-check before confirming.",
  },
};

export const Destructive: Story = {
  args: {
    tone: "destructive",
    icon: <XCircle />,
    title: "Transfer failed",
    description: "Your bank rejected the transaction. Try again in a moment.",
    actions: <Button variant="secondary">Retry</Button>,
  },
};

export const Empty: Story = {
  args: {
    tone: "neutral",
    icon: <Info />,
    title: "No transfers yet",
    description: "Your last 90 days of transfers will appear here.",
  },
};
