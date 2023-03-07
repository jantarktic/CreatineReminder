import { createGlobalStyle } from "styled-components";
import MSSansSerif8ptTtf from "./MSSansSerif8pt.ttf"

export default createGlobalStyle`
  @font-face {
    font-family: 'MS Sans Serif';
    src: local('MS Sans Serif 8pt'), local('MSSansSerif8pt'),
    url(${MSSansSerif8ptTtf}) format('truetype');
  }`;