import styled from "styled-components/native";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#F9F9F9"};
`;
