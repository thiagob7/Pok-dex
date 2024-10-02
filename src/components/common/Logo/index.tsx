import React from "react";
import { Container } from "./styles";

export const Logo: React.FC = () => {
  return (
    <Container className="logo">
      <img src="/assets/Logo.svg" alt="" />
    </Container>
  );
};
