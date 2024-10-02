import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input {
    border: none;
    background: none;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors["gray-750"]};
    color: ${({ theme }) => theme.colors.white};

    &.ReactModal__Body--open {
     overflow: hidden;
     
    }
  }
`;
