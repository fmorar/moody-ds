import figma from "@figma/code-connect";
import { Heading } from "@fmorar/moody-ui";

figma.connect(
  Heading,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=27-25",
  {
    props: {
      children: figma.string("Text"),
      size: figma.enum("Size", {
        Display: "display",
        Xl: "xl",
        Lg: "lg",
        Md: "md",
        Sm: "sm",
        Xs: "xs",
      }),
      family: figma.boolean("Serif", {
        true: "serif",
        false: "sans",
      }),
    },
    example: ({ children, size, family }) => (
      <Heading size={size} family={family}>
        {children}
      </Heading>
    ),
  },
);
