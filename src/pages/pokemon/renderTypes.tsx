import React from "react";
import { PokemonTypes } from "../../reducers/pokemonReducer";
import { capitalize } from "../../Utils/capitalize";

import { InfoText } from "./styled";

export const renderTypes = (types: Array<PokemonTypes>) => {
  return types?.length > 0 ? (
    <InfoText>
      {types.map((item, index) => [
        capitalize(item.type.name),
        index < types?.length - 1 && ", ",
      ])}
    </InfoText>
  ) : (
    <InfoText>Nenhum tipo</InfoText>
  );
};
