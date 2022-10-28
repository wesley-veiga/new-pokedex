import React from "react";
import { ScrollView } from "react-native";
import { Sprites } from "../../reducers/pokemonReducer";
import { Image } from "./styled";

export const renderSprites = (sprites: Sprites) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      horizontal
    >
      {sprites.front_default && (
        <Image source={{ uri: sprites.front_default }} />
      )}
      {sprites.front_female && <Image source={{ uri: sprites.front_female }} />}
      {sprites.front_shiny && <Image source={{ uri: sprites.front_shiny }} />}
      {sprites.front_shiny_female && (
        <Image source={{ uri: sprites.front_shiny_female }} />
      )}
      {sprites.back_default && <Image source={{ uri: sprites.back_default }} />}
      {sprites.back_female && <Image source={{ uri: sprites.back_female }} />}
      {sprites.back_shiny && <Image source={{ uri: sprites.back_shiny }} />}
      {sprites.back_shiny_female && (
        <Image source={{ uri: sprites.back_shiny_female }} />
      )}
    </ScrollView>
  );
};
