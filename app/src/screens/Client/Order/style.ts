import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Page = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  padding: 12px 0;
`;

export const OrderList = styled.FlatList`
  width: 100%;
  flex: 1;
`;

export const OrderItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;

export const OrderItemText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  padding: 0 16px;
  border-radius: 6px;
`;

export const OrderItemTextPrice = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  padding: 0 16px;
  border-radius: 6px;
`;

export const OrderTitle = styled.Text`
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.YELLOW_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: bold;
  padding: 0 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const QuantityText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  padding: 0 4px;
  border-radius: 6px;
`;

export const PriceText = styled.Text<{ size: number; color?: "primary" }>`
  font-weight: bold;
  color: ${({ theme, color }) =>
    color === "primary" ? theme.COLORS.RED_DARK : theme.COLORS.LIME_800};
  font-size: ${({ size }) => size}px;
  padding: 0 8px;
  border-radius: 6px;
`;

export const StatusText = styled.Text<{ color?: "green" | "red" }>`
  font-weight: bold;
  text-align: center;
  color: ${({ theme, color }) =>
    color === "red" ? theme.COLORS.RED_DARK : theme.COLORS.LIME_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  padding: 16px;
  border-radius: 6px;
`;
