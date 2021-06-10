/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { breakpoints } from "@/styles/variable";
import facepaint from "facepaint";

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export default function Grid({ col, sm, md, lg, xl,children }) {
  let cols = [];

  if (col) {
    let final = `repeat(${col},1fr)`;
    cols = [final, final, final, final];
  } else {
    if (sm) {
      cols.push(`repeat(${sm}, 1fr)`)
    }

    if (md) {
      cols.push(`repeat(${md}, 1fr)`)
    }

    if (lg) {
      cols.push(`repeat(${lg}, 1fr)`)
    }

    if (xl) {
      cols.push(`repeat(${xl}, 1fr)`)
    }
  }

  return (
    <div
      css={mq({
        display: "grid",
        gridTemplateColumns: cols,
        gap: ["1rem 0", '1rem'],
      })}
    >
      {children}
    </div>
  );
}
