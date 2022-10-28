import styled from "styled-components/native";

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScrollView = styled.ScrollView`
  height: 100%;
  padding: 0px 30px 0px 30px;
  margin-bottom: 2;
`;

export const PokemonName = styled.Text`
  font-size: 50px;
`;

export const PokemonInfoTitle = styled.Text`
  font-size: 30;
  margin: 20px 0px 10px 0px;
`;

export const Image = styled.Image`
  margin-top: 10px;
  width: 200px;
  height: 200px;
  border-width: 0.5px;
  border-color: #ccc;
  margin: 0px 5px 0px 5px;
  border-radius: 7px;
  background-color: #fff;
  object-fit: "contain";
`;

export const InfoText = styled.Text`
  flex-wrap: wrap;
  font-size: 20px;
  color: #000;
`;

export const Text = styled.Text`
  font-size: 15px;
`;

export const PokemonStatusContainer = styled.View`
  border-width: 0.5px;
  border-color: #ccc;
  background-color: #fff;
  width: 85px;
  height: 100px;
  margin: 0px 5px 10px 5px;
  border-radius: 7px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px 10px 0px;
`;

export const PokedexInfoContainer = styled.View`
  background-color: red;
  width: 100px;
  height: 100px;
  margin-bottom: -25px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const PokedexNumberText = styled.Text`
  font-size: ${(props) => (props.number === 0 ? 15 : 30)}px;
  color: white;
`;

export const PokedexText = styled.Text`
  text-align: center;
  color: white;
`;
