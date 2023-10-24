import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
  size: "SMALL" | "MEDIUM" | "LARGE";
};

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, size }) => css`
    background-color: ${theme.COLORS.RED};
    color: ${theme.COLORS.YELLOW_300};
    font-size: ${theme.FONT_SIZE.XL}px;
    width: ${
    size === "LARGE" ? 280 : 
    size === "MEDIUM" ? 160 : 
    61
    }px;
    height: 61px;
    border-radius: 10px;
    background-color: ${({ theme, type }) =>
      type === "PRIMARY" ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_500};
    justify-content: center;
    align-items: center;
  `}
`;

export const StyledButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW_300};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-weight: bold;
    text-align: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW_300};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-weight: bold;
    text-align: center;
  `}
`;
