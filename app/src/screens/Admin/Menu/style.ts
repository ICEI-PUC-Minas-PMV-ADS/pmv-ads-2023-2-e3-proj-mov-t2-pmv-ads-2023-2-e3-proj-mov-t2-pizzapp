import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Page = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.ORANGE_500};
  padding: 24px;
`;

export const CreateGroup = styled.View`
`;

export const Item = styled.View`
  background-color: ${({ theme }) => theme.COLORS.YELLOW_300};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 5px;
`;

export const ItemText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
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
