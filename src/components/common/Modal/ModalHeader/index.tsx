import React, { ReactNode } from "react";

import { Container } from "./styles";

interface ModalHeaderProps {
  children: ReactNode;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
