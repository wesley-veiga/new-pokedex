import React from "react";
import { TextInputProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyledIconContainer, TextInput } from "./styled";

const SearchBar = ({ ...props }: TextInputProps) => {
  return (
    <View>
      <TextInput style={{ flex: 1 }} {...props} />
      <StyledIconContainer>
        <Ionicons name={"search"} color={"gray"} size={30} />
      </StyledIconContainer>
    </View>
  );
};

export default SearchBar;
