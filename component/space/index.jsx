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
    margin = `0 ${finSize}`;
  }

  return (
    <div
      css={{
        "& > *": {
          margin,
        },
        height : "100%",
        overflow : "auto"
      }}
    >
      {direction == "horizontal" && <Flex wrap={false} height={"full"}>{children}</Flex>}
      {direction == "vertical" && children}
    </div>
  );
}
