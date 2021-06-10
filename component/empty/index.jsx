/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Image from "next/image";

export default function Empty({ }) {
  return <div css={{
      display : "flex",
      justifyContent : "center",
      alignItems :"center",
      flexDirection : "column"
  }}>
      <Image alt="empty" src="/assets/icon/empty.svg" width={250} height={250}/>
      <p>Sorry We don't have data about it.</p>
  </div>;
}
