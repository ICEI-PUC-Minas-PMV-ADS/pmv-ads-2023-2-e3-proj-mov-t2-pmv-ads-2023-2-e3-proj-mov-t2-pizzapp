import { StyleSheet } from "react-native";
import theme from "../../theme";
import styled from "styled-components/native";



export const StyledHeader = styled.View`
  gap: 25;
  align-items: center;
`;

export const StyledTitle = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.EXL};
  font-weight: bold;
  text-align: center;
  color: ${({theme}) => theme.COLORS.GREEN_500};
  span: {
    color: ${({theme}) => theme.COLORS.RED};
  }
`;

export const Highlight = styled.Text`
  color: ${({theme}) => theme.COLORS.RED};
`;

export const StyledLogo = styled.Image`
  width: 248px;
  height: 248px;
`;

