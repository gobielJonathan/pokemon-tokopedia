/** @jsxImportSource @emotion/react */
import { ColorPrimary, ColorRed } from "@/styles/variable";
import { jsx, css } from "@emotion/react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Toast({ children, show = true, type = "primary" }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  

  let styles = {}
  if (type === 'primary') {
      styles['backgroundColor'] = ColorPrimary
      styles['color'] = 'white'
  }

  if (type === 'danger') {
    styles['backgroundColor'] = ColorRed
    styles['color'] = 'white'
  }

  return mounted
    ? ReactDOM.createPortal(
        <div
          css={{
            borderRadius: "4px",
            position: "fixed",
            top: 80,
            right: 40,
            transition: "all .2s linear",
            color : "white",
            zIndex: 50,
            opacity: show ? 1 : 0,
            padding: ".5rem",
            boxShadow: "0 0 1px 1px rgba(0,0,0,.1)",
            ...styles
          }}
        >
          {children}
        </div>,
        document.body
      )
    : null;
}
