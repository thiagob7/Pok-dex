import React, { ReactNode } from "react";
import { Container } from "./styles";

interface InputProps {
  icon?: ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ onChange, icon }) => {
  return (
    <Container>
      <input
        type="search"
        placeholder="Buscar Pokemon..."
        onChange={onChange}
      />
      <div className="icon-input">{icon}</div>
    </Container>
  );
};
