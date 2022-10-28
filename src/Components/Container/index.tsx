import React, { ReactElement } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "./styled";

type Props = {
  backgroundColor?: string;
  children: ReactElement;
};

const Container = ({ backgroundColor, children }: Props) => {
  return (
    <SafeAreaView testID="container" backgroundColor={backgroundColor}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={backgroundColor ? backgroundColor : "#F9F9F9"}
      />
      {children}
    </SafeAreaView>
  );
};

export default Container;
