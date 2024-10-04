import React, { ReactNode } from "react";

import { Container } from "./styles";

interface ModalActionsProps {
  children: ReactNode;
  align?: "left" | "center" | "right";
}

export const ModalActions: React.FC<ModalActionsProps> = ({
  children,
  align = "center",
}) => {
  return (
    <Container
      style={{
        justifyContent: align,
      }}
    >
      {children}
    </Container>
  );
};
