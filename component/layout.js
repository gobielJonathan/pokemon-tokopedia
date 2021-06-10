import { useEffect } from "react";
import Header from "./header";


const debounce = (fn) => {
    let frame;
    return (...params) => {
        if (frame) {
            cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
            fn(...params);
        });

    }
};


export default function Layout({ children }) {
    const storeScroll = () => {
        document.documentElement.dataset.scroll = window.scrollY;
    };

    useEffect(() => {
        document.addEventListener("scroll", debounce(storeScroll), {
            passive: true,
        });
        document.documentElement.dataset.scroll = 0;
        return () => {
            document.removeEventListener("scroll", debounce(storeScroll), {
                passive: true,
            });
        };
    }, []);


    return (
        <>
            <Header />
            <main style={{ margin: "50px 0" }}>{children}</main>
        </>
    )
}