import React from "react";

import { Container } from "./styles";
import { FiX } from "react-icons/fi";

type ModalButtonCloseProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ModalButtonClose: React.FC<ModalButtonCloseProps> = ({
  ...rest
}) => {
  return (
    <Container>
      <button type="button" {...rest}>
        <FiX />
      </button>
    </Container>
  );
};
