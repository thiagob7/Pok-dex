import React from "react";

import { Container } from "./styles";

interface ModalTitleProps {
  text: string;
}

export const ModalDescription: React.FC<ModalTitleProps> = ({ text }) => {
  return (
    <Container>
      <span>{text}</span>
    </Container>
  );
};
