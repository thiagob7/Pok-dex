/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { HTMLAttributes, useEffect } from "react";
import { Modal } from "~/components/common/Modal";
import { Container } from "./styles";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  stats: any[];
  image: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ModalPokemon: React.FC<ModalProps> = ({
  stats,
  image,
  isOpen,
  onClose,
  ...rest
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("ReactModal__Body--open");
    } else {
      document.body.classList.remove("ReactModal__Body--open");
    }

    return () => {
      document.body.classList.remove("ReactModal__Body--open");
    };
  }, [isOpen]);

  return (
    <Modal.Root
      isOpen={isOpen}
      {...rest}
      style={{
        content: {
          maxWidth: 500,
          height: 600,
          width: "100%",
        },
      }}
    >
      <Modal.Content className="content">
        <Container>
          <img src={image} alt="" />

          <button onClick={onClose}>X</button>

          <ul className="stats-list">
            {stats.map((stat: any, key: number) => (
              <li key={key}>
                <span className="stat-name">{stat.stat.name}</span>
                <span className="stat-value">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Modal.Content>
    </Modal.Root>
  );
};
