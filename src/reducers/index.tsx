import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { Pokemon, reducer as pokemonReducer } from "./pokemonReducer";

export type stateReducer = {
  pokemonReducer: {
    list_pokemons: Array<Pokemon>;
  };
};
const reducer = combineReducers({
  pokemonReducer,
});

const store = configureStore({
  reducer,
});

export default store;
