// src/styles/GlobalStyles.tsx
'use client';

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* --- Reset Básico e Fontes --- */
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  /* --- CORREÇÃO DEFINITIVA PARA O REACT-SLICK --- */

  /* Garante que o container de cada slide tenha um espaçamento consistente */
  .slick-slide > div {
  margin: 0 15px;
}
.slick-slide {
  height: inherit !important;
}
.slick-track {
  display: flex !important;
  align-items: stretch;
}
`;

export default GlobalStyles;