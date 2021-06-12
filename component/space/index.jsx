/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Flex from "../flex";

export default function Space({
  children,
  size = "sm",
  direction = "vertical",
}) {
  let finSize = "1rem";
  if (size == "md") {
    finSize = "1.5rem";
  }
  if (size == "lg") {
    finSize = "2rem";
  }

  if (size == "xl") {
    finSize = "2.5rem";
  }

  let margin = "";
  if (direction == "vertical") {
    margin = `${finSize} 0`;
  } else {
    margin = `0 0 ${finSize}`;
  }

  let styles = {}
  if (direction == "horizontal") {
    styles['overflowX'] = 'auto'
    styles['overflowY'] = 'hidden'
  }

  if (direction == "vertical") {
    styles['overflowY'] = 'auto'
    styles['overflowX'] = 'hidden'
  }
  return (
    <div
      css={{
        "& > *": {
          margin,
        },
        height : "100%",
        overflow : "auto",
        ...styles
      }}
    >
      {direction == "horizontal" && <Flex wrap={false} height={"full"}>{children}</Flex>}
      {direction == "vertical" && children}
    </div>
  );
}
