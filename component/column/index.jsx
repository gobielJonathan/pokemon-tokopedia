/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { breakpoints } from "@/styles/variable";
import facepaint from "facepaint";

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export default function Col({ col, sm, md, lg, xl, children }) {
  let width = [];

  if (col) {
    let final = `calc(100% / 12 * ${col})`;
    width = [final, final, final, final];
  } else {
    if (sm) {
      width.push(`calc(100% / 12 * ${sm})`);
    }

    if (md) {
      width.push(`calc(100% / 12 * ${md})`);
    }

    if (lg) {
      width.push(`calc(100% / 12 * ${lg})`);
    }

    if (xl) {
      width.push(`calc(100% / 12 * ${xl})`);
    }
  }

  return (
    <div
      css={mq({
        width,
        height : "100%",
        padding : "0 .5rem"
      })}
    >
      {children}
    </div>
  );
}
