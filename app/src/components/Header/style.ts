import styled, { css } from "styled-components/native";

import { CaretLeft } from "phosphor-react-native";

type Props = {
  admin: boolean;
};

export const StyledHeader = styled.View`
  gap: 25px;
  align-items: center;
`;

export const StyledTitle = styled.Text<Props>`
  ${({ theme, admin }) => css`
    font-size: ${theme.FONT_SIZE.EXL}px;
    color: ${admin ? theme.COLORS.YELLOW_300 : theme.COLORS.GREEN_500};
    font-weight: bold;
    text-align: center;
    span: {
      color: ${theme.COLORS.RED};
    }
  `}
`;

export const Highlight = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED};
`;

export const StyledSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.YELLOW_500};
    font-weight: bold;
    text-align: center;

    position: absolute;
    bottom: 15px;
    left: 110px;
  `}
`;

export const StyledPizza = styled.Image`
  width: 248px;
  height: 248px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: -30px;
  left: -30px;
  padding: 24px;
`;
export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.BLACK,
}))``;
