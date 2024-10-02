import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  margin-top: 1.25rem;
  width: 100%;
  max-width: 18.125rem;

  height: 9.8125rem;
  background: ${({ theme }) => theme.colors["white"]};
  padding: 1.25rem;
  border-radius: 10px;
  gap: 0.3125rem;
  justify-content: space-between;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
  }

  .coll-left {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${({ theme }) => theme.colors["gray-750"]};

    h1 {
      font-size: 22px;
      font-weight: 900;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto;
      font-style: italic;
      width: 100%;
    }

    span.type-1,
    .type-2 {
      text-align: center;
      margin-top: 5px;
      font-size: 10px;
      font-weight: 400;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto;

      width: 55px;
      height: 16px;
      border-radius: 32px;
      padding: 1px 12px;

      background: ${({ theme }) => theme.colors["gray-100"]};
    }
  }
`;
