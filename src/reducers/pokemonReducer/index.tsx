export type ListPokemons = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  height: number;
  name: string;
  sprites: Sprites;
  species: Species;
  abilities: Array<Abilities>;
  types: Array<PokemonTypes>;
  stats: Array<Stats>;
};

export type Sprites = {
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
};

type Species = {
  name: string;
  url: string;
};

export type Abilities = {
  ability: {
    name: string;
    url: string;
    is_hidden: boolean;
    slot: number;
  };
};

export type PokemonTypes = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type Stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type Action = {
  type: string;
  payload?: Pokemon;
};

export type teamPokemons = {
  list_pokemons: Array<Pokemon>;
};

const Types = {
  ADD_POKEMON: "pokemon/ADD_POKEMON",
  REMOVE_POKEMON: "pokemon/REMOVE_POKEMON",
  CLEAR_POKEMONS: "pokemon/CLEAR_POKEMONS",
};

const INITIAL_STATE = {
  list_pokemons: [],
};

export const reducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case Types.ADD_POKEMON:
      return {
        ...state,
        list_pokemons: [...state.list_pokemons, action.payload],
      };
    case Types.REMOVE_POKEMON:
      return {
        ...state,
        list_pokemons: [
          ...state.list_pokemons.filter(
            (f: Pokemon) => f.id !== action.payload?.id
          ),
        ],
      };
    case Types.REMOVE_POKEMON:
      return {
        ...state,
        list_pokemons: [],
      };
    default:
      return state;
  }
};

export const addPokemon = (pokemon: Pokemon) => ({
  type: Types.ADD_POKEMON,
  payload: pokemon,
});

export const removePokemon = (pokemon: Pokemon) => ({
  type: Types.REMOVE_POKEMON,
  payload: pokemon,
});

export const clearPokemons = () => ({
  type: Types.CLEAR_POKEMONS,
});
