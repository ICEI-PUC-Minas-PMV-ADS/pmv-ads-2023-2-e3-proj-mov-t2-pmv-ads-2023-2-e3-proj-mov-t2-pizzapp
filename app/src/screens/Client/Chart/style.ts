import { Trash } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  `;

export const Page = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  padding: 24px;

`;

export const ChartList = styled.FlatList`
  width: 100%;
  flex: 1;
  `;

export const TotalText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  padding: 0 16px;
  border-radius: 6px;
`;
export const NameText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  padding: 0 16px;
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GREEN_500};
  `;

export const Total = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  `;

export const DeleteButton = styled.TouchableOpacity`

`;
export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
size: 32,
color:theme.COLORS.GREEN_500 ,
}))``;