export type NavItem = { title: string; href: string };
export type NavGroup = { title: string; items: NavItem[] };

export const docsNav: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Tokens",
    items: [
      { title: "All tokens", href: "/docs/tokens" },
      { title: "Colors", href: "/docs/tokens/colors" },
      { title: "Typography", href: "/docs/tokens/typography" },
      { title: "Spacing", href: "/docs/tokens/spacing" },
      { title: "Radius", href: "/docs/tokens/radius" },
      { title: "Effects & motion", href: "/docs/tokens/effects" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Card", href: "/docs/components/card" },
      { title: "FormField", href: "/docs/components/form-field" },
      { title: "Heading", href: "/docs/components/heading" },
      { title: "IconButton", href: "/docs/components/icon-button" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Label", href: "/docs/components/label" },
      { title: "RadioGroup", href: "/docs/components/radio-group" },
      { title: "SegmentedControl", href: "/docs/components/segmented-control" },
      { title: "Select", href: "/docs/components/select" },
      { title: "Separator", href: "/docs/components/separator" },
      { title: "StatusDisplay", href: "/docs/components/status-display" },
      { title: "Switch", href: "/docs/components/switch" },
    ],
  },
  {
    title: "Patterns",
    items: [{ title: "Transfer flow", href: "/docs/patterns/transfer" }],
  },
];
