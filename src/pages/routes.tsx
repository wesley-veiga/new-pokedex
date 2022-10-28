import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ListPokemons } from "../reducers/pokemonReducer";

import Home from "./home";
import Pokemons from "./pokemons";
import Pokemon from "./pokemon";
import Team from "./team";

export type RootStackParamList = {
  home: undefined;
  pokemons: undefined;
  pokemon: {
    pokemon: ListPokemons;
    fromTeam: boolean;
  };
  team: undefined;
};

const Routes = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="pokemons" component={Pokemons} />
        <Stack.Screen name="pokemon" component={Pokemon} />
        <Stack.Screen name="team" component={Team} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
