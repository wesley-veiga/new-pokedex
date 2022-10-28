import React from "react";
import { Abilities } from "../../reducers/pokemonReducer";
import { capitalize } from "../../Utils/capitalize";

import { InfoText } from "./styled";

export const renderAbilities = (abilities: Array<Abilities>) => {
  return abilities?.length > 0 ? (
    <InfoText>
      {abilities.map((item, index) => [
        capitalize(item.ability.name),
        index < abilities.length - 1 && ", ",
      ])}
    </InfoText>
  ) : (
    <InfoText>Nenhuma habilidade</InfoText>
  );
};
