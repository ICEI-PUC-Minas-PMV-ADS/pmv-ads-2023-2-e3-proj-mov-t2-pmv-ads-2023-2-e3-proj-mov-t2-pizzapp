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
  justify-content: center;
`;
