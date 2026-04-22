import figma from "@figma/code-connect";
import { Button, StatusDisplay } from "@fmorar/moody-ui";
import { CheckCircle2 } from "lucide-react";

figma.connect(
  StatusDisplay,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=27-118",
  {
    props: {
      tone: figma.enum("Tone", {
        Success: "success",
        Warning: "warning",
        Destructive: "destructive",
        Accent: "accent",
        Neutral: "neutral",
      }),
      title: figma.string("Title"),
      description: figma.string("Description"),
      icon: figma.boolean("HasIcon", {
        true: <CheckCircle2 />,
        false: undefined,
      }),
      actions: figma.boolean("HasActions", {
        true: <Button>Action</Button>,
        false: undefined,
      }),
    },
    example: ({ tone, title, description, icon, actions }) => (
      <StatusDisplay
        tone={tone}
        icon={icon}
        title={title}
        description={description}
        actions={actions}
      />
    ),
  },
);
