import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.RED_DARK,
    size: 'large'
}))``;