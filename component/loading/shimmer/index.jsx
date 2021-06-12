/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const bar = css`
  height: 20px;
  background: #777;
  margin-top: 20px;
  animation: shimmer 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;

export default function Shimmer({ length = 3 }) {
  return (
    <>
      <div
      data-testid="shimmer"
        css={css`
          width: 0px;
          animation: fullView 0.5s forwards linear;

          @keyframes fullView {
            100% {
              width: 100%;
            }
          }
        `}
      >
        <div className={"border-radius"} css={bar}></div>
        {new Array(length).fill(0).map((_, idx) => (
          <div key={idx} className={"border-radius"} css={bar}></div>
        ))}
      </div>
    </>
  );
}
