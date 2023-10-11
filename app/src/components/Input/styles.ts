import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.RED_DARK};
    background-color: ${theme.COLORS.YELLOW_300};
  `}
  flex: 1;
  min-height: 61px;
  max-height: 61px;
  width: 280px;
  border-radius: 6px;
  padding: 16px;

`;
