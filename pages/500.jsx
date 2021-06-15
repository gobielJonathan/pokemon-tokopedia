/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Image from 'next/image'

export default function Index() {
    return <div css={{

    }}>
        <Image src={'/assets/icon/server_down.svg'} alt="img-server-down" width={400} height={400} />
        <p>We're so sorry, something happen in server</p>
    </div>
}