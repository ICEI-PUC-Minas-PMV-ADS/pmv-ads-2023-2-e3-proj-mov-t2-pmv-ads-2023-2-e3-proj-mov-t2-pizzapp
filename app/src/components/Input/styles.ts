import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  width: 280px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.RED_DARK};
    background-color: ${theme.COLORS.YELLOW_300};
  `}border-radius: 6px;
  padding: 16px;
`;
