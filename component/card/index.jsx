/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Card({ click, children }) {
  return (
    <div
      className="card hover"
      onClick={click}
      css={css`
        border-radius: 5px;
        padding: 1rem;
        position: relative;
        box-shadow: 0 0 3.5px 1px rgb(0, 0, 0, 0.1);
      `}
    >
      {children}
    </div>
  );
}
