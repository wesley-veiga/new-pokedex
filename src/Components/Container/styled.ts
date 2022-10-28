import styled from "styled-components/native";

type Props = {
  backgroundColor: string;
};

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props: Props) =>
    props.backgroundColor ? props.backgroundColor : "#F9F9F9"};
`;
