/** @jsxImportSource @emotion/react */
import { ColorPrimary, ColorSecondary } from "@/styles/variable";
import { jsx, css } from "@emotion/react";

export function NavItem({ children ,click,  active = false}) {
  let styles = {};
  if (active) {
    styles["borderBottom"] = `2px solid ${ColorPrimary}`;
    styles["color"] = ColorPrimary;
  }
  
  return (
    <div
onClick={click}
      css={{
        display: "flex",
        alignItems: "center",
        color: ColorSecondary,
        height: "100%",
        padding: ".5rem 1.5rem",
        ...styles
      }}
    >
      {children}
    </div>
  );
}
export function NavTab({ children, click, }) {

  return (
    <div
      className="text-bold hover"
      onClick={click}
    >
      {children}
    </div>
  );
}
