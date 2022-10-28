import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Alert, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import { stateReducer } from "../../reducers";
import { Pokemon, removePokemon } from "../../reducers/pokemonReducer";
import { capitalize } from "../../Utils/capitalize";
import { RootStackParamList } from "../routes";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  EmptyContainer,
  EmptyImage,
  EmptyText,
  HeaderContainer,
  HeaderText,
  HeaderTitle,
  PokemonCardContainer,
  PokemonCardNameContainer,
  PokemonCardNameText,
  PokemonCardImage,
  PokemonCardButtonContainer,
  PokemonCardDeleteButton,
} from "./styled";

type TeamScreenProp = StackNavigationProp<RootStackParamList, "team">;

type Item = {
  item: Pokemon;
  index: number;
};

const Team = () => {
  const navigation = useNavigation<TeamScreenProp>();

  const dispatch = useDispatch();

  const team = useSelector(
    (state: stateReducer) => state.pokemonReducer.list_pokemons
  );

  const renderHeader = () => {
    return (
      <HeaderContainer>
        <HeaderTitle>Minha{"\n"}Pokédex</HeaderTitle>
        <HeaderText>Total: {team.length}</HeaderText>
      </HeaderContainer>
    );
  };

  const deletePokemon = (pokemon: Pokemon) => {
    const confirmationDelete = () => dispatch(removePokemon(pokemon));

    return Alert.alert(
      "Atenção",
      "Deseja mesmo apagar o pokemon " + capitalize(pokemon.name) + "?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        { text: "Sim", onPress: () => confirmationDelete() },
      ]
    );
  };

  const renderTeam = ({ item }: Item) => (
    <PokemonCardContainer>
      <PokemonCardDeleteButton onPress={() => deletePokemon(item)}>
        <Ionicons name={"close"} color={"red"} size={30} />
      </PokemonCardDeleteButton>
      <PokemonCardNameContainer>
        <PokemonCardNameText>{capitalize(item.name)}</PokemonCardNameText>
        {item.sprites && item.sprites.front_default && (
          <PokemonCardImage source={{ uri: item.sprites.front_default }} />
        )}
      </PokemonCardNameContainer>
      <PokemonCardButtonContainer>
        <Button
          title={"Detalhes"}
          backgroundColor={"#8ba0f9"}
          onPress={() => {
            navigation.navigate("pokemon", {
              pokemon: { ...item, url: "" },
              fromTeam: true,
            });
          }}
        />
      </PokemonCardButtonContainer>
    </PokemonCardContainer>
  );

  const renderEmptyData = () => {
    return (
      <EmptyContainer>
        <EmptyText>
          Não há nenhum{"\n"}
          Pokémon na sua equipe,{"\n"}
          Vá e capture alguns Pokémons.
        </EmptyText>
        <EmptyImage source={require("../../Assets/teamNoData.png")} />
      </EmptyContainer>
    );
  };

  return (
    <Container>
      <FlatList
        data={team}
        renderItem={renderTeam}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyData}
      />
    </Container>
  );
};

export default Team;
