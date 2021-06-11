/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

export default function Flex({ children, centerV = false, centerH = false, height = 'auto', wrap= true }) {
  let styles = {};

  if (centerH) {
    styles["justifyContent"] = "center";
  }
  if (centerV) {
    styles["alignItems"] = "center";
  }

  if (height == 'full') {
      styles['height'] = '100%'
  }
 
  return (
    <div
      css={{
        display: "flex",
        flexWrap: wrap ? "wrap" :"nowrap",
        ...styles,
      }}
    >
      {children}
    </div>
  );
}
