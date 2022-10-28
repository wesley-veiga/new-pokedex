import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  margin: 10px 0px 0px 30px;
`;

export const HeaderTitle = styled.Text`
  font-size: 50px;
  letter-spacing: 7px;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
`;

export const PokemonCardContainer = styled.View`
  padding: 10px;
  border-width: 0.5px;
  border-color: #ccc;
  margin: 15px 0px 15px 0px;
  border-radius: 7px;
  width: 90%;
  min-height: 100px;
  align-self: center;
  background-color: #fff;
`;

export const PokemonCardNameText = styled.Text`
  font-size: 30px;
`;

export const PokemonCardButtonContainer = styled.View`
  justify-content: center;
`;

export const PokemonCardImage = styled.Image`
  width: 150px;
  height: 150px;
  margin: 0px 5px 0px 5px;
  background-color: #fff;
  object-fit: contain;
`;

export const PokemonCardNameContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const PokemonCardDeleteButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  border-width: 1px;
  border-radius: 20px;
  border-color: red;
  height: 40px;
  width: 40px;
`;

export const EmptyContainer = styled.View`
  margin: 50px 30px 50px 30px;
`;

export const EmptyText = styled.Text`
  font-size: 20px;
`;

export const EmptyImage = styled.Image`
  width: 200px;
  object-fit: contain;
  height: 200px;
  align-self: flex-end;
`;
