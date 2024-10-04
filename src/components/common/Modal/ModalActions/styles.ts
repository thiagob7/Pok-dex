import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 16px;
  position: sticky;
  bottom: -16px;
  background: ${({ theme }) => transparentize(0.2, theme.colors["gray-700"])};
  backdrop-filter: blur(2px);
  padding: 8px 16px;
  margin: 0 -16px;
`;
