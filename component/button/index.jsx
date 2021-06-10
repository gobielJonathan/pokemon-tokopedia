/** @jsxImportSource @emotion/react */
import { ColorPrimary } from "@/styles/variable";
import { jsx, css } from "@emotion/react";

export function ButtonPrimary({ type = "button", children, click }) {
  return (
    <button
      type={type}
      className="border-radius hover"
      onClick={click}
      css={css`
        background-color: ${ColorPrimary};
        color: white;
        border: none;
        padding: 0.5rem 2rem;
      `}
    >
      {children}
    </button>
  );
}



export function CircleButtonPrimary({ type = "button", children, click }) {
  return (
    <button
      type={type}
      className="border-radius hover"
      onClick={click}
      css={css`
        background-color: ${ColorPrimary};
        border-radius :50%;
        color: white;
        width : 32px;
        height: 32px;
        border: none;
      `}
    >
      {children}
    </button>
  );
}

