/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";

import { Container, Content } from "./styles";
import { Logo } from "~/components/common/Logo";
import { Input } from "~/components/common/Input";
import axios from "axios";
import { Card, CardProps } from "~/components/common/Card";
import { FaSearch } from "react-icons/fa";

export const Banner: React.FC = () => {
  const [pokemons, setPokemons] = useState<CardProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    const endpoints = Array.from(
      { length: 49 },
      (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}/`
    );

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res: any) => setPokemons(res))
      .catch((error) => console.error("Erro ao buscar Pokémon:", error));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.data.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Content>
        <Logo />

        <Input onChange={handleSearchChange} icon={<FaSearch />} />

        <div className="cards">
          {filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon, key) => (
              <div key={key}>
                <Card
                  name={pokemon.data.name}
                  type={pokemon.data.types}
                  image={pokemon.data.sprites.front_default}
                  data={undefined}
                />
              </div>
            ))
          ) : (
            <img className="img-off" src="/assets/off.svg" alt="" />
          )}
        </div>
      </Content>
    </Container>
  );
};
