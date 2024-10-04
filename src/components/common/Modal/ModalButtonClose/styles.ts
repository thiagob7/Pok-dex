import styled from "styled-components";

export const Container = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 6px;

    svg {
      font-size: 20px;
    }

    &:hover {
      opacity: 0.8;
      background-color: ${({ theme }) => theme.colors["red-300"]};

      svg {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
