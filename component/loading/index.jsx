/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Loading({ width = 32, height = 32 }) {
  return <div css={
    css`
      width: ${width}px;
      height: ${height}px;
      border-radius: 50%;
      border: 5px solid rgba(0,0,0,.2);
      border-top: 5px solid white;
      animation: spin 1s ease-in-out infinite;
  
  @keyframes spin{
      from {
          transform: rotate(0deg);
      }
      to {
          transform: rotate(360deg);
      }
  }
  
  
    `
  } ></div>;
}