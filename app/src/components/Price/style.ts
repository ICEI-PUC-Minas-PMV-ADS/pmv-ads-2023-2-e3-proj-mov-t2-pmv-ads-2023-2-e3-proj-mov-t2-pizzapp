import styled from "styled-components/native";

export const PriceText = styled.Text<{ size: number; color?: "primary" }>`
  font-weight: bold;
  color: ${({ theme, color }) =>
    color === "primary" ? theme.COLORS.RED_DARK : theme.COLORS.LIME_800};
  font-size: ${({ size }) => size}px;
  padding: 0 8px;
  border-radius: 6px;
`;
