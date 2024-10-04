import React, { HTMLAttributes, ReactNode } from "react";

import { Container } from "./styles";

interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  ...rest
}) => {
  return <Container {...rest}>{children}</Container>;
};
