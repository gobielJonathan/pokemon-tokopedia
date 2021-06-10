/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Heading({ size = 1, children }) {
  return (
    <div
      className="text-bold"
      css={css`
        font-size: ${1 * size}rem;
      `}
    >
      {children}
    </div>
  );
}
