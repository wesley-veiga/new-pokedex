import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "./styled";

type Props = {
  backgroundColor?: string;
  children: JSX.Element;
};

const Container = ({ backgroundColor, children }: Props) => {
  return (
    <SafeAreaView testID="container">
      <StatusBar
        barStyle="dark-content"
        backgroundColor={backgroundColor ? backgroundColor : "#F9F9F9"}
      />
      {children}
    </SafeAreaView>
  );
};

export default Container;
