import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: -16px;
  background: ${({ theme }) => transparentize(0.2, theme.colors["gray-700"])};
  backdrop-filter: blur(2px);
  padding: 8px 16px;
  margin: 0 -16px;
  z-index: 100;
`;
