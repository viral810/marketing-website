import { COLORS } from "@heydovetail/ui-components";
import { FONT_FAMILY } from "@heydovetail/website/constants";
import { cssRule } from "typestyle";

cssRule("*", {
  boxSizing: "border-box",
  "-webkit-tap-highlight-color": ["rgba(0,0,0,0)", "transparent"]
});

cssRule("html", {
  position: "relative"
});

cssRule("body", {
  color: COLORS.indigo,
  fontFamily: FONT_FAMILY,
  fontSize: "16px",
  fontWeight: 400,
  margin: 0,
  padding: 0,
  "-moz-osx-font-smoothing": "grayscale",
  "-webkit-font-smoothing": "antialiased"
});

cssRule("h1", {
  fontSize: "48px",
  fontWeight: 700,
  lineHeight: "56px",
  margin: 0,
  overflow: "hidden",
  textOverflow: "ellipsis"
});

cssRule("h2", {
  fontSize: "32px",
  fontWeight: 600,
  lineHeight: "40px",
  margin: 0,
  overflow: "hidden",
  textOverflow: "ellipsis"
});

cssRule("h3", {
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "32px",
  margin: 0
});

cssRule("h4", {
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "24px",
  margin: 0
});

cssRule("a", {
  color: "inherit",
  outline: "none",
  textDecoration: "none"
});

cssRule("p", {
  lineHeight: 1.75,
  margin: 0
});

cssRule("b, strong", {
  fontWeight: 600
});

cssRule("li", {
  lineHeight: "28px",
  margin: "8px 0"
});

cssRule("button, input, textarea", {
  fontFamily: FONT_FAMILY
});

cssRule("::-webkit-input-placeholder", {
  color: COLORS.dp40
});

// Thanks, Mozilla
cssRule("::-moz-focus-inner", {
  border: "0 !important"
});
