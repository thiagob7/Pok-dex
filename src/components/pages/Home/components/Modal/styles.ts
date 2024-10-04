import styled from "styled-components";

export const Container = styled.section`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;

  img {
    position: fixed;
    bottom: 70%;
    width: 250px;
    z-index: 0;
    object-fit: contain;
  }

  button {
    margin-left: auto;
    border: none;
    font-size: 1.25rem;
    background: none;
  }

  .stats-list {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }

  .stats-list li {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
  }

  .stat-name {
    font-weight: bold;
    color: ${({ theme }) => theme.colors["gray-750"]};
  }

  .stat-value {
    text-align: right;
    color: ${({ theme }) => theme.colors["gray-750"]};
  }
`;
