/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { breakpoints } from "@/styles/variable";
import facepaint from "facepaint";

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export default function Container({ children }) {
  return (
    <div
      css={mq({
        width: "100%",
        margin :"0 auto",
        height : "100%",
        maxWidth: ["calc(100% - 40px)", "calc(100% - 40px)", "800px", "1000px"],
      })}
    >
      {children}
    </div>
  );
}
