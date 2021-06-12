/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

import { Global } from "@emotion/react";

export const GlobalStyles = () => <Global styles={
  css`
  @font-face {
      font-family: 'fm-regular';
      src: url(/assets/fonts/Roboto/Roboto-Regular.ttf);
    }
    
    
    @font-face {
      font-family: 'fm-bold';
      src: url(/assets/fonts/Roboto/Roboto-Bold.ttf);
    }
    
    @font-face {
      font-family: 'fm-light';
      src: url(/assets/fonts/Roboto/Roboto-Light.ttf);
    }
    
    @font-face {
      font-family: 'fm-italic';
      src: url(/assets/fonts/Roboto/Roboto-Italic.ttf);
    }
    
    html {
      scroll-behavior: smooth
    }
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: 'fm-regular', Arial, Helvetica, sans-serif
    }
    
    body {
      font-size: 14px;
    }
    
    a {
      color: inherit;
      text-decoration: none;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0
    }
    
    
    .flex-wrap {
      flex-wrap: wrap
    }
    
    .hover:hover {
      cursor: pointer;
    }
    
    .position-relative {
      position: relative !important;
    }
    
    .text-bold {
      font-family: 'fm-bold'
    }
    
    .d-flex {
      display: flex
    }
    
    .justify-content-center {
      justify-content: center
    }
    
    .border-radius {
      border-radius: 5px;
    }
    
    .ml-auto {
      margin-left: auto;
    }
    
    .mr-auto {
      margin-right: auto;
    }
    
    .h-100 {
      height: 100%;
    }
    
    .w-100 {
      width: 100%;
    }
    
    .align-items-center {
      align-items: center;
    }
    
    .text-underline {
      text-decoration: underline !important;
    }
    
    .text-center {
      text-align: center
    }
    
    .text-left {
      text-align: left
    }
    
    .w-100 {
      width: 100%
    }
    .rounded-circle{
      border-radius: 50%;
    }
    
    .overflow-x{
      overflow-x: auto
    }
    
    .overflow-y{
      overflow-y: auto
    }
  `
} />