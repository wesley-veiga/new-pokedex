import React from "react";
import { StyledButton, StyledTitle } from "./styled";

type Props = {
  title: string;
  onPress: () => {};
  backgroundColor?: string;
  titleColor?: string;
};

const Button = (props: Props) => {
  const { title, onPress, backgroundColor, titleColor = "#fff" } = props;

  return (
    <StyledButton onPress={() => onPress()} backgroundColor={backgroundColor}>
      <StyledTitle testID="title" color={titleColor}>
        {title}
      </StyledTitle>
    </StyledButton>
  );
};

export default Button;
