import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import { RootStackParamList } from "../routes";
import { Text, Image, ButtonContainer } from "./styled";

type HomeScreenProp = StackNavigationProp<RootStackParamList, "home">;

const Home = () => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <Container backgroundColor="#f9e48b">
      <>
        <Text>Pokédex</Text>
        <Image source={require("../../Assets/homeimage.png")} />

        <ButtonContainer>
          <Button
            onPress={() => navigation.navigate("pokemons")}
            title={"Listar Pokémons"}
            backgroundColor={"#8bf98c"}
            titleColor={"#000"}
          />
          <Button
            onPress={() => navigation.navigate("team")}
            title={"Equipe"}
            backgroundColor={"#8ba0f9"}
            titleColor={"#000"}
          />
        </ButtonContainer>
      </>
    </Container>
  );
};

export default Home;
