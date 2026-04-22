import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";
import { Button } from "./Button";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>One-time transfer</CardTitle>
        <CardDescription>Move funds between your accounts.</CardDescription>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-muted-foreground">
          Card body content goes here.
        </p>
      </CardBody>
      <CardFooter className="justify-end gap-2">
        <Button variant="secondary">Back</Button>
        <Button>Next</Button>
      </CardFooter>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card interactive className="w-96 cursor-pointer">
      <CardBody className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">
          Auto transfer rule
        </span>
        <span aria-hidden className="text-muted-foreground">
          ›
        </span>
      </CardBody>
    </Card>
  ),
};
