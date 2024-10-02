/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { Container } from "./styles";

export interface Type {
  type: {
    name: string;
  };
}

export interface CardProps {
  data: any;
  name: string;
  type: Type[];
  image: string;
}

export const Card: React.FC<CardProps> = ({ name, type, image }) => {
  return (
    <Container>
      <div className="coll-left">
        <h1>{name}</h1>

        {type.map((t: any, index: number) => (
          <span key={index} className={`type-${index + 1}`}>
            {t.type.name}
          </span>
        ))}
      </div>

      <img src={image} alt="" />
    </Container>
  );
};
