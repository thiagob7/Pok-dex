import React, { ReactNode } from "react";

import { Container } from "./styles";

import ReactModal, { Props } from "react-modal";

interface ModalRootProps extends Props {
  children: ReactNode;
}

export const ModalRoot: React.FC<ModalRootProps> = ({ children, ...rest }) => {
  return (
    <Container>
      <ReactModal {...rest}>{children}</ReactModal>
    </Container>
  );
};
