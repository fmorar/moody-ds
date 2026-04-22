import figma from "@figma/code-connect";
import { Avatar } from "@fmorar/moody-ui";

figma.connect(
  Avatar,
  "https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project?node-id=17-79",
  {
    props: {
      size: figma.enum("Size", { Sm: "sm", Md: "md", Lg: "lg" }),
      withImage: figma.boolean("WithImage"),
    },
    example: ({ size, withImage }) =>
      withImage ? (
        <Avatar
          size={size}
          src="https://i.pravatar.cc/64?img=12"
          alt="User avatar"
        />
      ) : (
        <Avatar size={size} alt="Moody Designer" />
      ),
  },
);
