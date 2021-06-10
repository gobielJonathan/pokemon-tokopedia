/** @jsxImportSource @emotion/react */
import { ColorRed } from "@/styles/variable";
import { jsx, css } from "@emotion/react";

export default function TextError({
    children
}) {
    return <small css={{
        color : ColorRed
    }}>{children}</small>
}