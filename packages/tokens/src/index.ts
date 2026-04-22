export const navy = {
  50: "#e6e7ef",
  100: "#ccdfff",
  200: "#99bfff",
  300: "#669eff",
  400: "#337eff",
  500: "#005eff",
  600: "#0047bf",
  700: "#082183",
  800: "#0a1264",
  900: "#05081c",
} as const;

export const neutral = {
  0: "#ffffff",
  50: "#f7f7f8",
  100: "#f0f0f1",
  200: "#e6e7ef",
  300: "#ced0e0",
  400: "#c8c9c7",
  500: "#76787b",
  600: "#55565a",
  700: "#3b4183",
  800: "#272829",
  900: "#000000",
} as const;

export const semantic = {
  danger: "#ba0c2f",
  warning: "#e35205",
} as const;

export const space = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
} as const;

export const radius = {
  none: "0",
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  full: "9999px",
} as const;

export const duration = {
  instant: "80ms",
  fast: "150ms",
  base: "200ms",
  slow: "300ms",
  slower: "500ms",
} as const;

export const easing = {
  linear: "linear",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0.16, 1, 0.3, 1)",
  inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

export const zIndex = {
  base: 0,
  raised: 10,
  sticky: 20,
  dropdown: 40,
  overlay: 50,
  modal: 60,
  popover: 70,
  toast: 80,
} as const;

export const tokens = {
  navy,
  neutral,
  semantic,
  space,
  radius,
  duration,
  easing,
  zIndex,
} as const;
export type Tokens = typeof tokens;
