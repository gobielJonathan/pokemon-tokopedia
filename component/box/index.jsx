/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
export function RoundedBox({ children, width = 32, height = 32, click }) {
  return (
    <div
      data-testid="rounded-box"
      onClick={click}
      css={css`
        width: ${width}px;
        height: ${height}px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 1px 1px rgb(0 0 0 / 20%);
      `}
    >
      {children}
    </div>
  );
}
