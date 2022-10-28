import React from "react";
import { PokedexInfoContainer, PokedexNumberText, PokedexText } from "./styled";

export const renderPokedexInfo = (numberOfPokemons: number) => {
  return (
    <PokedexInfoContainer>
      <PokedexNumberText number={numberOfPokemons}>
        {numberOfPokemons === 0 ? "Nenhum" : numberOfPokemons}
      </PokedexNumberText>
      <PokedexText>
        Pokémon{numberOfPokemons > 1 && "s"}
        {"\n"}capturado{numberOfPokemons > 1 && "s"}
      </PokedexText>
    </PokedexInfoContainer>
  );
};
