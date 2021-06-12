/** @jsxImportSource @emotion/react */
import { breakpoints } from "@/styles/variable";
import { jsx, css } from "@emotion/react";
import facepaint from "facepaint";

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const extract = (regex) => {
  let styles = { mt: null, mb: null, ml: null, mr: null }
  const [type, number] = regex?.split("-")
  if (type == "mt") {
    styles.mt = `${.25 * parseInt(number, 10)}rem`
  }

  if (type == "mb") {
    styles.mb = `${.25 * parseInt(number, 10)}rem`
  }

  if (type == "ml") {
    styles.ml = `${.25 * parseInt(number, 10)}rem`
  }

  if (type == "mr") {
    styles.mr = `${.25 * parseInt(number, 10)}rem`
  }
  return styles
}

export default function Margin({ children, sm, md, lg, xl }) {
  let styles = {
    marginTop: [],
    marginBottom: [],
    marginLeft: [],
    marginRight: []
  }


  //example sm=mt-4 md-3

  let regexs = [sm, md, lg, xl]

  regexs.forEach(regex => {
    regex?.split(" ").forEach(selector => {
      const { mt, ml, mb, mr } = extract(selector)
      if (mt) styles.marginTop.push(mt)
      if (mb) styles.marginBottom.push(mb)
      if (ml) styles.marginLeft.push(ml)
      if (mr) styles.marginRight.push(mr)
    });
  })

  return (
    <div
      css={mq(styles)}
    >
      {children}
    </div>
  );
}
