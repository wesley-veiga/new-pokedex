import React from "react";
import { ScrollView } from "react-native";
import { Stats } from "../../reducers/pokemonReducer";
import { capitalize } from "../../Utils/capitalize";
import { InfoText, Text, PokemonStatusContainer } from "./styled";

export const renderOthers = (stats: Array<Stats>) => {
  return stats?.length > 0 ? (
    <ScrollView
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      horizontal
    >
      {stats.map((item, index) => [
        <PokemonStatusContainer key={index}>
          <InfoText>{item.base_stat}</InfoText>
          <Text>{capitalize(item.stat.name)}</Text>
        </PokemonStatusContainer>,
      ])}
    </ScrollView>
  ) : (
    <InfoText>Nenhuma informação adicional disponível</InfoText>
  );
};
