import { transparentize } from "polished";
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

  .MuiPagination-root {
  width: 100%;


.MuiPaginationItem-ellipsis {

  color: ${({ theme }) => theme.colors.white};
}

.MuiButtonBase-root  {


  color: ${({ theme }) => theme.colors.white};

  &.Mui-selected {
    background: ${({ theme }) => theme.colors["red-500"]};
    pointer-events: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors["red-300"]};
  }
}
}

.ReactModalPortal {  
.ReactModal__Overlay {
  background: ${({ theme }) =>
    transparentize(0.01, theme.colors["gray-50"])} !important;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  backdrop-filter: blur(5px);
}

.ReactModal__Content {
  
  position: initial !important;
  min-width: 300px;
  background: ${({ theme }) => theme.colors["gray-700"]}  !important;
  border: none !important;
  box-shadow: 2px 4px 10px rgba(0,0,0,0.2);
  border-radius: 8px !important;
  overflow-y: auto !important;
  max-height: calc(100vh) !important;
  padding: 16px !important;
}
}

  body {
    background: ${({ theme }) => theme.colors["gray-750"]};
    color: ${({ theme }) => theme.colors.white};

    &.ReactModal__Body--open {
     overflow: hidden;
     
    }
  }
`;
