import React from "react";

import { useTheme } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";
import { Container } from "./styles";

interface ModalTitleProps {
  text: string;
  color?: keyof DefaultTheme["colors"];
}

export const ModalTitle: React.FC<ModalTitleProps> = ({ text, color }) => {
  const theme = useTheme();
  return (
    <Container>
      <h2
        style={{
          ...(color && {
            color: theme?.colors[color],
          }),
        }}
      >
        {text}
      </h2>
    </Container>
  );
};
