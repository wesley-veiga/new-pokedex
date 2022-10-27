import styled from "styled-components/native";

export const StyledButton = styled.TouchableOpacity`
  width: 80%;
  height: 70px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "green"};
  justify-content: center;
  border-radius: 7px;
  margin-top: 5px;
  margin-bottom: 5px;
  align-self: center;
`;

export const StyledTitle = styled.Text`
  font-weight: 400;
  font-size: 25rem;
  color: ${(props) => (props.color ? props.color : "#FFF")};
  text-align: center;
`;
