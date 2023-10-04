import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Page = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  padding: 24px;
`;

export const Container = styled.View`
  flex: 1;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Texto = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.XXL}px;
`

export const InputButton = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
