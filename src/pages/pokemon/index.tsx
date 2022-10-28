import React, { useState } from "react";
import { Alert, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  addPokemon,
  Pokemon as TypePokemon,
  removePokemon,
} from "../../reducers/pokemonReducer";
import Container from "../../Components/Container";
import Button from "../../Components/Button";
import { capitalize } from "../../Utils/capitalize";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes";
import { stateReducer } from "../../reducers";
import { renderSprites } from "./renderSprites";
import { renderAbilities } from "./renderAbilities";
import { renderTypes } from "./renderTypes";
import { renderOthers } from "./renderOthers";
import { renderPokedexInfo } from "./renderPokedexInfo";
import {
  InfoText,
  LoadingContainer,
  PokemonInfoTitle,
  PokemonName,
  ScrollView,
} from "./styled";

type PokemonScreenProp = StackNavigationProp<RootStackParamList, "pokemon">;

type pokemonDetails = {
  loading: boolean;
  error: boolean;
  pokemon: TypePokemon;
};

const Pokemon = ({ route }: any) => {
  const navigation = useNavigation<PokemonScreenProp>();

  const dispatch = useDispatch();

  const team = useSelector(
    (state: stateReducer) => state.pokemonReducer.list_pokemons
  );

  const { pokemon, fromTeam } = route.params;

  const blankPokemon = {
    id: 0,
    height: 0,
    name: "",
    abilities: [],
    species: { name: "", url: "" },
    sprites: {},
    stats: [],
    types: [],
  };

  const [pokemonDetails, setPokemonDetails] = useState<pokemonDetails>({
    loading: true,
    error: false,
    pokemon: blankPokemon,
  });

  const getDetails = () => {
    if (fromTeam) {
      setPokemonDetails({
        ...pokemonDetails,
        pokemon: pokemon,
        loading: false,
      });
    } else {
      setPokemonDetails({ ...pokemonDetails, loading: true });
      fetch(pokemon.url)
        .then((res) => res.json())
        .then((res) => {
          setPokemonDetails({
            ...pokemonDetails,
            loading: false,
            pokemon: res,
          });
        })
        .catch((ex) => {
          setPokemonDetails({
            ...pokemonDetails,
            loading: false,
            error: true,
            pokemon: blankPokemon,
          });
        });
    }
  };

  const savePokemon = () => {
    const pokemonSelected = pokemonDetails.pokemon;
    if (team.findIndex((f: TypePokemon) => f.id == pokemonSelected.id) != -1) {
      Alert.alert("Ops!", "Esse pokémon já foi capturado!");
    } else {
      dispatch(addPokemon(pokemonSelected));
      Alert.alert("Eba!", "Pokémon capturado com sucesso!");
    }
  };

  const deletePokemon = () => {
    const remove = () => {
      dispatch(removePokemon(pokemonDetails.pokemon));
      navigation.goBack();
    };

    return Alert.alert("Atenção", "Deseja remover o pokémon da sua equipe?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => remove(),
      },
    ]);
  };

  useFocusEffect(
    React.useCallback(() => {
      getDetails();
    }, [])
  );

  const pokemonInfo = pokemonDetails.pokemon;

  return (
    <Container>
      {pokemonDetails.loading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="black" />
        </LoadingContainer>
      ) : (
        <>
          <ScrollView>
            {renderPokedexInfo(team.length)}
            <PokemonName>{capitalize(pokemonInfo.name)}</PokemonName>
            <PokemonInfoTitle>Imagens:</PokemonInfoTitle>
            {renderSprites(pokemonInfo.sprites)}
            <PokemonInfoTitle>Habilidades:</PokemonInfoTitle>
            {renderAbilities(pokemonInfo.abilities)}
            <PokemonInfoTitle>
              Tipo{pokemonInfo.types?.length > 0 && "s"}:
            </PokemonInfoTitle>
            {renderTypes(pokemonInfo.types)}
            <PokemonInfoTitle>Espécie:</PokemonInfoTitle>
            <InfoText>{capitalize(pokemonInfo.species.name)}</InfoText>
            <PokemonInfoTitle>Outras informações:</PokemonInfoTitle>
            {renderOthers(pokemonInfo.stats)}
          </ScrollView>
          <Button
            backgroundColor={fromTeam && "red"}
            onPress={fromTeam ? () => deletePokemon() : () => savePokemon()}
            title={fromTeam ? "Remover" : "Capturar"}
          />
        </>
      )}
    </Container>
  );
};

export default Pokemon;
