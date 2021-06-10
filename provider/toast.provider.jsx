import Toast from "@/component/toast";
import { createContext, useEffect, useState } from "react";

export const ToastContext = createContext({
  open: (text) => {},
  close: () => {},
});
let timer = null;
export default function ToastProvider({ children }) {
  const [text, setText] = useState("");
  const [type, settype] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setText("");
        setShow(false);
      }, 2800);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [show]);

  const open = (text, type) => {
    if (!show) {
      close();
    }
    setText(text);
    settype(type);
    setShow(true);
  };

  const close = () => {
    setText("");
    settype("");
    setShow(false);
  };

  return (
    <ToastContext.Provider
      value={{
        open,
        close,
      }}
    >
      <Toast type={type} show={show}>
        {text}
      </Toast>
      {children}
    </ToastContext.Provider>
  );
}
