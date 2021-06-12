/** @jsxImportSource @emotion/react */
import { ColorPrimary } from "@/styles/variable";
import { jsx, css } from "@emotion/react";

export default function Badge({ children, position }) {
  let pos = {};

  if (position === "left") {
    pos = { left: 10, top: 10 };
  }

  if (position == "right") {
    pos = { right: 10, top: 10 };
  }

  return (
    <div
      css={{
        backgroundColor: ColorPrimary,
        color: "white",
        width: "fit-content",
        borderRadius: " 15px",
        padding: "0.25rem 1rem",
        position: "absolute",
        ...pos,
      }}
    >
      {children}
    </div>
  );
}
