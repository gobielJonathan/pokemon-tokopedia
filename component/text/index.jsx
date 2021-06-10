/** @jsxImportSource @emotion/react */
import { ColorRed } from "@/styles/variable";
import { jsx, css } from "@emotion/react";

export function TextRed({ children }) {
  return (
    <div
      css={{
        color: ColorRed,
      }}
    >
      {children}
    </div>
  );
}
