import figma from "@figma/code-connect";
import { Switch } from "@fmorar/moody-ui";

figma.connect(
  Switch,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=17-64",
  {
    props: {
      checked: figma.enum("State", { Off: false, On: true }),
      disabled: figma.boolean("Disabled"),
    },
    example: ({ checked, disabled }) => (
      <Switch
        defaultChecked={checked}
        disabled={disabled}
        aria-label="Toggle setting"
      />
    ),
  },
);
