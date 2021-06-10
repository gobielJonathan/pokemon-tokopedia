/** @jsxImportSource @emotion/react */
import { ColorPrimary, ColorSecondary } from "@/styles/variable";
import { jsx, css } from "@emotion/react";

export function NavItem({ children }) {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
}
export function NavTab({ children, click,  active = false }) {
  let styles = {};
  if (active) {
    styles["borderBottom"] = `2px solid ${ColorPrimary}`;
    styles["color"] = ColorPrimary;
  }

  return (
    <div
      className="text-bold hover"
      onClick={click}
      css={{
        padding: ".5rem 1.5rem",
        color: ColorSecondary,
        ...styles,
      }}
    >
      {children}
    </div>
  );
}
