import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  margin-top: 2.5rem;
  width: 100%;
  max-width: 600px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.colors["gray-50"]};
  border-radius: 10px;

  input {
    flex: 1;
    width: 100%;

    height: 50px;
    color: ${({ theme }) => theme.colors.white};

    padding-left: 1rem;
    box-sizing: border-box;
    font-size: 1.125rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors["white"]};
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      font-size: 1.125rem;
      font-weight: 300;
    }
  }

  .icon-input {
    color: ${({ theme }) => theme.colors["white"]};
    text-align: center;
    padding-right: 1.5rem;
    padding-top: 0.35rem;
    font-size: 17px;
  }
`;
