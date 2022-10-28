import React, { useState } from "react";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import SearchBar from "../../Components/SearchBar";
import Container from "../../Components/Container";
import { capitalize } from "../../Utils/capitalize";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes";

import { TouchableOpacity, View, Text, Image } from "./styled";
import { ListPokemons } from "../../reducers/pokemonReducer";

type PokemonsSreenProp = StackNavigationProp<RootStackParamList, "pokemons">;

type Item = {
  item: ListPokemons;
  index: number;
};

const Pokemons = () => {
  const navigation = useNavigation<PokemonsSreenProp>();

  const [allPokemons, setAllPokemons] = useState({
    loading: false,
    error: false,
    pokemons: [],
    data: [],
    url: "https:pokeapi.co/api/v2/pokemon?limit=1118&offset=0",
  });

  const [searchData, setSearchData] = useState<string>("");

  const getAllPokemons = () => {
    setAllPokemons({ ...allPokemons, loading: true });
    fetch(allPokemons.url)
      .then((res) => res.json())
      .then((res) => {
        setAllPokemons({
          ...allPokemons,
          loading: false,
          pokemons: res.results,
          data: res.results,
        });
      })
      .catch((ex) => {
        setAllPokemons({
          ...allPokemons,
          loading: false,
          pokemons: [],
          data: [],
          error: true,
        });
      });
  };

  const onSearch = (query: string) => {
    let listPokemon = [...allPokemons.data];
    let listQuery = listPokemon.filter((f: ListPokemons) =>
      f.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchData(query);
    setAllPokemons({ ...allPokemons, pokemons: listQuery });
  };

  useFocusEffect(
    React.useCallback(() => {
      allPokemons.data.length == 0 && getAllPokemons();
    }, [])
  );

  const renderPokemons = ({ item, index }: Item) => (
    <TouchableOpacity
      key={index}
      onPress={() => {
        navigation.navigate("pokemon", {
          pokemon: item,
          fromTeam: false,
        });
      }}
    >
      <Text>{capitalize(item.name)}</Text>
    </TouchableOpacity>
  );

  const renderEmptyData = () => {
    if (allPokemons.data.length == 0 && allPokemons.loading === false) {
      return (
        <View>
          <Text>
            Hmm...{"\n"}
            {"\n"}
            Parece que não tem nenhum pokémon por aqui! {"\n"}
            {"\n"}Puxe para atualizar.
          </Text>
          <Image source={require("../../Assets/loadError.png")} />
        </View>
      );
    } else return <React.Fragment />;
  };

  return (
    <Container>
      <>
        <SearchBar
          onChangeText={(text) => onSearch(text)}
          value={searchData}
          placeholder="Buscar..."
          placeholderTextColor={"#8888"}
          autoCorrect={false}
          maxLength={20}
        />
        <FlatList
          data={allPokemons.pokemons}
          refreshing={allPokemons.loading}
          onRefresh={() => getAllPokemons()}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={renderPokemons}
          ListEmptyComponent={renderEmptyData}
        />
      </>
    </Container>
  );
};

export default Pokemons;
