import styled, { css } from "styled-components/native";

import { ShoppingCart, SignOut } from "phosphor-react-native";


export const StyledHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

`;

export const StyledPizza = styled.Image`
  width: 80px;
  height: 80px;
`;

export const SignOutIcon = styled(SignOut).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.YELLOW_300,
}))``;

export const Button = styled.TouchableOpacity`
`;

export const BackIcon = styled(ShoppingCart).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_500,
}))``;