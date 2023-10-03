import styled, { css } from "styled-components/native";

type Props = {
  admin: boolean;
};
export const Container = styled.View`
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
    bottom: -10px;
    left: 1px;
  `}
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
