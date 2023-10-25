import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Page = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
`;

export const GroupButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const GroupText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.YELLOW_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  padding: 0 16px;
  border-radius: 6px;
`;

export const DescriptionText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.LIME_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  padding: 0 8px;
  border-radius: 6px;
`;

export const PriceText = styled.Text<{ size: number; color?: "primary" }>`
  font-weight: bold;
  color: ${({ theme, color }) =>
    color === 'primary' ? theme.COLORS.RED_DARK : theme.COLORS.LIME_800};
  font-size: ${({ size }) => size}px;
  padding: 0 8px;
  border-radius: 6px;
`;

export const Item = styled.View`
  background-color: ${({ theme }) => theme.COLORS.YELLOW_300};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 1px;
  margin-bottom: 5px;
`;

export const Product = styled.TouchableOpacity`
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${({ theme }) => theme.COLORS.RED_DARK};
  padding: 2px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductText = styled.Text`
  font-weight: bold;
  padding: 0 8px;
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const ProductList = styled.FlatList`
  width: 100%;
  flex: 1;
`;
export const Container = styled.View`
  flex: 1;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Texto = styled.Text`
  color: ${({ theme }) => theme.COLORS.YELLOW_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const List = styled.FlatList`
  width: 100%;
  flex: 1;
`;

export const InputButton = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-decoration: none;
`;

export const IconButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  padding: 6px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
