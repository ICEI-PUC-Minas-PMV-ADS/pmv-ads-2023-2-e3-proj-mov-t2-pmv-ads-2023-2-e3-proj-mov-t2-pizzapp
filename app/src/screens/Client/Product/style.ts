import { Camera } from "expo-camera";
import { Image, PencilSimpleLine, Plus } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Page = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  padding: 24px;

`;

export const NameText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  padding: 0 16px;
  border-radius: 6px;
`;

export const DescriptionText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.LIME_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
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


export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  `;
export const CameraView = styled(Camera)`
  flex: 1;
  width: 100%;
  height: 50%;
  `
export const CreateGroup = styled.View``;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  `;

export const GroupButton = styled.TouchableOpacity<{ active: boolean }>`
  background-color: ${({ theme, active }) =>
    active ? theme.COLORS.YELLOW_500 : theme.COLORS.YELLOW_300};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ active }) => (active ? "space-between" : "center")};
  align-items: center;
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

export const Product = styled.View`
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${({ theme }) => theme.COLORS.RED_DARK};
  padding: 2px;
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
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const List = styled.FlatList`
  width: 100%;
  flex: 1;
  `;
